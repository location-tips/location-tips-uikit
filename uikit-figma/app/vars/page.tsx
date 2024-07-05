'use client';
import { useFormState, useFormStatus } from "react-dom";
import { GenerateVarsState, generateVars } from "../actions/generate-vars-actions";

const initialFormState: GenerateVarsState = {
  jsonFiles: [],
  cssFiles: [],
}

export default async function Variables() {
    const [state, formAction] = useFormState<GenerateVarsState, FormData>(generateVars, initialFormState)
    const { pending } = useFormStatus();

    return (
      <form action={formAction}>
        {state.error && <div>{state.error}</div>}
        {pending && <div>Generating...</div>}
        <div><label htmlFor="fileId">File ID</label>
          <div><input type="text" name="fileId" defaultValue="3eE8HCDp8wLaWM1Jii0u44"/></div>
        </div>
        <div>
          <button type="submit">Generate</button>
        </div>

        {state.jsonFiles.length > 0 && <div>
          <h2>Generated JSON files</h2>
          <ul>
            {state.jsonFiles.map((file) => (<li>{file}</li>))}
          </ul>
        </div>}

        {state.cssFiles.length > 0 && <div>
          <h2>Generated CSS files</h2>
          <ul>
            {state.cssFiles.map((file) => (<li>{file}</li>))}
          </ul>
        </div>}
      </form>
    );
  }
  