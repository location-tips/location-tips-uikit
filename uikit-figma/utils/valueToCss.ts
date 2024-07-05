import { ROOT_FONT_SIZE } from "uikit-figma/app/constants/base";
import { Color, ModeValues, ResolveType } from "uikit-figma/types/types";

function resolver(type: ResolveType, value: ModeValues): string {
    switch (type) {
        case "BOOLEAN":
            return value ? "true" : "false";
        case "FLOAT":
            return (Number(value) / ROOT_FONT_SIZE).toFixed(2).toString() + "rem";
        case "STRING":
            return `"${value}"`;
        case "COLOR":
            const v = value as Color;
            return `rgba(${v.r * 255}, ${v.g * 255}, ${v.b * 255}, ${v.a})`;
    }

    return "";
}

export const valueToCss = (type: ResolveType, value: ModeValues) => {
    return resolver(type, value);
};