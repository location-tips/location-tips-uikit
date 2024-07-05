import { Variable } from "uikit-figma/types/types";
import { nameToVar } from "./nameToVar";

export const variableAlias = (id: Variable["id"], variables: Map<Variable["id"], Variable>) => {
    const variable = variables.get(id);
    if (!variable) {
        return "";
    }

    return `var(${nameToVar(variable.name)})`;
}