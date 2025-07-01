import { useState, useRef } from "react";
import Input from "../components/Input";
import type { InputRef } from "antd";

export default function Docs() {
     const [controlledValue, setControlledValue] = useState("");

     const uncontrolledRef = useRef<InputRef>(null);

     const [uncontrolledValue, setUncontrolledValue] = useState("Initial uncontrolled");

     const handleUncontrolledChange = () => {
          if (uncontrolledRef.current) {
               const val = uncontrolledRef.current?.input?.value || "";
               setUncontrolledValue(val);
          }
     };

     return (
          <div className="max-w-xl mx-auto p-6">
               <h1 className="text-2xl font-bold mb-6">Controlled vs Uncontrolled Input</h1>
               <div className="mb-8 p-4 border rounded">
                    <Input
                         label="Controlled Input:"
                         placeholder="Type here..."
                         value={controlledValue}
                         onChange={(e) => setControlledValue(e.target.value)}
                    />
                    <div className="text-blue-600 text-sm font-semibold">
                         This is a controlled input
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                         Current value from React state: <strong>{controlledValue}</strong>
                    </div>
               </div>
               <div className="mb-8 p-4 border rounded">
                    <Input
                         label="Uncontrolled Input:"
                         placeholder="Type here..."
                         defaultValue="Initial uncontrolled"
                         ref={uncontrolledRef}
                         onChange={handleUncontrolledChange}
                    />
                    <div className="text-green-600 text-sm font-semibold">
                         This is an uncontrolled input
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                         Current value from ref: <strong>{uncontrolledValue}</strong>
                    </div>
               </div>
          </div>
     );
}
