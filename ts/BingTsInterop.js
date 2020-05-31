/// <reference path="types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
/// <reference path="interfaces/BingMapsInterfaces.ts" />
var bingMap;
var BingMap = /** @class */ (function () {
    function BingMap() {
        this.map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'Avnc7ASReT496NI1D5KGCIbUh4cGIK0UgpBTNkiYdGkjVjCvDN6oHJ50jOF_0Ulw',
            center: new Microsoft.Maps.Location(38.9637, 35.2433),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 1
        });
        this.infobox = new Microsoft.Maps.Infobox(this.map.getCenter(), {
            visible: false
        });
        //Assign the infobox to a map instance.
        this.infobox.setMap(this.map);
        //this.tooltiptemplate = '<div class="background-color:rgba(0,0,0,0.5);color:white;max-width:200px;border-radius:10px; padding:10px;font-size:12px;"><div class="font-size:14px;font-weight:bold;margin-bottom:5px;">{title}</div><ul><li> Total Cases {total_Cases}</li><li> New Cases: {new_Cases} </li> </ul></div>';
        //this.tooltiptemplate = '<div style="background-color:white;max-width:200px;border-radius:10px; padding:10px;font-size:12px;text-align:center"><b>{title}</b><p></p></div>';
        this.tooltiptemplate = '<div class="customCaseInfo"><b>{title}</b></div>';
    }
    return BingMap;
}());
function loadMap() {
    bingMap = new BingMap();
}
function AddPushpin(sitePin) {
    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(sitePin.latitude, sitePin.longitude), {
        icon: '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="40"><circle cx="12.5" cy="14.5" r="10" fill="{color}"/><image x="0" y="0" height="40" width="25" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAnCAYAAAGNntMoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAPBSURBVEhLtZY/SGRXFMaHpE0bSJVkt8oKAf+CKytispGIjY1NcGXF/QM2wlYLgyCC+bPYpUhSCgZiJhapxEAKC0HE3cUtBLETFrExG2zMkPHm+5059/nmvTG+bHY+OL57vvOd79775s4dSzmMjY297cP6uKur67Pz8/NPFYOMrXJ0dBQIS5qis7PzgQ9LJfXesEEI4baSTzCLxIVJQzI6OmpJJGOO8wsbZJDwh4eHQRM8VzxV8w65FSK6u7vvYMvTqUb09vY2dkRoji7C0zqwSsPI4+NjGyj/KG7fuESRgnH8EeL7sXcEUero6PgclYhnyncYR44VfYwKMDYywvn8Xnp6egLhaUHI/8f19XU3rYMc3iUXwB4w1sq/9/gujuFroXaxDB2uJ7HhKqBDz5J++y9N6C1ZWFiIS/smhupfExp/pfgyrUugaadWV1c5YS+dMpDDU3cqj6GhIVaRgNxL/461tTVr4OnU1dAhuVmr1QJPp1oAbgm91i8Ud51qDr2ZWxMTE+H09NT2AqrVaoCj5rI6RJTTX1zXJzk1NJawhN3d3aSozyJ31gAGdqlx6FSoOk/DjXQ4bbADurS0VPi9m/bg4KBwg2m3trYKN5h2enraGrSn24TWzSVNJPcHgca0el2PeQMiLz3yPNGgpbE0MDBAHi/UZ4qnMUTvUENj4oi+vj743H7gqHnaCC7dLC69iIE+mPc43mnAebk5ZmdnXRoCY6cvB5eb65tfdFlwwE5OTgJhh60IJicnA+Hp1dBGbxKethD6lRzQcfiJ78H4+Hgol8uBW3Fubs5yeOrovKUY1PRocHDQ7jSgI9Vwo2ZBHR16+uj3Uh78tg8PDwd+c4HTBhlxltPBubaxSwxn539ZPz65/xU0e3l+fj5nDmQ0Kfpus4g1lyYQF/DD1wgNbk1NTcEXPxYFgB+++DPJ79vb2y2ZBF/8+Qo939/fb8kk+OLPTp5w88ZJ9Liud30tHeI+zIb4D7Ih/n0iToIv/vbd5rzzv6+EVcVD1R+kQ9z9bJ6Ke9k4+ftVVTr7HjXcF9rWrxsbG9RsRxL/4lGJodLP2aePVwj6lAd88CPPQVt7NDIyEvb29tAmn5EM/iREvYqh/A/CJWZOH/34OH05tM12CX+oVFjs1UCHnj63KA41Pl5cXHSr5qCOzlteDzJY29zcdMtGwFN36eujra3tnf7+/nB2dubWF4Cn7tL/B52UkZmZGbeugxzeJW8GMvx2ZWXFJuBJ7qU3C13fleXlZa7xilMtwVvt7e3v+rggSqV/ABNOzES/IWvuAAAAAElFTkSuQmCC"/></svg>',
        anchor: new Microsoft.Maps.Point(12, 39),
        color: sitePin.color
    });
    bingMap.map.entities.push(pushpin);
}
function AddPolygon(sitePolygons) {
    for (var i = 0; i < sitePolygons.length; i++) {
        var sitePolygon = sitePolygons[i];
        var rings = sitePolygon.rings.map(function (i) { return new Microsoft.Maps.Location(i.latitude, i.longitude); });
        var polygon = new Microsoft.Maps.Polygon(rings, sitePolygon.options);
        polygon.metadata = sitePolygon.metadata;
        //Add an click event handler to the IPrimitive.
        Microsoft.Maps.Events.addHandler(polygon, 'click', iPrimitiveClicked);
        Microsoft.Maps.Events.addHandler(polygon, 'mouseover', iPrimitiveClicked);
        Microsoft.Maps.Events.addHandler(polygon, 'mouseout', closeTooltip);
        bingMap.map.entities.push(polygon);
    }
}
function iPrimitiveClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        bingMap.infobox.setOptions({
            //Use the location of where the mouse was clicked to position the infobox.
            location: e.location,
            maxHeight: 250,
            maxWidth: 300,
            title: e.target.metadata.country + ' (' + e.target.metadata.growth_Regime + ')',
            //htmlContent: bingMap.tooltiptemplate
            //      .replace("{title}", e.target.metadata.country),
            //      .replace("{total_Cases}", e.target.metadata.total_Cases)
            //      .replace("{new_Cases}", e.target.metadata.new_Cases),
            description: 'End Date:' + e.target.metadata.end_Date
                + '<br/>' + 'Total Cases:' + e.target.metadata.total_Cases
                + '<br/>' + 'New Cases:' + e.target.metadata.new_Cases
                + '<br/>' + 'Total Deaths:' + e.target.metadata.total_Deaths
                + '<br/>' + 'Fatality Rate:' + e.target.metadata.fatality_Rate
                + '<br/>' + 'Rt:' + e.target.metadata.rt
                + '<br/>' + 'Growth Regime:' + e.target.metadata.growth_Regime
                + '<br/>' + 'P1:' + e.target.metadata.p1
                + '<br/>' + 'P2:' + e.target.metadata.p2,
            visible: true
        });
    }
}
function closeTooltip() {
    //Close the tooltip.
    bingMap.infobox.setOptions({
        visible: false
    });
}
//# sourceMappingURL=BingTsInterop.js.map