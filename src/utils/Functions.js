import React from "react";

const CommandHelp = ({ ...args }) => {
    args.arguments.setResult([...args.arguments.result, <div key={args.arguments.result.length}>This is a help text</div>]);
}

const CommandPreviousJobs = ({ ...args }) => {
    console.log("This is Previous Jobs");
    console.log(args);
}

const CommandClear = ({ ...args }) => {
    args.arguments.setResult([]);
}

const HandleCommand = (args) => {
    const commandList = new Map();
    commandList.set('help', CommandHelp);
    commandList.set('previous-jobs', CommandPreviousJobs);
    commandList.set('clear', CommandClear);

    let command = args.value.split(' ');

    let func = commandList.get(command[0]);
    if (func !== undefined) {
        func({ comm: command.slice(1), arguments: args });
        return;
    }

    args.setResult([...args.result, <div key={args.result.length}>Command {command} does not exist</div>])
}

export { HandleCommand };