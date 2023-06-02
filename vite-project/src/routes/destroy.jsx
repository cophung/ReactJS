import { redirect } from "react-router-dom";
import { deleteContact } from "./contacts";

export async function action({ params }) {
    //#region catch error
    const d = new Date();
    let minutes = d.getMinutes();
    if (minutes % 2 == 0) {
        throw new Error("oh dang!");
    }
    //#endregion
    await deleteContact(params.contactId);
    return redirect("/");
}