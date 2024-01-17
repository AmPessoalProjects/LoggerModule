import fs from 'fs/promises';
import chalk from 'chalk';
import path from 'path';

/**
 * @typedef { "black" | "gray" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright" } Color
 */

export default class LoggerModule {
    /**
     * @param {Object} [options] 
     * @param {Boolean} [options.debug]
     * @param {Object} [options.file]
     * @param {Boolean} [options.file.enable]
     * @param {String} [options.file.path]
     * @param {String} [options.file.fileName]
     * @param {String} [options.timestampFormat]
     */
    constructor(options) {
        this.settings = {
            debug: !!options.debug,
            file: {
                enable: !!options.file?.enable,
                path: path.resolve(process.cwd(), options.file?.path || 'logs'),
                fileName: options.file?.fileName || 'log'
            },
            timestampFormat: options.timestampFormat || 'default'
        }

        const timestamp = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = this._padZero(now.getMonth() + 1);
            const day = this._padZero(now.getDate());
            const hours = this._padZero(now.getHours());
            const minutes = this._padZero(now.getMinutes());
            const seconds = this._padZero(now.getSeconds());

            return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
        }
        this.pathLog = path.resolve(this.settings.file.path + '/' + this.settings.file.fileName + "_" + timestamp() + '.log');

        this.log = this.log;
        this.info = this.info;
        this.debug = this.debug;
        this.warn = this.warn;
        this.error = this.error;
        this.prefix = this.prefix;

