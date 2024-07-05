'use client';
import { useFormState, useFormStatus } from "react-dom";
import { GenerateIconTypesState, generateIconTypes } from "../actions/generate-icon-types-actions";

const initialFormState: GenerateIconTypesState = {
  tsFiles: [],
  jsonFiles: [],
}

export default async function IconTypes() {
    const [state, formAction] = useFormState<GenerateIconTypesState, FormData>(generateIconTypes, initialFormState)
    const { pending } = useFormStatus();

    return (
      <form action={formAction}>
        {state.error && <div>{state.error}</div>}
        {pending && <div>Generating...</div>}
        <div><label htmlFor="iconsFolder">File ID</label>
          <div><input type="text" name="iconsFolder" defaultValue="icons"/></div>
        </div>
        <div>
          <button type="submit">Generate</button>
        </div>

        {state.tsFiles.length > 0 && <div>
          <h2>Generated TS files</h2>
          <ul>
            {state.tsFiles.map((file) => (<li>{file}</li>))}
          </ul>
        </div>}

        {state.jsonFiles.length > 0 && <div>
          <h2>Generated JSON files</h2>
          <ul>
            {state.jsonFiles.map((file) => (<li>{file}</li>))}
          </ul>
        </div>}
        
      </form>
    );
  }
  