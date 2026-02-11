import CloseIcon from "../atoms/CloseIcon";

const CloseButton = ({
  setDrawerOpen,
}: {
  setDrawerOpen: (open: boolean) => void;
}) => {
  return (
    <button
      type="button"
      aria-label="Close menu"
      onClick={() => setDrawerOpen(false)}
      className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
