document.addEventListener("DOMContentLoaded", function () {
    // 📌 정동문화사 지도
    var mapContainerJDM = document.getElementById('map-jdm'); 
    var mapOptionJDM = { 
        center: new kakao.maps.LatLng(36.32762795975153, 127.43560757260673), // ✅ 정동문화사 위도, 경도
        level: 3 
    };
    var mapJDM = new kakao.maps.Map(mapContainerJDM, mapOptionJDM);

    var markerJDM = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(36.32762795975153, 127.43560757260673) // ✅ 마커 위치 (정동문화사)
    });
    markerJDM.setMap(mapJDM);

    // 📌 몽심 지도
    var mapContainerMS = document.getElementById('map-ms'); 
        mapOptionMS = { 
            center: new kakao.maps.LatLng(36.32512096654963, 127.42354923789819), // ✅ 몽심 위도, 경도
            level: 3 
    };
    var markerMS = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(36.32512096654963, 127.42354923789819) // ✅ 마커 위치 (몽심)
    });
    var mapMS = new kakao.maps.Map(mapContainerMS, mapOptionMS);
    markerMS.setMap(mapMS);

});
