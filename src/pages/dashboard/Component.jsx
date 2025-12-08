import { useState } from "react"
import CommonEditor from "../../components/CommonEditor"
import { Loader } from "../../components/Loader"
import CommonSelect from "../../components/CommonSelect"
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
    return (
        <>
            <CommonEditor value={value} setValue={setValue} />
            <button onClick={handleClick}>Submit</button>
            <Loader />
            <div className="p-10">
                <CommonSelect
                    label="Select Country"
                    options={countryOptions}
                    onChange={setCountry}
                />
                <p className="mt-4">Selected country: {country}</p>
            </div>
            <div className="p-10">
                <Tabs
                    tabs={tabList}
                    active={activeTab}
                    onChange={setActiveTab}
                />

                <div className="mt-6">
                    {activeTab === "Home" && <p>You’re on the Home tab.</p>}
                    {activeTab === "Profile" && <p>You’re on the Profile tab.</p>}
                    {activeTab === "Settings" && <p>You’re on the Settings tab.</p>}
                </div>
            </div>        </>
    )
}

export default Component