export type ResolveType = "BOOLEAN" | "FLOAT" | "STRING" | "COLOR";
export type Color = { r: number, g: number, b: number, a: number };
export type VariableAlias = { id: string, type?: string };

export type Mode = { modeId: string, name: string }
export type ModeValues = Boolean | Number | String | Color | VariableAlias;

export type Collection = {
  id: string; // The unique identifier of this variable collection.
  name: string; // The name of this variable collection.
  key: string; // The key of the variable collection.
  modes: Mode[]; // The list of modes defined for this variable collection.
  defaultModeId: string; // The id of the default mode.
  remote: boolean; // Whether the variable collection is remote.
  hiddenFromPublishing: boolean; // Whether this variable collection is hidden when publishing the current file as a library.
  variableIds: string[]; // The ids of the variables in the collection.
};

export type Variable = {
  id: string; // The unique identifier of this variable.
  name: string; // The name of this variable.
  key: string; // The key of the variable.
  variableCollectionId: string; // The id of the variable collection that contains this variable.
  resolvedType: ResolveType; // The resolved type of the variable.
  valuesByMode: Record<string, ModeValues> // The values for each mode of this variable.
  remote: boolean; // Whether the variable is remote.
  description: string; // Description of this variable.
  hiddenFromPublishing: boolean; // Whether this variable is hidden when publishing the current file as a library.
  scopes: string[]; // An array of scopes in the UI where this variable is shown.
  codeSyntax: string; // Code syntax definitions for this variable.
};
