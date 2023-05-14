import React from "react";

export const someVarNoUses = 'Hello, world!';
module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
