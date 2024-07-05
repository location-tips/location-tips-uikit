'use client';
import { useFormState, useFormStatus } from "react-dom";
import { GenerateIconFilesState, generateIconReactComponents } from "uikit-figma/app/actions/generate-icon-react-components-actions";

const initialFormState: GenerateIconFilesState = {
  iconsFiles: [],
}

export default async function ReactIcons() {
    const [state, formAction] = useFormState<GenerateIconFilesState, FormData>(generateIconReactComponents, initialFormState)
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

        {state.iconsFiles.length > 0 && <div>
          <h2>Generated React Components</h2>
          <ul>
            {state.iconsFiles.map((file) => (<li>{file}</li>))}
          </ul>
        </div>}
        
      </form>
    );
  }
  