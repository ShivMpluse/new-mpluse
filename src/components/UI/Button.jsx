import { CgArrowTopRight } from "react-icons/cg";

const Button = ({ className, text }) => {
    return (
        <span className="relative inline-flex items-center group">
            <button className={`box-border rounded-sm px-3 py-1 transition-all cursor-pointer font-medium ${className}`} aria-label={text}>
                {text}
            </button>
        </span>
    );
};

export default Button;
