export default function ToogleOff(opts) {
    return (
        <div style={{ cursor: "pointer" }} className="toogleOff transitionToogle" id={`toogleOff-${opts.qnt}`}>
            <div style={{ cursor: "pointer" }} className="bollToogleOff" id={`bollToogleOff-${opts.qnt}`} />
        </div>
    )
};