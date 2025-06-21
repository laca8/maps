

const Loader = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-ocean-deep via-ocean to-ocean-deep rounded-2xl flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-foreground">Loading interactive map...</p>
            </div>
        </div>
    )
}

export default Loader