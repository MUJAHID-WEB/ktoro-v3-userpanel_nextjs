
import React, { useEffect, useState,useRef, useCallback, useContext } from 'react';

import { GoogleMap, MarkerF, useLoadScript, InfoWindow  } from '@react-google-maps/api';
import Searchbar from './Searchbar';
import MyLocation from './svg/MyLocation';
import AppContext from '@/context/appContext';



// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });


const Map = ({showSearchArea}: {showSearchArea: boolean}) => {

  const [optionalAddress, setOptionalAddress] = useState(false);

  const [Address, setAddress] = React.useState<any>()
  const [location, setLocation] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [map, setMap] = React.useState<any>(null);
  const [markers, setMarkers] = useState<any>();
  const [markerData, setMarkerData] = useState<any>([])
  const [customMarker, setCustomMarker] = useState(true);
  const [myLocation,setMyLocation] = useState<any>();
  const { addressForm, setAddressForm } = useContext<any>(AppContext);

  const mapRef = useRef();

  const mapOptions = {
    gestureHandling: 'greedy', // Enable one-finger panning
    disableDefaultUI: true, // Optional: Disable default UI elements
  };

  const containerStyle = {
  width: '100%',
  height: `${showSearchArea ? "70vh" : "54dvh"}`,
  zIndex:"10"
};

    function panTo ({ lat, lng }:any) {
        setDefaultValue({
          lat  : lat,
          lng : lng,
        })
        setMarkers({
          lat  : lat,
          lng : lng,
        })
        setCustomMarker(true)
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {

              var geocoder = new google.maps.Geocoder();

              geocoder.geocode(
              { location: { lat, lng } },
              function (results:any, status:any) {
                  if (status == google.maps.GeocoderStatus.OK) {
                  if (results[0]) {
                      var address = results[1].formatted_address;
                      let countryName = results[results.length-1].formatted_address;
                      if(!countries?.includes(countryName.trim())){
                        //   toast.error('We only ship to gulf country')
                          setCustomMarker(false)
                          return ;
                      }else{
                          setButtonClicked(true)
                          setCustomMarker(true)

                          setLocation(address);

                          let createAddress:any = {address: address};
                          setAddress(createAddress);
                      }

                  }
                  }
              }
              );
          });
      }

    }
    function locatedMe(){
      markerData[0]?.setMap(null)
      setMap(null)
      setDefaultValue(myLocation)
      setMarkers(myLocation)
    }


  // my code
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCj9W-Fg2jk2v0kHAS_oh0fgalhoadOC2A',
    libraries:['places'],
  });
  const [defaultValue, setDefaultValue] = useState<any>({
      lat  : '23.7545852',
      lng : '90.4548761',
  });


  useEffect(() => {
    function showPosition(position:any) {
      setDefaultValue({
          lat : position.coords.latitude,
          lng :position.coords.longitude,
        })
      setMyLocation({
          lat : position.coords.latitude,
          lng :position.coords.longitude,
      })
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }
    getLocation()
    return () => {};
  }, []);

const countries = ['Saudi Arabia','Oman','Qatar','Bahrain','Kuwait','United Arab Emirates']

  function onload(map:any){
    mapRef.current = map;
    map.addListener("click", function (event:any) {
        var infoWindow = new google.maps.InfoWindow({
            content: "Marker added at " + event.latLng.toString(),
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                var geocoder = new google.maps.Geocoder();

                geocoder.geocode(
                { location: event.latLng },
                function (results:any, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var address = results[1].formatted_address;
                        let countryName = results[results.length-1].formatted_address;
                        if(!countries?.includes(countryName.trim())){
                            // toast.error('We only ship to gulf country')
                            setCustomMarker(false)
                            return ;
                        }else{
                            deleteMarkers();

                            var marker = new google.maps.Marker({
                                position: event.latLng,
                                map: map,
                            });
                            markerData.push(marker);
                            setButtonClicked(true)


                            setLocation(address);
                            // setAddressForm({ ...addressForm, address: location })
                            infoWindow.setContent(address);
                            infoWindow.open(map, marker);
                            let createAddress:any = {address: address};
                            setAddress(createAddress);
                        }

                    }
                    }
                }
                );
            });
        }

    })
    setMap(map);
}



