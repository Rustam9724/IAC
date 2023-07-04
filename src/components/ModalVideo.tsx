function ModalVideo() {
    return (
        <div className="modal-video">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j5LzEASx4YM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default ModalVideo;