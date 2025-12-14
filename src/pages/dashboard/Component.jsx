import { useState, useEffect } from "react"
import CommonEditor from "@/components/ui/CommonEditor"
import { Loader } from "@/components/ui/Loader"
import CommonSelect from "@/components/ui/CommonSelect"
import CommonConfirm from '@/components/ui/CommonConfirm'
import { Tabs } from "@/components/ui/Tabs"
import CommonAlert from "@/components/ui/CommonAlert"
import CommonPagination from "@/components/ui/CommonPagination"
import CommonSkeleton from "@/components/ui/CommonSkeleton"
import CommonModal from "@/components/ui/CommonModal"
import CommonAvatar from "@/components/ui/CommonAvatar"
import CommonTooltip from "@/components/ui/CommonTooltip"
import CommonButton from "@/components/ui/CommonButton"

const Component = () => {
    const [value, setValue] = useState("")
    const [country, setCountry] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        console.log({ value });
    }

    // Simulate loading for Skeleton demo
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const countryOptions = [
        { value: "india", label: "India" },
        { value: "usa", label: "USA" },
        { value: "uk", label: "United Kingdom" },
    ];

    const [activeTab, setActiveTab] = useState("Home");
    const tabList = ["Home", "Profile", "Settings"];
    const [openConfirm, setOpenConfirm] = useState(false);

    return (
        <div className="space-y-8 p-6 pb-20">
            {/* AVATAR & TOOLTIP SECTION */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Avatars & Tooltips</h2>
                <div className="flex gap-4 items-center">
                    <CommonTooltip content="Online User">
                        <CommonAvatar size="lg" status="online" />
                    </CommonTooltip>

                    <CommonTooltip content="Busy User">
                        <CommonAvatar size="md" status="busy" />
                    </CommonTooltip>

                    <CommonTooltip content="Offline User">
                        <CommonAvatar size="sm" status="offline" />
                    </CommonTooltip>

                    <CommonTooltip content="With Image" position="right">
                        <CommonAvatar
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            size="xl"
                            status="online"
                        />
                    </CommonTooltip>
                </div>
            </div>

            <hr className="dark:border-gray-800" />

            {/* MODAL SECTION */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Modal</h2>
                <CommonButton onClick={() => setModalOpen(true)} label="Open Custom Modal" />

                <CommonModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Terms of Service"
                    footer={
                        <>
                            <CommonButton variant="secondary" onClick={() => setModalOpen(false)} label="Decline" />
                            <CommonButton onClick={() => setModalOpen(false)} label="Accept" />
                        </>
                    }
                >
                    <p className="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                    </p>
                </CommonModal>
            </div>

            <hr className="dark:border-gray-800" />

            {/* ALERTS SECTION */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Alerts</h2>
                <CommonAlert type="info" title="Information">
                    This is an info alert to notify you about something important.
                </CommonAlert>
                <CommonAlert type="success" title="Success">
                    Operation completed successfully!
                </CommonAlert>
                <CommonAlert type="warning" title="Warning" dismissible>
                    This is a warning you can dismiss.
                </CommonAlert>
                <CommonAlert type="danger" title="Error">
                    Something went wrong! Please try again.
                </CommonAlert>
            </div>

            <hr className="dark:border-gray-800" />

            {/* SKELETON SECTION */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Skeleton Loading</h2>
                <div className="p-4 border rounded-xl dark:border-gray-800">
                    <div className="flex items-center gap-4">
                        {loading ? <CommonSkeleton variant="circular" width="48px" height="48px" /> : <CommonAvatar size="lg" status="online" />}
                        <div className="space-y-2 flex-1">
                            {loading ? <CommonSkeleton width="60%" /> : <h3 className="font-bold dark:text-white">User Name</h3>}
                            {loading ? <CommonSkeleton width="40%" height="15px" /> : <p className="text-sm dark:text-gray-400">Software Engineer</p>}
                        </div>
                    </div>
                    <div className="mt-4">
                        {loading ? <CommonSkeleton height="80px" variant="rectangular" /> : <p className="dark:text-gray-300">This is the actual content that appears after loading...</p>}
                    </div>
                    <button
                        onClick={() => setLoading(!loading)}
                        className="mt-4 text-sm text-blue-600 hover:underline"
                    >
                        Toggle Loading
                    </button>
                </div>
            </div>

            <hr className="dark:border-gray-800" />

            {/* PAGINATION SECTION */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Pagination</h2>
                <p className="dark:text-white">Current Page: {page}</p>
                <CommonPagination
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                />
            </div>

            <hr className="dark:border-gray-800" />

            {/* EDITOR & EXISTING COMPONENTS */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold dark:text-white">Editor & Dialogs</h2>
                <div>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                        onClick={() => setOpenConfirm(true)}
                    >
                        Delete Item
                    </button>

                    <CommonConfirm
                        open={openConfirm}
                        title="Delete this item?"
                        message="This action cannot be undone."
                        onCancel={() => setOpenConfirm(false)}
                        onConfirm={() => {
                            console.log("Deleted!");
                            setOpenConfirm(false);
                        }}
                    />
                </div>
                <CommonEditor value={value} setValue={setValue} />
                <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-2">Submit</button>
                <div className="mt-2"><Loader /></div>
            </div>

            <div className="p-6 border rounded-xl dark:border-gray-800">
                <CommonSelect
                    label="Select Country"
                    options={countryOptions}
                    onChange={setCountry}
                />
                <p className="mt-4 dark:text-white">Selected country: {country}</p>
            </div>

            <div className="p-6 border rounded-xl dark:border-gray-800">
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
        </div>
    )
}

export default Component