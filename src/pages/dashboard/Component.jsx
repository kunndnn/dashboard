import { useState } from "react"
import CommonEditor from "../../components/CommonEditor"
import { Loader } from "../../components/Loader"
import CommonSelect from "../../components/CommonSelect"
import CommonConfirm from '../../components/CommonConfirm'
import { Tabs } from "../../components/Tabs"

const Component = () => {
    const [value, setValue] = useState("")
    const [country, setCountry] = useState("");

    const handleClick = () => {
        console.log({ value });
    }

    const countryOptions = [
        { value: "india", label: "India" },
        { value: "usa", label: "USA" },
        { value: "uk", label: "United Kingdom" },
    ];

    const [activeTab, setActiveTab] = useState("Home");
    const tabList = ["Home", "Profile", "Settings"];
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg"
                    onClick={() => setOpen(true)}
                >
                    Delete Item
                </button>

                <CommonConfirm
                    open={open}
                    title="Delete this item?"
                    message="This action cannot be undone."
                    onCancel={() => setOpen(false)}
                    onConfirm={() => {
                        console.log("Deleted!");
                        setOpen(false);
                    }}
                />
            </div>
            <CommonEditor value={value} setValue={setValue} />
            <button onClick={handleClick}>Submit</button>
            <Loader />
            <div className="p-10">
                <CommonSelect
                    label="Select Country"
                    options={countryOptions}
                    onChange={setCountry}
                />
                <p className="mt-4 dark:text-white">Selected country: {country}</p>
            </div>
            <div className="p-10">
                <Tabs
                    tabs={tabList}
                    active={activeTab}
                    onChange={setActiveTab}
                />

                <div className="mt-6">
                    {activeTab === "Home" && <p className="dark:text-white">You’re on the Home tab.</p>}
                    {activeTab === "Profile" && <p className="dark:text-white">You’re on the Profile tab.</p>}
                    {activeTab === "Settings" && <p className="dark:text-white">You’re on the Settings tab.</p>}
                </div>
            </div>
        </>
    )
}

export default Component