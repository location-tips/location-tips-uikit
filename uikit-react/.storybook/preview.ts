import "../src/styles/index.css"

export const parameters = {
    rootAttributes: [
        {
            root: "html",
            attribute: "data-brand",
            defaultState: {
                name: "White Label",
                value: "white-label",
            },
            states: [
                {
                    name: "White Label",
                    value: "white-label",
                },
                {
                    name: "Brand01",
                    value: "brand01",
                },
                {
                    name: "Brand02",
                    value: "brand02",
                },
            ],
        },
        {
            root: "html",
            attribute: "data-theme",
            defaultState:
            {
                name: "Light",
                value: "light",
            },
            states: [
                {
                    name: "Dark",
                    value: "dark",
                },
                {
                    name: "Light",
                    value: "light",
                },
            ],
        },
        {
            root: "html",
            attribute: "data-platform",
            defaultState: {
                name: "Web Desktop",
                value: "web-desktop",
            },
            states: [
                {
                    name: "IOS",
                    value: "ios",
                },
                {
                    name: "Android",
                    value: "android",
                },
                {
                    name: "Web Desktop",
                    value: "web-desktop",
                },
                {
                    name: "Web Mobile",
                    value: "web-mobile",
                },
                {
                    name: "Web Tablet",
                    value: "web-tablet",
                },
            ],
        },
    ],
}
export const tags = ["autodocs"];
