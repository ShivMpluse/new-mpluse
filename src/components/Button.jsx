import { CgArrowTopRight } from "react-icons/cg";

const Button = ({ className, text }) => {
    return (
        <span className="relative inline-flex items-center mt-6 cursor-pointer group">
            <button className={`rounded-full px-6 py-3 transition-all font-medium ${className}`} aria-label={text}>
                {text}
            </button>
            <div className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 rounded-full p-3 bg-white border transition-transform group-hover:translate-x-1">
                <CgArrowTopRight className="text-black" />
            </div>
        </span>
    );
};

export default Button;