        if (this.settings.debug) this._internalLog("Logger started!");
        if (this.settings.debug && this.settings.file.enable) this._internalLog("File logging enabled! In the path: " + this.pathLog);
    }

    /**
     * @param {String} prefix
     * @param {String} message
     * @param {Color} [prefixColor]
     * @param {Color} [messageColor]
     */
    prefix(prefix, message, prefixColor, messageColor) {
        return this._log(prefix, message, prefixColor, messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    log(message, messageColor = "blueBright") {
        return this._log("LOG", message, "blue", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    error(message, messageColor = "redBright") {
        return this._log("ERROR", message, "red", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    info(message, messageColor = "greenBright") {
        return this._log("INFO", message, "green", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    debug(message, messageColor = "magentaBright") {
        return this._log("DEBUG", message, "magenta", messageColor);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    warn(message, messageColor = "yellowBright") {
        return this._log("WARN", message, "yellow", messageColor);
    }

    /**
     * @param {String} level
     * @param {String} message
     * @param {Color} [levelColor]
     * @param {Color} [messageColor]
     */
    _log(level, message, levelColor = "white", messageColor = "white") {
        const timestamp = this._formatTimestamp();
        const logHeader = `${timestamp.color} ${chalk.gray('[')}${chalk[levelColor](level)}${chalk.gray(']')}`;
        const messageFormatColor = `${logHeader} ${chalk[messageColor](message)}`;
        const messageFormaText = `${timestamp.text} [${level}] ${message}`;

        console.log(messageFormatColor);
        this._saveLog(messageFormaText);
    }

    /**
     * @param {String} message
     * @param {Color} [messageColor]
     */
    _internalLog(message, messageColor = "yellowBright") {
        return console.log(this._formatTimestamp().color + chalk.gray(' [') + chalk.blue("LOGGER-MODULE") + chalk.gray('] ') + chalk[messageColor](message));
    }

    _formatTimestamp() {
        const now = new Date();

        if (this.settings.timestampFormat === 'default') {
            return this._defaultTimestampFormat(now);
        } else if (typeof this.settings.timestampFormat === 'string') {
            return this._customTimestampFormat(this.settings.timestampFormat, now);
        } else {
            this.error('Invalid timestamp format');
        }
    }

    /**
     * @param {Date} date 
     */
    _defaultTimestampFormat(date) {
        const year = date.getFullYear();
        const month = this._padZero(date.getMonth() + 1);
        const day = this._padZero(date.getDate());
        const hours = this._padZero(date.getHours());
        const minutes = this._padZero(date.getMinutes());
        const seconds = this._padZero(date.getSeconds());

        return {
            color: chalk.gray('[') + chalk.cyan(`${day}/${month}/${year}`) + chalk.gray(' - ') + chalk.green(`${hours}:${minutes}:${seconds}`) + chalk.gray(']'),
            text: `[${day}/${month}/${year} - ${hours}:${minutes}:${seconds}]`
        };
    }

    /**
     * @param {String} format 
     * @param {Date} date 
     */
    _customTimestampFormat(format, date) {
        const formatMapping = {
            'yyyy': date.getFullYear(),
            'yy': String(date.getFullYear()).slice(-2),
            'MM': this._padZero(date.getMonth() + 1),
            'M': date.getMonth() + 1,
            'dd': this._padZero(date.getDate()),
            'd': date.getDate(),
            'HH': this._padZero(date.getHours()),
            'H': date.getHours(),
            'hh': this._padZero((date.getHours() % 12) || 12),
            'h': (date.getHours() % 12) || 12,
            'mm': this._padZero(date.getMinutes()),
            'm': date.getMinutes(),
            'ss': this._padZero(date.getSeconds()),
            's': date.getSeconds(),
            'a': date.getHours() < 12 ? 'AM' : 'PM'
        };

        const splitted = format.split(' ');
        const formattedTimestamp = [];
        const formattedTimestampText = [];
        const timeRegex = /yyyy|yy|MM|M|dd|d|HH|H|hh|h|mm|m|ss|s|a/g;
        splitted.forEach((part) => {
            const colorRegex = /\{\{([^}]+)\}\}/g;
            const colorMatches = part.match(colorRegex);

            if (colorMatches) {
                colorMatches.forEach((match) => {
                    let color = match.replace('{{', '').replace('}}', '').trim();
                    let text = part.replace(match, '')

                    if (!this._isValidColor(color)) {
                        color = "white";
                    }

                    text = text.replace(timeRegex, match => formatMapping[match]);

                    formattedTimestamp.push(chalk[color](text));
                    formattedTimestampText.push(text);
                });
            } else {
                const text = part.replace(timeRegex, match => formatMapping[match]);

                formattedTimestamp.push(text);
                formattedTimestampText.push(text);
            }
        });

        return {
            color: chalk.gray('[') + formattedTimestamp.join(' ') + chalk.gray(']'),
            text: `[${formattedTimestamp.join(' ')}]`
        };
    }

    /**
     * @param {Number} value
     */
    _padZero(value) {
        return value.toString().padStart(2, '0');
    }

    /**
     * @param {String} message 
     */
    async _saveLog(message) {
        if (!this.settings.file.enable) return;

        const checkLogsFolder = async () => {
            try {
                await fs.access(this.settings.file.path);
            } catch (e) {
                if (e.code === 'ENOENT') {
                    try {
                        await fs.mkdir(this.settings.file.path, { recursive: true });
                    } catch (err) {
                        this._internalLog(`Error creating directory: ${this.settings.file.path}`, "redBright");
                    }
                } else {
                    this._internalLog(`Error checking directory: ${e.message}`, "redBright");
                }
            }
        }
        await checkLogsFolder();

        const checkLogsFile = async () => {
            try {
                await checkLogsFolder();
                await fs.access(this.pathLog);
            } catch (e) {
                if (e.code === 'ENOENT') {
                    try {
                        await checkLogsFolder();
                        await fs.writeFile(this.pathLog, "");
                    } catch (err) {
                        console.log(err);
                        this._internalLog(`Error creating log file: ${err.message}`, "redBright");
                    }
                } else {
                    this._internalLog(`Error checking log file: ${e.message}`, "redBright");
                }
            }
        }
        await checkLogsFile();

        try {
            if (!message) return;
            await fs.appendFile(this.pathLog, `${message}\n`);
        } catch (err) {
            this._internalLog(`Error saving log: ${err.message}`, "redBright");
        }
    }

    /**
     * @param {String} color
     * @returns {Boolean}
     */
    _isValidColor(color) {
        const validColors = ["black", "gray", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "blackBright", "redBright", "greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
        return validColors.includes(color);
    }
}