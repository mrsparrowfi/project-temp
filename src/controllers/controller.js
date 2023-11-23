
export function H4Title (title) {

    return (
        <>
            <div className="h4--container">
                <h4 className="h4--title"> { title } </h4>
            </div>
        </>
    );

}

export function H6Title (title) {

    return (
        <>
            <div className="h6--container">
                <h6 className="h6--title"> { title } </h6>
            </div>
        </>
    );

}

export function H6ITitle (title, iclass) {

    return (
        <>
            <div className="h6--container">
                <h6 className="h6--title"> <i className={ iclass } ></i> { title } </h6>
            </div>
        </>
    );

}

export function Banner (classname) {

    return (
        <>
            <div id={ classname } className={ classname }>
            </div>
        </>
    );

}

export function Divider (classname) {

    return (
        <>
            <div id={ classname } className={ classname }>
            </div>
        </>
    );

}

export const BackToTop = () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}

export const BackToBottom = () => {

    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });

};

export const ScrollToTarget = (ref) => {

    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
    });

};
