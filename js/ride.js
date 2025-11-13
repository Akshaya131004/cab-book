/*global WildRydes _config*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function rideScopeWrapper($) {
    var authToken;

    // Get Auth Token
    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });

    // Request Unicorn
    function requestUnicorn(pickupLocation) {
        if (!authToken) {
            alert('Authentication token not available. Please sign in again.');
            return;
        }

        if (!_config.api.invokeUrl) {
            alert('API URL is not configured. Please check config.js.');
            return;
        }

        console.log('Auth Token:', authToken);
        console.log('API URL:', _config.api.invokeUrl);

        $.ajax function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride:', textStatus, ', Details:', errorThrown);
                console.error('Response:', jqXHR.responseText);
                alert('An error occurred when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }

    // Handle API Response
    function completeRequest(result) {
        API:', result);
        unicorn = result.Unicorn;
        pronoun = unicorn.Gender === 'Male' ? 'his' : 'her';
        displayUpdate(unicorn.Name + ', your ' + unicorn.Color + ' unicorn, is on ' + pronoun + ' way.');
        animateArrival(function animateCallback() {
            display        });
    }

    // Register click handler for #request button
    $(function onDocReady() {
        $('#request').click(handleRequestClick);
        $(WildRydes.map).on('pickupChange', handlePickupChanged);

        WildRydes.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your &lt;a href="#authTokenModal" data-toggle="modal"&gt;auth token&lt;/a&gt;.');
                $('.authToken').text(token);
            }
        {
        var dest = WildRydes.map.selectedPoint;
        var origin = {};

        if (dest.latitude > WildRydes.map.center.latitude) {
            origin.latitude = WildRydes.map.extent.minLat;
        } else {
                   WildRydes.map.animate(origin, dest, callback);
    }

    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }
}(jQuery));

