'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var command = require('../command');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        // This makes `command` a required argument.
        this.argument('command', { type: String, required: false });

    },

    _commands: {
        '_baseCommand' : 'yo',
        '*' : {
            args: ['spira:run', 'php', 'api/artisan', '<%= process.argv.slice(3).join(" ") %>'],
            description: 'Run arbitrary artisan command'
        }
    },

    command: function(){
        command.register(this, this._commands, this.command);
    }

});