function deleteMarkers() {
  console.log('data',markerData.length);
  for (var i = 0; i < markerData.length; i++) {
    console.log('delete');
    console.log('marker',markerData[i]);
    markerData[i].setMap(null);
  }
  setMarkerData([]);
}



  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const allAddresses:any = []

useEffect(() => {
  if(location) {
    setAddressForm({ ...addressForm, address: location, position: markers })
  }

  setDefaultValue({
      lat: addressForm?.position?.lat,
      lng: addressForm?.position?.lng,
    })

    return () => {}
}, [location])

// console.log("Markers data => ", location);

  return (
  <>
      <div className=" bg-white rounded-lg py-6">
        <p className="p-2 py-4 text-2xl lg:px-4 lg:hidden">Shipping Adress</p>
        <hr className="lg:hidden"/>
        {/* map page */}
        <div className={`mt-2 ${optionalAddress && 'hidden'} relative h-full mx-auto`}>
          <div className="relative px-2 mx-auto">
            <div className="max-w-[552px] min-w-[350px] max-h-[500px] h-[380px] w-full md:h-[490px] rounded-lg z-10 mx-auto">
              {/* map will be place here  */}
              {
                isLoaded &&
                <>
                <div className='absolute -top-1 left-0 md:left-6 w-full flex justify-center lg:relative lg:top-0 lg:left-0 max-w-[552px] h-0'>
                 <Searchbar addresses={allAddresses} panTo={panTo} setModal={()=>{}}/>
                </div>
                {/* <SearchAddress panTo={panTo} /> */}
                  <div className="w-full h-full max-h-[695px] max-w-[396px] md:max-w-[600px] lg:h-[425px]">
                  <GoogleMap
                    id='map'
                    mapContainerStyle={containerStyle}
                    zoom={5}
                    center={defaultValue}
                    onLoad={onload}
                    options={mapOptions}
                    onClick={(e:any) => {
                        setMarkers({
                            ...markers,
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng(),
                        });
                  }}

                  >

                  {customMarker &&  <MarkerF  position={markers || defaultValue} onLoad={onload} title="test"/>   }

                  </GoogleMap>
                  </div>
                </>

              }

              <button onClick={()=>locatedMe()} className={`text-[#2B8DC5] flex items-center gap-1 space-x-1 p-3 rounded-full bg-white w-[137px] h-[44px] shadow-sm absolute bottom-4 right-4 lg:right-8 ${showSearchArea ? "lg:-bottom-24" : "lg:bottom-20"} z-20`}>
                <MyLocation fill="#2B8DC5" />
                <span>Locate Me</span>
              </button>
            </div>
          </div>
          {/* <div className="p-2 w-full mx-auto lg:absolute lg:bottom-0 z-50 flex justify-center">
            <button
            //   loading={Address}
              // disabled={!buttonClicked}
            //   onClick={handleConfirm}
              className={` bg-[#898989 max-w-[552px] lg:max-w-[520px] text-white py-4 text-center w-full rounded-lg font-medium text-lg z-30 ${buttonClicked ? 'bg-[#2B8DC5]' : "bg-[#898989]"}`}>
              {"confirm-location"}
            </button>
          </div> */}
        </div>
        {/* contact page  */}


        {

         optionalAddress && <div className="mt-2 p-2 lg:px-4 lg:flex lg:items-start lg:justify-between ">
         <div className="lg:w-[280px] lg:h-[500px]">
         <p className="text-2xl font-medium my-6">Add More Details</p>
         <label className="relative">
           <input
           name="name"
             type="text"
             className="h-[56px] max-w-[380px] w-full md:max-w-full py-3 rounded-lg border border-[#E7E7E7] outline-none focus:border-black/70 px-3"
             required
             defaultValue={"values?.fullName"}

           />
           <span className="absolute left-6 -top-[25px] bg-white px-1 text-[13px] text-black font-[400]">
             Name
           </span>
         </label>


         <label className="relative">
           <input
        //    onChange={(e) => updateValues("details",e.target.value)}
           name='others'
             type="text"
             className="h-[56px] max-w-[380px] w-full md:max-w-full py-3 px-2 rounded-lg border border-[#E7E7E7] outline-none focus:border-black/70"
           />
           <span className="absolute left-6 -top-[25px] bg-white px-1 text-[13px] text-black font-[400]">
             Extra details (optional)
           </span>
         </label>
         </div>


       </div>
        }
      </div>
     </>
  );
};

export default Map;
