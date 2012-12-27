/*
/*
/*
 * Copyright (C) 2009 GeoNetwork
 *
 * This file is part of GeoNetwork
 *
 * GeoNetwork is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * GeoNetwork is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GeoNetwork.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.namespace('GeoNetwork', 'GeoNetwork.GeoCatCh.Lang');

GeoNetwork.GeoCatCh.Lang.de = {
	'any': '- Alle -',
	'dataset': 'Daten',
	'basicgeodata': 'Geobasisdaten',
	'basicgeodata-federal': ' + Geobasisdaten - Bund',
	'basicgeodata-cantonal': ' + Geobasisdaten - Kanton',
	'basicgeodata-communal': ' + Geobasisdaten - Gemeinde',
	'basicgeodata-other': ' + Geobasisdaten - Andere',
	'service': 'Dieste',
	'service-OGC:WMS': ' + WMS',
	'service-OGC:WFS': ' + WFS',

	'withinGeo': 'vollständig innerhalb oder gleich',
	'intersectGeo': 'schneidet',
	'containsGeo': 'umfasst mindestens',

	'kantone': 'Kanton(e)',
	'any2': 'Alle',

    'what': 'What?',
    'searchText': 'Text search',
    'rtitle': 'Title',
    'Abstract': 'Abstract',
    'Keyword': 'Keyword(s)',
    'theme': 'Topic(s)',
    'contact': 'Contact',
    'organisationName': 'Organisation',

    'template': 'Template',
    'identifier': 'Identifier',
    'formatTxt': 'Format',
    'toEdit': 'To edit',
    'toPublish': 'To publish',

    'where': 'Where?',
    'wherenone': 'Everywhere',
    'bbox': 'BBOX',
    'adminUnit': 'Administrative unit',
    'drawOnMap': 'Draw on map',
    'when': 'When?',

    'source': 'Source?',
    'catalog': 'Catalogue(s)',

    'sortByTypes' : [
        [ "changeDate", "Aktualisierung Metadaten" ],
        [ "popularity", "Popularität" ],
        [ "relevance", "Relevanz" ], [ "title", "Title" ] 
    ],
	
	'outputTypes' : [ [ "full", "Komplett" ],
        [ "text", "Nur Text" ] 
    ],	

	'hitsPerPageChoices' : [ [ "10", "10" ], [ "20", "20" ],
        [ "50", "50" ], [ "100", "100" ], [ "10", "10" ],
        [ "100", "100" ], [ "20", "20" ], [ "50", "50" ] 
    ],

	'topicCat' : [
        [ '', '- All -' ],
        [ "farming", "Landwirtschaft" ],
        [ "biota", "Biologie" ],
        [ "boundaries", "Grenzen" ],
        [ "climatologyMeteorologyAtmosphere", "Atmosphäre" ],
        [ "economy", "Wirtschaft" ],
        [ "elevation", "Höhenangaben" ],
        [ "environment", "Umwelt" ],
        [ "geoscientificInformation", "Geowissenschaften" ],
        [ "health", "Gesundheitswesen" ],
        [ "imageryBaseMapsEarthCover",
                "Oberflächenbeschreibung" ],
        [ "intelligenceMilitary", "Militär und Aufklärung" ],
        [ "inlandWaters", "Binnengewässer" ],
        [ "location", "Ortsangaben" ],
        [ "oceans", "Meere" ],
        [ "planningCadastre",
                "Planungsunterlagen, Kataster" ],
        [ "society", "Gesellschaft" ],
        [ "structure", "Bauwerke" ],
        [ "transportation", "Verkehrswesen" ],
        [ "utilitiesCommunication",
                "Ver- und Entsorgung, Kommunikation" ] 
    ],

    'formats' : [
        [ '', '- All -' ],
        [ "TTN InRoads", "TTN InRoads (-)" ],
        [ "BMBLT", "BMBLT (-)" ],
        [ "BMP_Exportformat", "BMP (Exportformat)" ],
        [ "BMP_Exportformat (Windows only)",
                "BMP (Exportformat (Windows only))" ],
        [ "CIT Microstation_1", "CIT Microstation (1)" ],
        [ "CODEAU", "CODEAU (-)" ],
        [ "DGN Microstation_SE", "DGN Microstation (SE)" ],
        [ "DTM InRoads", "DTM InRoads (-)" ],
        [ "ESRI ArcInfo Coverage_8.x",
                "ESRI ArcInfo Coverage (8.x)" ],
        [ "ESRI ArcInfo export format (.e00)",
                "ESRI ArcInfo export format (.e00) (-)" ],
        [ "ESRI ArcInfo Generate File",
                "ESRI ArcInfo Generate File (-)" ],
        [ "ESRI Personal Geodatabase_8.3",
                "ESRI Personal Geodatabase (8.3)" ],
        [ "ESRI Personal Geodatabase_9.1",
                "ESRI Personal Geodatabase (9.1)" ],
        [ "ESRI Personal Geodatabase",
                "ESRI Personal Geodatabase (-)" ],
        [ "FileMaker pro_7", "FileMaker pro (7)" ],
        [ "GeoTIFF", "GeoTIFF (-)" ],
        [ "GIF - Graphics Interchange Format",
                "GIF - Graphics Interchange Format (-)" ],
        [ "Google KMZ_2.1", "Google KMZ (2.1)" ],
        [ "GWS Geomedia_5.2", "GWS Geomedia (5.2)" ],
        [ "Illustrator / Freehand_9",
                "Illustrator / Freehand (9)" ],
        [ "IMAGE (.img)", "IMAGE (.img) (-)" ],
        [ "Image Catalog", "Image Catalog (-)" ],
        [ "MapInfo .TAB_8", "MapInfo .TAB (8)" ],
        [ "MapInfo MIF/MID", "MapInfo MIF/MID (-)" ],
        [ "MDB Geomedia", "MDB Geomedia (-)" ],
        [ "MMBL", "MMBL (-)" ],
        [ "MMBLT", "MMBLT (-)" ],
        [ "MS Access", "MS Access (-)" ],
        [ "MS Excel", "MS Excel (-)" ],
        [ "Online DB", "Online DB (-)" ],
        [ "PNG", "PNG (-)" ],
        [ "PostGIS Layer", "PostGIS Layer (-)" ],
        [ "RINEX_2.11", "RINEX (2.11)" ],
        [ "RTCM_3", "RTCM (3)" ],
        [ "Text_ASCII", "Text (ASCII)" ],
        [ "Text (.csv), comma separated",
                "Text (.csv), comma separated (-)" ],
        [ "Text (.csv), semicolon separated",
                "Text (.csv), semicolon separated (-)" ],
        [ "VRML_1", "VRML (1)" ],
        [ "SVG-XML", "SVG-XML (-)" ],
        [ "Oracle Spatial SDO_10g",
                "Oracle Spatial SDO (10g)" ],
        [ "TIFF LZW", "TIFF LZW (-)" ],
        [ "N/A_N/A", "N/A (N/A)" ],
        [ "TIFF Packbits", "TIFF Packbits (-)" ],
        [ "ESRI ArcInfo ASCII GRID",
                "ESRI ArcInfo ASCII GRID (-)" ],
        [ "Kashmir3D", "Kashmir3D (-)" ],
        [ "ESRI File Geodatabase",
                "ESRI File Geodatabase (-)" ],
        [ "ESRI xmi", "ESRI xmi (-)" ],
        [ "INTERLIS_2", "INTERLIS (2)" ],
        [ "DXF_14", "DXF (14)" ],
        [ "Text (.txt)", "Text (.txt) (-)" ],
        [ "ASCII XYZ", "ASCII XYZ (-)" ],
        [ "DXF_12", "DXF (12)" ],
        [ "ESRI Shapefile", "ESRI Shapefile (-)" ],
        [ "DWG", "DWG (-)" ],
        [ "JPG", "JPG (-)" ],
        [ "TIFF", "TIFF (-)" ],
        [ "INTERLIS_1", "INTERLIS (1)" ],
        [ "kein Vertrieb_Nur Erfaqssung im Mapserver",
                "kein Vertrieb (Nur Erfaqssung im Mapserver)" ],
        [ "ESRI Enterprise Geodatabase",
                "ESRI Enterprise Geodatabase (-)" ],
        [ "DWG_14", "DWG (14)" ],
        [ "plano (gedruckt - imprimé - stampato - print)",
                "plano (gedruckt - imprimé - stampato - print) (-)" ],
        [ "DXF", "DXF (-)" ],
        [ "ESRI Geodatabase (.mdb)",
                "ESRI Geodatabase (.mdb) (-)" ],
        [
                "Majorité des formats SIG raster standard (.ecw, (geo).tif, .jpg, .png, etc)_sur demande",
                "Majorité des formats SIG raster standard (.ecw, (geo).tif, .jpg, .png, etc) (sur demande)" ],
        [
                "Majorité de formats SIG de grilles standard (ascii grid, fichiers .yxz,etc.)_sur demande",
                "Majorité de formats SIG de grilles standard (ascii grid, fichiers .yxz,etc.) (sur demande)" ],
        [ "PDF", "PDF (-)" ],
        [ "MapInfo .TAB", "MapInfo .TAB (-)" ],
        [ "Text", "Text (-)" ],
        [ "Format1_F1", "Format1 (F1)" ],
        [ "CityGML_1.0", "CityGML (1.0)" ],
        [ "ESRI Shape", "ESRI Shape (-)" ],
        [ "abcdefg_1", "abcdefg (1)" ],
        [ "anderes", "anderes (-)" ],
        [ "Punktfile_xyz", "Punktfile (xyz)" ],
        [ "Tabelle", "Tabelle (-)" ],
        [ "ECW", "ECW (-)" ],
        [ "DXF_2000", "DXF (2000)" ],
        [ "DWG_2000", "DWG (2000)" ],
        [ "CAD", "CAD (-)" ],
        [ "vnd.wap.wbmp", "vnd.wap.wbmp (-)" ],
        [
                "Majorité des formats SIG (.tab, .shp, .dxf)_sur demande",
                "Majorité des formats SIG (.tab, .shp, .dxf) (sur demande)" ],
        [ "IMG raster", "IMG raster (-)" ],
        [ "IMG Raster", "IMG Raster (-)" ] 
    ],

    'sources_groups' : [
        [ "_groupOwner/54", "AEW Energie AG" ],
        [ "_groupOwner/39",
                "Bundesamt für Bevölkerungsschutz BABS" ],
        [ "_groupOwner/40", "Bundesamt für Energie BFE" ],
        [ "_groupOwner/38", "Bundesamt für Gesundheit BAG" ],
        [ "_groupOwner/27",
                "Bundesamt für Kommunikation BAKOM" ],
        [ "_groupOwner/37", "Bundesamt für Kultur BAK" ],
        [ "_groupOwner/6",
                "Bundesamt für Landestopografie swisstopo" ],
        [ "_groupOwner/25",
                "Bundesamt für Landwirtschaft BLW" ],
        [ "_groupOwner/34",
                "Bundesamt für Meteorologie und Klimatologie MeteoSchweiz" ],
        [ "_groupOwner/22",
                "Bundesamt für Raumentwicklung ARE" ],
        [ "_groupOwner/8", "Bundesamt für Statistik BFS" ],
        [ "_groupOwner/23", "Bundesamt für Strassen ASTRA" ],
        [ "_groupOwner/52", "Bundesamt für Umwelt BAFU" ],
        [ "_groupOwner/26", "Bundesamt für Verkehr BAV" ],
        [ "_groupOwner/36",
                "Bundesamt für Veterinärwesen BVET" ],
        [ "_groupOwner/41",
                "Bundesamt für Zivilluftfahrt BAZL" ],
        [ "_groupOwner/61", "Caricaie" ],
        [ "_groupOwner/51",
                "Eidg Dept für Verteidigung,Bevölkerungsschutz und Sport VBS" ],
        [ "_groupOwner/57",
                "Eidg. Forschungsanstalt für Wald, Schnee und Landschaft WSL" ],
        [ "_groupOwner/53",
                "Eidgenössisches Nuklearsicherheitsinspektorat ENSI" ],
        [ "_groupOwner/10",
                "Forschungsanstalt Agroscope Reckenholz-Tänikon ART" ],
        [ "_groupOwner/13", "Fürstentum Liechtenstein" ],
        [ "_groupOwner/50", "Geoportal des Bundes" ],
        [ "_groupOwner/24", "Kanton Basel-Stadt" ],
        [ "_groupOwner/3", "Kanton Freiburg (SYSIF)" ],
        [ "_groupOwner/7", "Kanton Neuenburg (SITN)" ],
        [ "_groupOwner/16", "Kanton St. Gallen" ],
        [ "_groupOwner/19", "Kanton Thurgau" ],
        [ "_groupOwner/20", "Kanton Wallis" ],
        [ "_groupOwner/5", "Kanton Zug" ],
        [ "_groupOwner/4", "Kantone Obwalden und Nidwalden" ],
        [ "_groupOwner/18", "Raumdatenpool Kanton Luzern" ],
        [ "_groupOwner/49", "Stadt Bern" ],
        [ "_groupOwner/56", "System monitor" ],
        [ "_groupOwner/42", "TestGroup" ],
        [ "_groupOwner/55", "TestPartner" ],
        [ "_groupOwner/17", "Zentraler Katalog" ],
        [ "_groupOwner/21", "geoProRegio" ],
        [ "_source/c83d6356-e6d2-4611-8276-62dfba5d11e2",
                "ASIT-VD" ],
        [ "_source/7c703f99-083b-40f6-be06-dc65e6495b9b",
                "Basel Landschaft" ],
        [ "_source/2cbf03e5-10d4-4a5e-b398-241289a97878",
                "Genève (SITG)" ],
        [ "_source/3d0e7213-74b5-4de4-8d36-b23edd56886e",
                "IG-GIS" ],
        [ "_source/558db0c4-2161-401b-b63a-ff7afe1d01ba",
                "Kanton Schaffhausen" ],
        [ "_source/1f4db83c-68b1-4749-899c-09c89f233d6c",
                "Kanton Solothurn (SO!GIS)" ],
        [ "_source/65eb4418-359a-4251-97ce-46492f60c8d2",
                "Kanton Zürich" ],
        [ "_source/c767ffd0-1e49-4a28-b6fb-1d1c4e6c5b97",
                "Stadt Zürich" ],
        [ "_source/7ea582d4-9ddf-422e-b28f-29760a4c0147",
                "_geocat.ch direct partners" ] 
    ],
    'showAdvancedOptions' : 'Erweiterte Suche',
    'hideAdvancedOptions' : 'Einfache Suche'
};

OpenLayers.Util.extend(OpenLayers.Lang.de, GeoNetwork.GeoCatCh.Lang.de);
