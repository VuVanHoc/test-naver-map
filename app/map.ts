/// <reference types="navermaps" />

export const mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

export const map = new naver.maps.Map('map', mapOptions);
