window.onload = function () {
    var mapContainer = document.getElementById("map"),
        mapOption = {
            center: new kakao.maps.LatLng(36.672156337210616, 127.48888231177426), // 청주 좌표 예시
            level: 3 // 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc = "images/빵집마커.png",
        imageSize = new kakao.maps.Size(60, 55),
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 📌 y값 조정

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    var markerPosition = new kakao.maps.LatLng(36.672156337210616, 127.48888231177426);

    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });

    marker.setMap(map);
};
