import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import type { User } from "../model/user";

export default function Users() {
     const location = useLocation();
     const user = location.state as User | undefined;

     if (!user) {
          return <div className="p-4">No user data available.</div>;
     }

     return (
          <div className="min-h-screen flex justify-center items-center p-4">
               <Card title="User Information" className="w-full max-w-md gap-1">
                    <p><strong>Fullname:</strong> {user.fullname || "-"}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Password:</strong> {user.password}</p>
               </Card>
          </div>
     );
}
