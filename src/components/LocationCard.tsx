import { memo } from 'react'
import type { Location } from '../types/type';
import { MapPin, Users, Globe, Clock, Thermometer } from 'lucide-react';

type Props = {
    location: Location
}

const LocationCard = ({ location }: Props) => {
    const getTypeColor = () => {
        switch (location.type) {
            case 'continent':
                return 'bg-teal-800';
            case 'country':
                return 'bg-zinc-800';
            case 'city':
                return 'bg-cyan-900';
        }
    };
    const getTypeIcon = () => {
        switch (location.type) {
            case 'continent':
                return <Globe className="w-6 h-6 text-primary" />;
            case 'country':
                return <MapPin className="w-6 h-6 text-secondary" />;
            case 'city':
                return <Users className="w-6 h-6 text-white" />;
        }
    };
    return (


        <div className={`w-full   bg-gradient-to-br ${getTypeColor()}  shadow-lg overflow-hidden text-white`}>
            {/* Header with gradient overlay */}
            <div className=" bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-sm pr-4 pl-4 pt-4">
                {/* <button

                    className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted 
                     transition-colors duration-200 group"
                >
                    <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                </button>
 */}
                <div className="flex items-center gap-3 mb-2">
                    {getTypeIcon()}
                    <span className="text-sm font-medium text-muted-foreground capitalize">
                        {location.type}
                    </span>
                </div>

                <h2 className="text-2xl font-bold text-foreground ">
                    {location.name}
                </h2>


            </div>
            {/* Details Section */}
            <div className='pr-4 pl-4 pt-4'>
                {location.population && (
                    <div className="flex items-center gap-2 rounded-lg bg-muted/30  ">
                        <div>
                            <Users className="h-5 w-5" />
                        </div>
                        <div>
                            {/* <span className="text-sm text-muted-foreground">Population</span> */}
                            <p className="font-semibold text-foreground">{location.population}</p>
                        </div>
                    </div>
                )}

                {location.area && (
                    <div className="flex items-center  rounded-lg bg-muted/30 gap-2">
                        <Globe className="w-5 h-5 text-secondary" />
                        <div>
                            {/* <span className="text-sm text-muted-foreground">Area</span> */}
                            <p className="font-semibold text-foreground">{location.area}</p>
                        </div>
                    </div>
                )}

                {location.currency && (
                    <div className="flex items-center  rounded-lg bg-muted/30 gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-accent-foreground">$</span>
                        </div>
                        <div>
                            {/* <span className="text-sm text-muted-foreground">Currency</span> */}
                            <p className="font-semibold text-foreground">{location.currency}</p>
                        </div>
                    </div>
                )}

                {location.timeZone && (
                    <div className="flex items-center  rounded-lg bg-muted/30 gap-2">
                        <Clock className="w-5 h-5 text-city" />
                        <div>
                            {/* <span className="text-sm text-muted-foreground">Time Zone</span> */}
                            <p className="font-semibold text-foreground">{location.timeZone}</p>
                        </div>
                    </div>
                )}

                {location.climate && (
                    <div className="flex items-center  rounded-lg bg-muted/30 gap-2">
                        <Thermometer className="w-5 h-5 text-desert" />
                        <div>
                            {/* <span className="text-sm text-muted-foreground">Climate</span> */}
                            <p className="font-semibold text-foreground">{location.climate}</p>
                        </div>
                    </div>
                )}

                {location.attractions && location.attractions.length > 0 && (
                    <div className="p-3 rounded-lg bg-muted/30">
                        <span className="text-sm text-muted-foreground">Top Attractions</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {location.attractions.map((attraction, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full 
                             border border-primary/20"
                                >
                                    {attraction}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default memo(LocationCard)