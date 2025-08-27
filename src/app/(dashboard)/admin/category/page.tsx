"use client"
import { FormInput } from "@/components";
import { Button } from "@/components/ui";
import { getCategory } from "@/services/category";
import React from "react";

export default function DashboardPage() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    (async () => setData(await getCategory()))(); // inqnakachvox funkcia
  }, []);

  return (
    <>
      <div>
        <form>
          <FormInput name="name" label="Category" />
          <Button></Button>
        </form>
        <ul>
            {data.map((el) => (
            <li key={el.id} className="flex justify-between items-center">
                <span>{el.name}</span>
                <div>
                <Button>edit</Button>
                <Button variant={"destructive"}>delete</Button>
                </div>
            </li>
        ))}
        </ul>
    </div>
    </>
);
}
