document.addEventListener("DOMContentLoaded", function () {
    if (typeof kakao === "undefined") {
        console.error("카카오 API가 로드되지 않았습니다.");
        return;
    }

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div
    var mapOption = {
        center: new kakao.maps.LatLng(36.32772686390662, 127.43566937720794), // 대전 좌표
        level: 3
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 추가
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(36.32772686390662, 127.43566937720794)
    });

    marker.setMap(map);
});
