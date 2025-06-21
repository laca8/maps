import { TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// ✅ Types are available here
import { MapContainer } from 'react-leaflet'
import { locationData } from '../data/locations'
import type { Location } from '../types/type';
type Props = {}
import { Globe, MapPin } from 'lucide-react'
import 'leaflet/dist/leaflet.css';
import L, { Icon, DivIcon } from 'leaflet'
import { memo, useEffect, useState } from 'react';
import Loader from './Loader';
import LocationCard from './LocationCard';

const Map = (props: Props) => {

    const [mapReady, setMapReady] = useState(false);
    const [isContinent, setIsContinent] = useState(true);
    const [isCountry, setIsCountry] = useState(false);
    const [isCity, setIsCity] = useState(false);

    useEffect(() => {
        setMapReady(true);
    }, []);


    if (!mapReady) {
        return (
            <Loader />
        );
    }

    const customIcon1 = new L.Icon({
        iconUrl: 'https://img.icons8.com/softteal/24/marker.png',
        iconSize: [32, 32], // حجم الأيقونة
        iconAnchor: [16, 32], // النقطة التي يرتكز عندها المؤشر على الخريطة
        popupAnchor: [0, -32], // مكان ظهور الـ popup نسبةً للأيقونة
    });
    const customIcon2 = new L.Icon({
        iconUrl: 'https://img.icons8.com/metro/26/marker.png',
        iconSize: [28, 28], // حجم الأيقونة
        iconAnchor: [16, 32], // النقطة التي يرتكز عندها المؤشر على الخريطة
        popupAnchor: [0, -32], // مكان ظهور الـ popup نسبةً للأيقونة
    });
    const customIcon3 = new L.Icon({
        iconUrl: 'https://img.icons8.com/officexs/16/marker.png',
        iconSize: [24, 24], // حجم الأيقونة
        iconAnchor: [16, 32], // النقطة التي يرتكز عندها المؤشر على الخريطة
        popupAnchor: [0, -32], // مكان ظهور الـ popup نسبةً للأيقونة
    });

    const IconType = (type: string) => {
        switch (type) {
            case 'continent':
                return customIcon1
            case 'country':
                return customIcon2;
            case 'city':
                return customIcon3;
            default:
                return customIcon1;

        }
    }
    return (
        <div

            className=" relative w-full h-full  overflow-hidden  bg-zinc-900 " style={{ height: '100vh', width: '100vw' }}>
            <div className='flex flex-col items-center justify-center  w-full  p-4 text-cyan-700 text-center mt-4'>
                <div className='flex items-center justify-center mb-4 gap-2 bg-'>
                    <Globe className='animate-bounce' />
                    <h1 className='text-2xl font-bold'>Globe Trotter</h1>
                </div>
                <p className='font-bold  m-auto'>Embark on a digital journey across continents, countries, and cities.<br />
                    Discover fascinating facts, cultural insights, and hidden gems from around the world.</p>
            </div>
            <div className='max-w-7xl bg-zinc-800  h-[550px] p-4 text-cyan-700 text-center flex flex-col items-center justify-center m-auto  rounded-lg shadow-lg '>
                <div className='w-full flex flex-row  items-center gap-1 mb-2'>
                    <MapPin className='animate-pulse' />
                    <hr className='border-cyan-700  border-1 w-full' />
                </div>
                <div className='w-full border-2 mb-2 mt-2 rounded-lg shadow-lg'>
                    <ul className="flex items-center justify-between w-full text-sm font-medium  border-gray-200 rounded-lg  ">
                        <li className="w-full p-2 flex items-center justify-start gap-1  cursor-pointer ">

                            <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                checked={isContinent}
                                onChange={(e) => setIsContinent(e.target.checked)}
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer w-4 h-4  bg-zinc-700 appearance-none rounded-full checked:bg-cyan-700 border-2 border-cyan-700"
                            />
                            <label className="  font-bold ">Continent</label>

                        </li>
                        <li className="w-full p-2 flex items-center justify-center gap-1  cursor-pointer ">

                            <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                checked={isCountry}
                                onChange={(e) => setIsCountry(e.target.checked)}
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer  w-4 h-4 bg-zinc-700 appearance-none rounded-full checked:bg-cyan-700 border-2 border-cyan-700"
                            />
                            <label className=" font-bold ">Countries</label>

                        </li>
                        <li className="w-full p-2 flex items-center justify-end gap-1  cursor-pointer ">

                            <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                checked={isCity}
                                onChange={(e) => setIsCity(e.target.checked)}
                                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer  w-4 h-4 bg-zinc-700 appearance-none rounded-full checked:bg-cyan-700 border-2  border-cyan-700"
                            />
                            <label className=" font-bold ">Cities</label>

                        </li>

                    </ul>
                </div>
                <MapContainer
                    center={[20, 0]}
                    zoom={2}


                    className="w-full h-full z-10 rounded-xl"
                    minZoom={2}
                    maxZoom={10}
                    worldCopyJump={true}
                    style={{ background: 'hsl(var(--ocean-deep))', width: '100%', height: '100%' }}
                >
                    {/* Base tile layer with custom styling */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        className="map-tiles"
                    />

                    {/* Map click handler */}
                    {locationData?.filter((location) => {
                        if (isContinent && location.type === 'continent') return true;
                        if (isCountry && location.type === 'country') return true;
                        if (isCity && location.type === 'city') return true;
                        return false;
                    }).map((location) => (
                        <Marker
                            key={location.id}
                            position={[location.coordinates[0], location.coordinates[1]]}
                            icon={IconType(location.type)}
                        >
                            <Popup
                                closeButton={false}
                                className=""
                                offset={[0, -10]}
                            >
                                <LocationCard location={location} />
                            </Popup>

                        </Marker>
                    ))}


                </MapContainer>

            </div>



        </div>


    );
};
export default memo(Map);