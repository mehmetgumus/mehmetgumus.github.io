interface BingPin {
    color: string;
    latitude: number;
    longitude: number;
}

interface bingPolygonOptions {
    fillColor: string;
    strokeColor: string;
    strokeThickness: number;
}

interface bingMetaData {
    Country: string;
    Total_Cases: string;
    New_Cases: string;
    Total_Deaths: string;
    Fatality_Rate: string;
    Rt: string;
    Growth_Regime: string;
    P1: string;
    P2: string;
    Log_Value: string;
    End_Date: string;
}

interface bingPolygon {
    rings: Location[];
    options: bingPolygonOptions;
    metadata: bingMetaData;
}

interface Location {
    latitude: number;
    longitude: number;
}