import React, { useEffect, useRef, useState } from "react";
import { Editor } from "primereact/editor";
import DOMPurify from "dompurify";

export const App = () => {
	const [textValue, setTextValue] = useState("");
	const sanitizedHTML = DOMPurify.sanitize(textValue);

  useEffect(() => {
    setTextValue(texto)
  }, [])

	return (
		<div>
			<Editor
				value={textValue}
				onTextChange={(e) => setTextValue(e.htmlValue)}
				// headerTemplate={header}
				style={{ height: "320px" }}
			/>
			<hr />

			{/* <div ref={ref}></div> */}

			<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
		</div>
	);
};


const texto = "<p><strong>hola</strong></p>"