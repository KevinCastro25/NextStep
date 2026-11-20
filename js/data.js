// =============================================================================
// NEXTSTEP · CONFIGURACIÓN Y CATÁLOGO DROPI (288 REFERENCIAS)
// =============================================================================
const CFG = {
  name: "NextStep",
  wa: "573001234567",
  wompi: "",
  off: 5,
  promo2x: 10,
  envio: "2 a 5 días hábiles",
  heroVideo: "",
  videos: {}
};

// FOTOS POR COLOR: pega la URL de la foto de cada color; si está vacío se usa la foto principal
CFG.imgs = {
/* Tenis Urban 001 Dama */ 1380341:{"BLANCO":"","NEGRO":"","VERDE":"","ROSADO":"","CAFE":"","GRIS CLARO":""},
/* Tenis Classic 002 Hombre */ 1384424:{"BLANCO":"","GRIS CLARO":"","NEGRO":"","CAFE":"","BEIGE":""},
/* Tenis Street 003 */ 1336101:{"NEGRO":"","ROSADO":"","VERDE":"","BEIGE":"","GRIS CLARO":"","BLANCO":"","CAFE":""},
/* Bota Sport 004 */ 922411:{"Negro/Azul":"","Negro/Rojo":"","FullNegro":"","Negro/Dorado":"","Vino":"","Negro/Blanco":"","Rojo":""},
/* Tenis Retro 005 */ 2128764:{"Negro":"","Blanco":"","Blanco/Negro":"","Blanco/Verde":"","Negro/Dorado":""},
/* Tenis Flex 006 Dama */ 2125711:{"Gris Azul Naranja":"","Blanco Gris":"","Negro":"","Blanco Negro":"","Beige Negro":"","Blanco Chulo Azul":""},
/* Tenis Runner 007 Dama */ 2148286:{"Blanco Rosado":"","Negro":"","Blanco Azul":"","Blanco Violeta":"","Blanco Negro":""},
/* Tenis Casual 008 */ 2197200:{"Blanco":"","Full/Negro":"","Chulo/Rojo":"","Chulo/Azul":"","Fucsia":""},
/* Tenis Prime 009 */ 2135903:{"Blanco Gris":"","Blanco Azul":"","Blanco Violeta":"","Negro":""},
/* Tenis Active 010 */ 1950859:{"Blanco/Negro":"","Blanco/Rosa":"","Blanco/Celeste":"","Negro":""},
/* Tenis Urban 011 */ 1868745:{"BEIGE":"","NEGRO":"","BLANCO":"","AZUL":"","ROSADO":""},
/* Tenis Classic 012 */ 1824535:{"NEGRO":"","BLANCO":"","BEIGE":"","ROSADO":""},
/* Tenis Street 013 */ 1824508:{"NEGRO":"","BLANCO":"","BEIGE":"","ROSADO":""},
/* Tenis Sport 014 */ 2189034:{"Blanco":"","Beige":"","Vinotinto":"","Marron":"","Negro":""},
/* Tenis Retro 015 */ 1899580:{"Todo Negro":"","Blanco Crema Rojo":"","Celeste":"","Todo Blanco":"","Blanco Verde":"","Gris":"","Caqui Beige":"","Negro Blanco":"","Blanco Azul Marino":""},
/* Tenis Flex 016 Hombre */ 1884278:{"NEGRO":"","BEIGE":"","CARAMELO":"","MIEL":"","AZUL":"","MARRON":""},
/* Tenis Runner 017 Hombre */ 1902480:{"Blanco":"","Negro/Blanco":""},
/* Tenis Casual 018 */ 2164185:{"Negro Fucsia":"","Negro Rojo":"","Negro Azul":""},
/* Tenis Prime 019 */ 2214572:{"Blanco":"","Negro":"","Gris":"","Rosa":"","Azul Marino":"","Crema":""},
/* Tenis Active 020 */ 1885771:{"NEGRO BLANCO":"","NEGRO":"","BLANCO NEGRO":"","BLANCO":""},
/* Tenis Classic 022 */ 2082483:{"Negro Líneas Blancas":"","Todo Negro":"","Blanco Celeste":"","Negro Blanco":"","Blanco Amarillo":"","Blanco Crema":"","Turquesa Amarillo Naranja":""},
/* Tenis Street 023 */ 2232094:{"Marron Claro":"","Marron Oscuro":"","Negro":"","Azul Marino":""},
/* Bota Sport 024 */ 2215126:{"Crema Caqui":"","Naranja":"","Todo Negro":"","Negro Gris":"","Negro Marron":"","Negro Verde Oliva":""},
/* Tenis Retro 025 */ 2282703:{"Blanco Rojo":"","Blanco Negro":"","Blanco Gris":"","Blanco Marrón Oscuro":"","Blanco Marron Claro":""},
/* Tenis Flex 026 */ 2113607:{"Todo Negro":"","Azul":"","Negro Blanco":"","Negro Rojo":"","Negro Dorado":""},
/* Tenis Runner 027 Dama */ 1804300:{"GRIS":"","BEIGE":"","BLANCO":"","NEGRO":""},
/* Tenis Casual 028 Hombre */ 453690:{"BLANCO":"","AZUL":""},
/* Tenis Prime 029 Hombre */ 1841817:{"Blanco":"","Marron":"","Azul Marino":"","Negro":""},
/* Tenis Active 030 Dama */ 1994706:{"Blanco":"","Negro":""},
/* Tenis Urban 031 */ 2302660:{"Blanco":"","Gris":"","Todo Negro":"","Negro Blanco":""},
/* Tenis Classic 032 */ 2302673:{"Blanco Azul":"","Blanco Verde":"","Blanco Naranja":"","Negro":""},
/* Tenis Street 033 Dama */ 1824639:{"BLANCO":"","MARFIL":"","NEGRO":""},
/* Tenis Retro 035 Hombre */ 1885616:{"BLANCO AZUL":"","BLANCO VERDE":"","GRIS":"","BEIGE":""},
/* Tenis Flex 036 Hombre */ 1847717:{"NEGRO BLANCO":"","NEGRO":"","BEIGE":"","BLANCO ROJO":""},
/* Tenis Runner 037 */ 2232057:{"Negro Blanco":"","Negro Rojo":"","Blanco":"","Gris":"","Azul Marino":""},
/* Zapato Casual 038 Hombre */ 2196259:{"Negro":"","Crema":"","Naranja":"","Verde":"","Marron":""},
/* Tenis Prime 039 Hombre */ 2282682:{"Negro Rojo":"","Blanco":"","Blanco Verde Oliva":"","Todo Negro":"","Negro Blanco":""},
/* Tenis Urban 041 Hombre */ 1988089:{"BLANCO AZUL":"","BLANCO VERDE":"","GRIS":"","BEIGE":""},
/* Tenis Classic 042 */ 1872049:{"AZUL":"","BLANCO":"","AZUL/NEGRO":"","ROJO/NEGRO":""},
/* Tenis Street 043 Hombre */ 1894963:{"BLANCO":"","GRIS":"","NEGRO ROJO":"","NEGRO GRIS":""},
/* Tenis Sport 044 */ 1887717:{"BLANCO":"","NEGRO":"","BLANCO VERDE":""},
/* Tenis Retro 045 */ 1952161:{"Negro Blanco":"","Negro Rojo":"","Negro Negro":"","Gris":"","Verde":"","Blanco Turquesa":"","Blanco Naranja":"","Blanco Azul":""},
/* Tenis Flex 046 */ 1888290:{"BLANCO GRIS":"","BLANCO NEGRO":"","BLANCO ROSA":"","BLANCO AZUL":""},
/* Tenis Runner 047 */ 2010481:{"Negro Blanco":"","Negro":"","Azul":"","Gris":"","Beige":"","Blanco Negro":"","Negro Naranja":""},
/* Tenis Casual 048 */ 2135924:{"Gris":"","Azul":"","Negro":"","Rojo":"","Blanco":""},
/* Tenis Prime 049 Dama */ 1838454:{"BLANCO DORADO":"","BLANCO GRIS":"","BLANCO MULTICOLOR":"","BLANCO ROSA":""},
/* Tenis Active 050 Dama */ 1885838:{"CREMA SALMON":"","BLANCO AZUL":"","BLANCO BEIGE":"","BLANCO GRIS":""},
/* Tenis Urban 051 Dama */ 2273120:{"CAFE":"","AZUL":"","GRIS":"","ROSA":"","LILA":""},
/* Tenis Street 053 Dama */ 2161611:{"Blanco Negro":"","Gris":"","Negro":"","Blanco Fucsia":"","Blanco Menta":""},
/* Tenis Sport 054 */ 2290929:{"GRIS":"","ROJO":"","NEGRO LILA":"","NEGRO":"","AZUL":""},
/* Tenis Retro 055 Dama */ 1795452:{"ROSADO":"","NEGRO":"","BEIGE":""},
/* Tenis Flex 056 Dama */ 1794352:{"BEIGE":"","AZUL":"","ROSADO":""},
/* Tenis Runner 057 Dama */ 1804321:{"NEGRO":"","BEIGE":"","BLANCO":""},
/* Zueco Casual 058 Dama */ 2226616:{"BLANCO":"","BEIGE":"","CAFE":"","AZUL":"","NEGRO":""},
/* Tenis Prime 059 */ 2227175:{"Negro Dorado":"","Gris Cafe":"","Rosa":"","Blanco Azul":"","Negro Blanco":""},
/* Tenis Active 060 Dama */ 1804327:{"BLANCO":"","BEIGE":"","NEGRO":""},
/* Tenis Classic 062 */ 2233344:{"Blanco Gris":"","Verde":"","Negro Blanco":"","Blanco Menta":""},
/* Tenis Street 063 Hombre */ 2079661:{"Negro Blanco":"","Verde":"","Gris":"","Todo Negro":"","Azul Marino":""},
/* Tenis Sport 064 */ 2138539:{"Blanco":""},
/* Tenis Retro 065 */ 2122603:{"Negro":""},
/* Tenis Flex 066 */ 2121295:{"Plateado":""},
/* Tenis Runner 067 */ 2146229:{"Blanco Azul":""},
/* Bota Casual 068 Hombre */ 2144108:{"Negro Naranja":"","Cafe":"","Negro Amarillo":"","Beige":"","Azul":""},
/* Tenis Prime 069 Hombre */ 2271989:{"Blanco Azul":"","Blanco Negro":"","Gris":"","Negro":""},
/* Tenis Active 070 */ 2121226:{"Blanco Negro":""},
/* Tenis Classic 072 Hombre */ 1946552:{"NEGRO":"","MARRON":"","VERDE MARRON":""},
/* Bota Street 073 */ 2121272:{"Negro Rojo":""},
/* Tenis Sport 074 */ 1546506:{"Negro Blanco":""},
/* Tenis Retro 075 */ 2249055:{"NEGRO/AZUL":"","BLANCO":"","AZUL":"","NEGRO/ROJO":""},
/* Tenis Flex 076 Hombre */ 2035932:{"Negro Rojo":"","Blanco Negro":"","Negro Blanco":"","Negro Gris":""},
/* Tenis Runner 077 Dama */ 2145988:{"Blanco Negro":"","Blanco Beige":"","Negro":"","Blanco Rosa":"","Blanco Rojo":""},
/* Zapato Casual 078 */ 1096943:{"Negro":"","Crema":"","Marrón":"","Naranja":""},
/* Tenis Prime 079 */ 2113634:{"Todo Negro":"","Negro blanco":"","Blanco":""},
/* Tenis Active 080 */ 2190363:{"AZUL":"","NEGRO":"","NEGRO GRIS":"","PALO ROSA":""},
/* Tenis Urban 081 */ 2163664:{"Todo Negro":"","Negro Blanco Suela Negra":"","Negro Blanco Suela Cafe":""},
/* Tenis Classic 082 Hombre */ 1822885:{"NEGRO":"","BLANCO":""},
/* Tenis Street 083 */ 2133838:{"Negro":"","Blanco":"","Azul":"","Verde":"","Gris":""},
/* Tenis Sport 084 */ 2126504:{"Blanco Negro":""},
/* Tenis Retro 085 */ 2238497:{"Mostaza-Azul":"","Negro-Gris":"","Beige-Miel":"","Beige-Azul":""},
/* Tenis Flex 086 */ 2139938:{"Blanco Negro":""},
/* Tenis Runner 087 */ 1905209:{"GRIS":"","BEIGE":"","BLANCO":"","NEGRO":""},
/* Tenis Casual 088 Dama */ 2133840:{"Turquesa":"","Negro":"","Blanco Azul":"","Blanco Negro":"","Azul Claro":"","Blanco Plateado":""},
/* Tenis Active 090 Dama */ 2233202:{"Gris":"","Blanco":"","Rojo":"","Negro":""},
/* Tenis Urban 091 Dama */ 1895201:{"BLANCO LILA":"","BLANCO VERDE":"","BLANCO GRIS":"","NEGRO BLANCO":""},
/* Tenis Classic 092 Dama */ 2292743:{"Lila":"","Negro":"","Blanco":"","Azul":""},
/* Tenis Street 093 Dama */ 2139601:{"Blanco Azul":"","Blanco Rosa":"","Negro":"","Blanco Beige":""},
/* Tenis Sport 094 */ 2258024:{"Negro":"","Fucsia":"","Blanco":"","Menta":""},
/* Tenis Retro 095 */ 2189811:{"Fucsia":"","Blanco Gris":""},
/* Tenis Flex 096 Dama */ 2271994:{"Blanco Dorado":"","Blanco Gris":"","Beige":"","Marron Oscuro":""},
/* Tenis Runner 097 */ 2000480:{"BEIGE":"","BLANCO":"","MARRON":"","NEGRO":""},
/* Tenis Casual 098 Dama */ 2161603:{"Blanco":"","Negro":"","Gris":"","Fucsia":""},
/* Tenis Prime 099 Dama */ 2232045:{"Negro":"","Rosa":"","Blanco Morado":"","Blanco Azul":""},
/* Baleta Active 100 Dama */ 2140728:{"Blanco Negro":"","Blanco Azul":"","Negro Beige":"","Blanco Plateado":""},
/* Tenis Urban 101 Dama */ 2136216:{"Avellana":"","Beige":"","Negro":"","Blanco":""},
/* Tenis Classic 102 */ 2098446:{"Blanco Verde":"","Gris":"","Negro Suela Blanca":"","Todo Negro":"","Blanco Beige Azul Marino":""},
/* Tenis Street 103 */ 2240701:{"Negro":"","Blanco Rosa":"","Blanco Menta":"","Blanco Naranja":""},
/* Tenis Sport 104 Dama */ 2084763:{"Azul Gris":"","Negro lila":"","Azul negro":"","Gris Rosa":""},
/* Tenis Retro 105 Dama */ 1894166:{"BLANCO":"","BEIGE":"","MARRON":"","NEGRO":""},
/* Tenis Flex 106 Dama */ 1836914:{"BLANCO VERDE":"","BLANCO":"","BLANCO ESTAMPADO":""},
/* Tenis Runner 107 Dama */ 1988881:{"NEGRO":"","BLANCO":"","DORADO":""},
/* Tenis Casual 108 Dama */ 1885200:{"BLANCO":"","NEGRO":"","BEIGE":""},
/* Tenis Active 110 Dama */ 1888479:{"NEGRO":"","GRIS":"","AZUL":""},
/* Tenis Urban 111 Dama */ 1883997:{"BLANCO MULTICOLOR":"","BLANCO NEGRO":"","BLANCO":""},
/* Tenis Classic 112 Dama */ 1887648:{"BLANCO NEGRO":"","BLANCO VERDE":"","NEGRO":""},
/* Tenis Sport 114 */ 1899617:{"BLANCO":"","NEGRO":"","AZUL":"","BLANCO/NEGRO":"","BEIGE":"","VERDE":""},
/* Bota Retro 115 */ 1885880:{"BLANCO":"","ROJO":"","NEGRO":""},
/* Bota Flex 116 */ 2103645:{"Negro Verde Oliva":"","Negro Gris":"","Negro Marron":"","Naranja":"","Negro":""},
/* Tenis Runner 117 Hombre */ 2162038:{"Negro":"","Azul Marino":"","Crema Naranja":"","Blanco":""},
/* Tenis Casual 118 */ 2074465:{"Blanco Azul":"","Blanco Verde":"","Blanco Amarillo Naranja":"","Negro":""},
/* Tenis Prime 119 Hombre */ 2160742:{"Negro":""},
/* Tenis Urban 121 Hombre */ 2180905:{"Negro":""},
/* Tenis Sport 124 Dama */ 2029242:{"DORADO":"","NEGRO":"","BLANCO":""},
/* Tenis Retro 125 Dama */ 2140674:{"Blanco Rojo":"","Blanco Plateado":"","Blanco Negro":"","Negro":""},
/* Tenis Runner 127 Hombre */ 2149946:{"GRIS":""},
/* Tenis Casual 128 */ 2133872:{"Rojo":""},
/* Tenis Prime 129 */ 1844425:{"Negro Suela Blanca":"","Blanco Línea Negra":"","Todo Negro":"","Todo Blanco":""},
/* Tenis Active 130 Hombre */ 2149943:{"NEGRO GRIS":""},
/* Tenis Urban 131 Hombre */ 888502:{"Negro/Gris":""},
/* Tenis Classic 132 Hombre */ 2132249:{"Azul":""},
/* Tenis Street 133 Hombre */ 2282695:{"Negro Blanco":"","Negro Rojo":"","Azul Marino":""},
/* Tenis Sport 134 Dama */ 1890662:{"ROJO":"","NEGRO":"","NEGRO BLANCO":"","AZUL":""},
/* Tenis Retro 135 */ 2134972:{"Azul Amarillo":""},
/* Tenis Runner 137 Hombre */ 2302640:{"Negro":"","Gris":"","Blanco":""},
/* Tenis Casual 138 Hombre */ 2135695:{"Arena":"","Negro":"","Cafe":""},
/* Tenis Prime 139 */ 2289271:{"BLANCO":"","NEGRO":"","AZUL OSCURO":"","NEGRO/ROJO":""},
/* Tenis Active 140 Dama */ 2135921:{"Blanco Lila":"","Blanco Azul":"","Blanco Fucsia":"","Negro":"","Azul Oscuro":""},
/* Tenis Urban 141 */ 2134962:{"Rojo Negro":""},
/* Zapato Classic 142 Hombre */ 1839678:{"caramelo":"","negro":"","azul":""},
/* Tenis Street 143 Dama */ 1794338:{"GRIS":"","BEIGE":""},
/* Tenis Sport 144 */ 2073440:{"Gris":"","Crema":"","Blanco Verde":"","Negro":"","Blanco Azul Marino":""},
/* Tenis Retro 145 Dama */ 1832870:{"GRIS":"","BLANCO":"","CAFE":"","NEGRO":""},
/* Zapato Flex 146 */ 2154520:{"Beige Oscuro":"","Naranja":"","Negro":"","Beige Claro":""},
/* Zapato Runner 147 */ 2154535:{"Negro":"","Marron":"","Naranja":"","Crema":""},
/* Zapato Casual 148 Hombre */ 2162448:{"Negro":"","Beige":"","Marron":"","Azul Marino":""},
/* Zapato Prime 149 */ 2154525:{"Marron":"","Negro":"","Naranja":"","Crema":""},
/* Tenis Active 150 Hombre */ 1888420:{"NEGRO":"","BEIGE":"","BLANCO":""},
/* Tenis Urban 151 Hombre */ 2083167:{"Negro Blanco":"","Blanco Azul Marino":"","Blanco Coral":"","Negro":""},
/* Tenis Classic 152 */ 2134978:{"Blanco Negro":""},
/* Tenis Street 153 */ 2130349:{"Naranja Azul":""},
/* Tenis Sport 154 */ 2126507:{"Blanco Rosado":""},
/* Tenis Retro 155 Dama */ 2174333:{"Blanco Rosa":""},
/* Tenis Runner 157 */ 2139928:{"Blanco Marron Chulo Rosa":""},
/* Tenis Casual 158 Dama */ 2127298:{"Beige Marron":""},
/* Tenis Prime 159 */ 2135911:{"Negro":""},
/* Tenis Active 160 Dama */ 2127294:{"Blanco Chulo Rojo":""},
/* Tenis Urban 161 */ 2135910:{"Blanco Violeta":""},
/* Tenis Street 163 */ 2135892:{"Blanco Gris":""},
/* Tenis Sport 164 */ 2169156:{"Azul":""},
/* Tenis Retro 165 Dama */ 2138596:{"Blanco Azul":""},
/* Tenis Runner 167 Dama */ 2148292:{"Blanco Violeta":""},
/* Tenis Casual 168 Dama */ 1308515:{"Rosa":""},
/* Tenis Prime 169 */ 2132231:{"Blanco Plata":""},
/* Tenis Active 170 Dama */ 1424395:{"Negro":""},
/* Tenis Urban 171 Dama */ 2148296:{"Negro":""},
/* Tenis Classic 172 Dama */ 2158214:{"Gris Azul":""},
/* Baleta Sport 174 */ 2146047:{"Negro":"","Azul":"","Gris":""},
/* Tenis Retro 175 Dama */ 2199325:{"Dorado":"","Negro":"","Blanco":""},
/* Tenis Flex 176 */ 2189815:{"Negro Blanco":""},
/* Tenis Casual 178 */ 2164188:{"Blanco Rosado":""},
/* Tenis Prime 179 Dama */ 2290889:{"CAFE":"","BEIGE":"","NEGRO":""},
/* Tenis Active 180 Dama */ 2010444:{"Oro Rosa":"","Blanco Rosa":"","Blanco Azul":""},
/* Tenis Urban 181 */ 2258015:{"Blanco":"","Negro":"","Azul Marino":""},
/* Tenis Classic 182 */ 2164191:{"Blanco Negro":""},
/* Bota Sport 184 */ 2123409:{"Beige":""},
/* Tenis Runner 187 Dama */ 2140152:{"Beige":"","Blanco":"","Negro":""},
/* Tenis Casual 188 Dama */ 2196231:{"Crema":"","Rosado Crema":"","Crema Café Negro":""},
/* Tenis Prime 189 Hombre */ 1844502:{"Negro Blanco":"","Negro":"","Blanco":"","Gris":""},
/* Bota Active 190 */ 2123369:{"Negro":""},
/* Tenis Urban 191 Dama */ 1424412:{"Beige":""},
/* Tenis Classic 192 */ 2036938:{"Beige":"","Negro":"","Caramelo":""},
/* Bota Street 193 */ 2096666:{"Cafe":"","Azul":"","Beige":"","Negro":""},
/* Tenis Sport 194 */ 2245427:{"Negro":"","Blanco":"","Beige":""},
/* Tenis Retro 195 */ 1915897:{"BEIGE":"","BLANCO":"","GRIS":"","NEGRO":""},
/* Tenis Flex 196 Dama */ 2134903:{"Cafe":"","Negro Blanco":"","Gris":"","Negro Negro":""},
/* Zapato Runner 197 */ 2088306:{"Naranja":"","Negro":"","Marron":"","Azul Marino":""},
/* Tenis Casual 198 Dama */ 1895352:{"AZUL":"","NEGRO":"","GRIS":""},
/* Zapato Prime 199 */ 2083180:{"Negro":"","Marrón":"","Beige":""},
/* Tenis Active 200 Dama */ 2187287:{"Blanco Rojo":"","Blanco Gris":"","Blanco Negro":""},
/* Tenis Urban 201 Hombre */ 1890829:{"NEGRO":"","CARAMELO":"","AZUL OSCURO":"","MARRON":""},
/* Tenis Classic 202 */ 1741257:{"BEIGE":"","NEGRO":"","VIOLETA":""},
/* Zapato Street 203 */ 2154497:{"Negro":"","Beige":"","Marron":""},
/* Bota Sport 204 */ 2161680:{"Azul":"","Rojo":"","Negro":""},
/* Tenis Retro 205 Dama */ 1026220:{"CAFE":"","ROSADO":"","NEGRO":""},
/* Tenis Flex 206 */ 2073552:{"Negro Blanco":"","Todo Negro":"","Azul Marino":""},
/* Tenis Runner 207 */ 1844571:{"Rosa":"","Blanco Nike Turquesa":"","Blanco Nike Negro":"","Blanco Nike gris":""},
/* Tenis Casual 208 */ 2167944:{"BLANCO/NEGRO":"","NEGRO/ROJO":"","BEIGE":""},
/* Tenis Prime 209 Dama */ 2162016:{"Rosa Oscuro":"","Blanco":"","Blanco Plateado Fucsia":""},
/* Tenis Active 210 Dama */ 1895412:{"NEGRO":"","ROSA":"","GRIS":""},
/* Tenis Urban 211 */ 2082375:{"Gris":"","Negro":"","Blanco":""},
/* Tenis Classic 212 */ 2148111:{"Blanco Azul":"","Blanco Plateado":"","Blanco Lila":"","Negro":""},
/* Tenis Street 213 */ 2245429:{"BLANCO AZUL":""},
/* Tenis Sport 214 */ 2241132:{"NEGRO BLANCO":""},
/* Tenis Retro 215 */ 2166083:{"Beige vino":""},
/* Tenis Flex 216 Dama */ 1846629:{"NEGRO":"","BLANCO":"","BEIGE":""},
/* Tenis Runner 217 Dama */ 1308524:{"Beige":""},
/* Tenis Casual 218 Dama */ 1374563:{"ROSADO":"","AZUL":"","NEGRO":""},
/* Tenis Prime 219 Hombre */ 1282918:{"CAFE":"","GRIS":"","NEGRO":""},
/* Tenis Active 220 Hombre */ 2063130:{"Negro Marron":"","Azul Marino":"","Blanco":"","Negro Blanco":""},
/* Tenis Urban 221 */ 2211636:{"Negro":"","Blanco":""},
/* Zapato Classic 222 */ 2088301:{"Negro":"","Marron":"","Blanco":""},
/* Tenis Sport 224 Dama */ 2199369:{"TALCO":"","NEGRO":""},
/* Tenis Retro 225 */ 2189066:{"Negro Blanco Chulo Azul":""},
/* Tenis Flex 226 */ 2240251:{"BLANCO AZUL":""},
/* Tenis Runner 227 */ 2184446:{"NEGRO BLANCO":""},
/* Zapato Prime 229 Dama */ 2145804:{"Negro":"","Azul":""},
/* Tenis Active 230 Dama */ 2241123:{"BLANCO":""},
/* Sandalia Classic 232 */ 2129404:{"NEGRO":"","MIEL":""},
/* Tenis Sport 234 Dama */ 2083208:{"Blanco Lila":"","Negro":"","Blanco Azul":""},
/* Tenis Retro 235 */ 2130821:{"Negro":"","Blanco":"","Blanco/Negro":"","Gris Claro":""},
/* Tenis Flex 236 */ 1915390:{"NEGRO":"","BLANCO":"","BLANCO/NEGRO":"","BEIGE":""},
/* Tenis Runner 237 */ 1500815:{"Todo Negro":"","Negro Suela Blanca":""},
/* Tenis Casual 238 */ 1908580:{"PLATA":"","ROSADO":"","GRIS/NEGRO":""},
/* Zapato Prime 239 */ 1899677:{"Marrón":"","Marrón Claro":"","Negro":""},
/* Tenis Active 240 Hombre */ 1453080:{"AZUL":"","ROJO":""},
/* Tenis Urban 241 */ 1356772:{"NEGRO":"","ROSADO":"","AZUL OSCURO":""},
/* Tenis Classic 242 Dama */ 2266027:{"Miel":"","Negro":"","Beige":""},
/* Tenis Street 243 */ 1844534:{"Negro":"","Naranja":"","Azul":""},
/* Tenis Sport 244 */ 1921880:{"NEGRO":"","BLANCO":""},
/* Tenis Retro 245 Dama */ 2182333:{"Blanco Gris":"","Negro":"","Gris":"","Beige":""},
/* Tenis Flex 246 Dama */ 2179924:{"Rojo":"","Blanco":"","Fucsia":"","Nego":""},
/* Tenis Runner 247 */ 2215212:{"GRIS":"","BLANCO":"","NEGRO":"","CAFE":""},
/* Tenis Casual 248 Dama */ 1083749:{"VIOLETA":"","ROSA":""},
/* Tenis Prime 249 */ 2263630:{"Blanco Negro Marron":"","Blanco Gris":""},
/* Tenis Active 250 */ 2042848:{"WHITE":"","BLACK":""},
/* Tenis Urban 251 Dama */ 1831958:{"BEIGE":"","BLANCO":"","GRIS":"","NEGRO":""},
/* Tenis Classic 252 */ 1732804:{"GRIS":"","ROSADO":""},
/* Tenis Street 253 */ 2166010:{"Blanco":"","Negro":""},
/* Tenis Sport 254 Hombre */ 982541:{"NEGRO":"","CAFE":""},
/* Tenis Retro 255 */ 2099522:{"WHITE":"","BLACK":""},
/* Tenis Flex 256 Dama */ 1053103:{"BLANCO":"","NEGRO/BLANCO":""},
/* Tenis Runner 257 Dama */ 1885174:{"BLANCO":""},
/* Tenis Casual 258 Dama */ 2222749:{"Blanco Azul":""},
/* Tenis Prime 259 */ 2190546:{"NEGRO":"","BLANCO":"","AZUL OSCURO":""},
/* Tenis Active 260 */ 1675121:{"GRIS":"","MARFIL":""},
/* Tenis Urban 261 Dama */ 916169:{"BLANCO":"","NEGRO":"","AZUL CLARO":"","ROJO":""},
/* Tenis Classic 262 Dama */ 587297:{"BEIGE":"","AZUL":""},
/* Tenis Street 263 */ 2077767:{"Negro":"","Morado":"","Verde oliva":"","lila":"","Gris":""},
/* Tenis Sport 264 Dama */ 2282689:{"BLANCO":"","NEGRO":"","BLANCO/NEGRO":""},
/* Tenis Retro 265 */ 595897:{"DESERT SAGE":"","MARSH":"","LINEN":""},
/* Tenis Flex 266 */ 742983:{"NEGRO":"","BLANCO":""},
/* Tenis Runner 267 */ 1901185:{"Blanco negro":"","Negro lila":"","Azul":"","Negro rosa":"","Blanco naranja":"","Gris Blanco":"","Gris lila":"","Gris naranja":"","Rosado":"","Negro Blanco":"","NEGRO FUCSIA":"","Blanco lila":""},
/* Tenis Casual 268 */ 2170813:{"Beige":"","Blanco":"","Negro":""},
/* Tenis Prime 269 Dama */ 2325729:{"NEGRO":"","BEIGE NEGRO":"","BLANCO":"","ROJO":"","BEIGE":""},
/* Tenis Active 270 Dama */ 2266249:{"BLANCO/CAFE":"","BLANCO":""},
/* Zueco Urban 271 */ 2223798:{"MIEL":"","NEGRO":"","KAKHI":""},
/* Tenis Classic 272 */ 1573495:{"GRIS":"","MARFIL":""},
/* Tenis Street 273 Dama */ 965917:{"BLANCO":"","NEGRO":""},
/* Tenis Sport 274 */ 1908363:{"NEGRO LILA":"","GRIS LILA":"","NEGRO BLANCO":"","BLANCO NARANJA":"","NEGRO FUCSIA":"","BLANCO LILA":"","BLANCO NEGRO":"","ROSADO":"","GRIS NARANJA":"","AZUL BLANCO":""},
/* Tenis Retro 275 */ 1894208:{"GRIS NARANJA":"","ROSADO":"","GRIS LILA":"","BLANCO NARANJA":"","NEGRO ROSA":"","BLANCO LILA":"","AZUL":"","NEGRO":"","BLANCO":"","NEGRO LILA":""},
/* Bota Flex 276 Hombre */ 1884860:{"MIEL":"","BEIGE":"","NEGRO":"","AZUL":"","CARAMELO":""},
/* Tenis Runner 277 Dama */ 1988321:{"NEGRO FUCSIA":"","ROSADO":"","BLANCO LILA":"","GRIS NARANJA":"","GRIS LILA":"","BLANCO NARANJA":""},
/* Tenis Casual 278 */ 595898:{"PURPLE":"","ZYON":""},
/* Tenis Prime 279 */ 1519075:{"BLANCO":""},
/* Tenis Active 280 */ 2225485:{"BLANCO MOSTAZA":"","BLANCO GRIS":"","NEGRO MOSTAZA":""},
/* Tenis Urban 281 Hombre */ 1885277:{"NEGRO ROJO":"","BLANCO":"","AZUL":"","NEGRO BLANCO":""},
/* Tenis Classic 282 Hombre */ 1845430:{"Beige":"","Negro":"","Azul":"","Gris":""},
/* Tenis Street 283 Dama */ 1812527:{"GRIS":"","VIOLETA":"","CAFE":""},
/* Tenis Sport 284 */ 2033829:{"Negro Blanco":"","Blanco Naranja":""},
/* Zapato Retro 285 */ 2013780:{"MOSTAZA":"","CARAMELO":""},
/* Tenis Flex 286 Hombre */ 1883946:{"AZUL":"","NEGRO":"","BLANCO":"","BLANCO NARANJA":""},
/* Tenis Runner 287 Dama */ 1883973:{"NEGRO":"","ROSA":""},
/* Tenis Casual 288 */ 1847272:{"Negro":"","Negro Blanco":"","Negro Suela Blanca":""}
};

// Catálogo oficial conectado con variantes Dropi: [idVarianteDropi, color, talla]
const P = [
  {
    "id": 1380341,
    "n": "Tenis Urban 001 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 146,
    "sold": 376,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1380341/17296178661.jpg",
    "v": [
      [
        984019,
        "BLANCO",
        "37"
      ],
      [
        984013,
        "BLANCO",
        "36"
      ],
      [
        984031,
        "BLANCO",
        "39"
      ],
      [
        984018,
        "NEGRO",
        "37"
      ],
      [
        984017,
        "VERDE",
        "36"
      ],
      [
        984016,
        "ROSADO",
        "36"
      ],
      [
        984015,
        "CAFE",
        "36"
      ],
      [
        984014,
        "GRIS CLARO",
        "36"
      ],
      [
        984012,
        "NEGRO",
        "36"
      ],
      [
        984025,
        "BLANCO",
        "38"
      ],
      [
        984026,
        "GRIS CLARO",
        "38"
      ],
      [
        984027,
        "CAFE",
        "38"
      ],
      [
        984024,
        "NEGRO",
        "38"
      ],
      [
        984023,
        "VERDE",
        "37"
      ],
      [
        984022,
        "ROSADO",
        "37"
      ],
      [
        984021,
        "CAFE",
        "37"
      ],
      [
        984020,
        "GRIS CLARO",
        "37"
      ],
      [
        984030,
        "NEGRO",
        "39"
      ],
      [
        984029,
        "VERDE",
        "38"
      ],
      [
        984028,
        "ROSADO",
        "38"
      ],
      [
        984038,
        "GRIS CLARO",
        "40"
      ],
      [
        984037,
        "BLANCO",
        "40"
      ],
      [
        984035,
        "VERDE",
        "39"
      ],
      [
        984034,
        "ROSADO",
        "39"
      ],
      [
        984033,
        "CAFE",
        "39"
      ],
      [
        984032,
        "GRIS CLARO",
        "39"
      ],
      [
        984044,
        "GRIS CLARO",
        "41"
      ],
      [
        984043,
        "BLANCO",
        "41"
      ],
      [
        984042,
        "NEGRO",
        "41"
      ],
      [
        984040,
        "ROSADO",
        "40"
      ],
      [
        984036,
        "NEGRO",
        "40"
      ]
    ]
  },
  {
    "id": 1384424,
    "n": "Tenis Classic 002 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 89,
    "sold": 379,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1384424/1748533436GIF%20YZ%20HOMBRE.gif",
    "v": [
      [
        985851,
        "BLANCO",
        "37"
      ],
      [
        985850,
        "GRIS CLARO",
        "37"
      ],
      [
        985847,
        "NEGRO",
        "36"
      ],
      [
        985859,
        "CAFE",
        "39"
      ],
      [
        985857,
        "NEGRO",
        "38"
      ],
      [
        985856,
        "BLANCO",
        "38"
      ],
      [
        985860,
        "GRIS CLARO",
        "39"
      ],
      [
        985854,
        "CAFE",
        "38"
      ],
      [
        985852,
        "NEGRO",
        "37"
      ],
      [
        985849,
        "CAFE",
        "37"
      ],
      [
        985873,
        "BEIGE",
        "42"
      ],
      [
        985871,
        "BLANCO",
        "41"
      ],
      [
        985870,
        "GRIS CLARO",
        "41"
      ],
      [
        985866,
        "BLANCO",
        "40"
      ],
      [
        985855,
        "GRIS CLARO",
        "38"
      ],
      [
        985874,
        "CAFE",
        "42"
      ],
      [
        985875,
        "GRIS CLARO",
        "42"
      ],
      [
        985876,
        "BLANCO",
        "42"
      ],
      [
        985877,
        "NEGRO",
        "42"
      ],
      [
        985844,
        "CAFE",
        "36"
      ],
      [
        985880,
        "GRIS CLARO",
        "43"
      ],
      [
        985845,
        "GRIS CLARO",
        "36"
      ],
      [
        985846,
        "BLANCO",
        "36"
      ],
      [
        985882,
        "NEGRO",
        "43"
      ],
      [
        985881,
        "BLANCO",
        "43"
      ],
      [
        985862,
        "NEGRO",
        "39"
      ],
      [
        985861,
        "BLANCO",
        "39"
      ]
    ]
  },
  {
    "id": 1336101,
    "n": "Tenis Street 003",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 186,
    "sold": 336,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1336101/1748460218GIF%20YZ.gif",
    "v": [
      [
        962128,
        "NEGRO",
        "37"
      ],
      [
        962127,
        "ROSADO",
        "36"
      ],
      [
        962126,
        "VERDE",
        "36"
      ],
      [
        962147,
        "VERDE",
        "39"
      ],
      [
        962172,
        "BEIGE",
        "43"
      ],
      [
        962165,
        "GRIS CLARO",
        "42"
      ],
      [
        962163,
        "NEGRO",
        "42"
      ],
      [
        962164,
        "BLANCO",
        "42"
      ],
      [
        962166,
        "CAFE",
        "42"
      ],
      [
        962167,
        "BEIGE",
        "42"
      ],
      [
        962168,
        "NEGRO",
        "43"
      ],
      [
        962169,
        "BLANCO",
        "43"
      ],
      [
        962170,
        "GRIS CLARO",
        "43"
      ],
      [
        962144,
        "GRIS CLARO",
        "39"
      ],
      [
        962143,
        "BLANCO",
        "39"
      ],
      [
        962142,
        "NEGRO",
        "39"
      ],
      [
        962137,
        "GRIS CLARO",
        "38"
      ],
      [
        962136,
        "BLANCO",
        "38"
      ],
      [
        962135,
        "NEGRO",
        "38"
      ],
      [
        962134,
        "ROSADO",
        "37"
      ],
      [
        962133,
        "VERDE",
        "37"
      ],
      [
        962131,
        "CAFE",
        "37"
      ],
      [
        962130,
        "GRIS CLARO",
        "37"
      ],
      [
        962123,
        "BLANCO",
        "36"
      ],
      [
        962122,
        "NEGRO",
        "36"
      ],
      [
        962174,
        "BLANCO",
        "44"
      ],
      [
        962177,
        "BEIGE",
        "44"
      ],
      [
        962178,
        "GRIS CLARO",
        "36"
      ],
      [
        962161,
        "VERDE",
        "41"
      ],
      [
        962158,
        "GRIS CLARO",
        "41"
      ],
      [
        962149,
        "NEGRO",
        "40"
      ],
      [
        962150,
        "BLANCO",
        "40"
      ],
      [
        962157,
        "BLANCO",
        "41"
      ],
      [
        962148,
        "ROSADO",
        "39"
      ],
      [
        962154,
        "VERDE",
        "40"
      ],
      [
        962160,
        "BEIGE",
        "41"
      ],
      [
        962159,
        "CAFE",
        "41"
      ],
      [
        962151,
        "GRIS CLARO",
        "40"
      ],
      [
        1628573,
        "NEGRO",
        "35"
      ],
      [
        1628574,
        "BLANCO",
        "35"
      ],
      [
        1628575,
        "CAFE",
        "35"
      ],
      [
        1628576,
        "VERDE",
        "35"
      ],
      [
        962155,
        "ROSADO",
        "40"
      ],
      [
        962153,
        "BEIGE",
        "40"
      ],
      [
        1628578,
        "GRIS CLARO",
        "35"
      ],
      [
        1628577,
        "ROSADO",
        "35"
      ],
      [
        962124,
        "CAFE",
        "36"
      ],
      [
        962129,
        "BLANCO",
        "37"
      ],
      [
        962141,
        "ROSADO",
        "38"
      ],
      [
        962140,
        "VERDE",
        "38"
      ],
      [
        962138,
        "CAFE",
        "38"
      ]
    ]
  },
  {
    "id": 922411,
    "n": "Bota Sport 004",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 136,
    "sold": 426,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/922411/171908292217018949241701894924D_NQ_NP_2X_612144-MLV52584527057_112022-F%20(1).jpg",
    "v": [
      [
        656171,
        "Negro/Azul",
        "43"
      ],
      [
        656114,
        "Negro/Rojo",
        "35"
      ],
      [
        656150,
        "Negro/Azul",
        "40"
      ],
      [
        656161,
        "FullNegro",
        "42"
      ],
      [
        656146,
        "Negro/Dorado",
        "39"
      ],
      [
        656144,
        "Vino",
        "39"
      ],
      [
        656129,
        "Negro/Azul",
        "37"
      ],
      [
        656128,
        "Negro/Rojo",
        "37"
      ],
      [
        656127,
        "Negro/Blanco",
        "37"
      ],
      [
        656131,
        "Rojo",
        "37"
      ],
      [
        656130,
        "Vino",
        "37"
      ],
      [
        656170,
        "Negro/Rojo",
        "43"
      ],
      [
        656172,
        "Vino",
        "43"
      ],
      [
        656126,
        "FullNegro",
        "37"
      ],
      [
        656119,
        "FullNegro",
        "36"
      ],
      [
        656122,
        "Negro/Azul",
        "36"
      ],
      [
        656155,
        "Negro/Blanco",
        "41"
      ],
      [
        656164,
        "Negro/Azul",
        "42"
      ],
      [
        656165,
        "Vino",
        "42"
      ],
      [
        656113,
        "Negro/Blanco",
        "35"
      ],
      [
        656124,
        "Rojo",
        "36"
      ],
      [
        656145,
        "Rojo",
        "39"
      ],
      [
        656153,
        "Negro/Dorado",
        "40"
      ],
      [
        656141,
        "Negro/Blanco",
        "39"
      ],
      [
        656158,
        "Vino",
        "41"
      ],
      [
        656152,
        "Rojo",
        "40"
      ],
      [
        656151,
        "Vino",
        "40"
      ],
      [
        656149,
        "Negro/Rojo",
        "40"
      ],
      [
        656142,
        "Negro/Rojo",
        "39"
      ],
      [
        656148,
        "Negro/Blanco",
        "40"
      ],
      [
        656147,
        "FullNegro",
        "40"
      ],
      [
        656125,
        "Negro/Dorado",
        "36"
      ],
      [
        656115,
        "Negro/Azul",
        "35"
      ],
      [
        656116,
        "Vino",
        "35"
      ],
      [
        656117,
        "Rojo",
        "35"
      ],
      [
        656118,
        "Negro/Dorado",
        "35"
      ],
      [
        656120,
        "Negro/Blanco",
        "36"
      ],
      [
        656121,
        "Negro/Rojo",
        "36"
      ],
      [
        656123,
        "Vino",
        "36"
      ],
      [
        656174,
        "Negro/Dorado",
        "43"
      ],
      [
        656173,
        "Rojo",
        "43"
      ],
      [
        656169,
        "Negro/Blanco",
        "43"
      ],
      [
        656168,
        "FullNegro",
        "43"
      ],
      [
        656167,
        "Negro/Dorado",
        "42"
      ],
      [
        656166,
        "Rojo",
        "42"
      ],
      [
        656163,
        "Negro/Rojo",
        "42"
      ],
      [
        656162,
        "Negro/Blanco",
        "42"
      ],
      [
        656160,
        "Negro/Dorado",
        "41"
      ],
      [
        656159,
        "Rojo",
        "41"
      ],
      [
        656140,
        "FullNegro",
        "39"
      ],
      [
        656139,
        "Negro/Dorado",
        "38"
      ],
      [
        656138,
        "Rojo",
        "38"
      ],
      [
        656137,
        "Vino",
        "38"
      ],
      [
        656136,
        "Negro/Azul",
        "38"
      ],
      [
        656135,
        "Negro/Rojo",
        "38"
      ],
      [
        656134,
        "Negro/Blanco",
        "38"
      ],
      [
        656133,
        "FullNegro",
        "38"
      ],
      [
        656132,
        "Negro/Dorado",
        "37"
      ],
      [
        656112,
        "FullNegro",
        "35"
      ],
      [
        656143,
        "Negro/Azul",
        "39"
      ],
      [
        656154,
        "FullNegro",
        "41"
      ],
      [
        656157,
        "Negro/Azul",
        "41"
      ],
      [
        656156,
        "Negro/Rojo",
        "41"
      ]
    ]
  },
  {
    "id": 2128764,
    "n": "Tenis Retro 005",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 129,
    "sold": 119,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2128764/1776124255WhatsApp%20Image%202025-07-22%20at%207.17.45%20PM%20(1).jpeg",
    "v": [
      [
        2097212,
        "Negro",
        "43"
      ],
      [
        2097163,
        "Blanco",
        "35"
      ],
      [
        2097164,
        "Negro",
        "35"
      ],
      [
        2097165,
        "Blanco/Negro",
        "35"
      ],
      [
        2097167,
        "Blanco/Verde",
        "35"
      ],
      [
        2097168,
        "Negro/Dorado",
        "35"
      ],
      [
        2097169,
        "Blanco",
        "36"
      ],
      [
        2097170,
        "Negro",
        "36"
      ],
      [
        2097171,
        "Blanco/Negro",
        "36"
      ],
      [
        2097173,
        "Blanco/Verde",
        "36"
      ],
      [
        2097174,
        "Negro/Dorado",
        "36"
      ],
      [
        2097175,
        "Blanco",
        "37"
      ],
      [
        2097176,
        "Negro",
        "37"
      ],
      [
        2097177,
        "Blanco/Negro",
        "37"
      ],
      [
        2097179,
        "Blanco/Verde",
        "37"
      ],
      [
        2097180,
        "Negro/Dorado",
        "37"
      ],
      [
        2097181,
        "Blanco",
        "38"
      ],
      [
        2097182,
        "Negro",
        "38"
      ],
      [
        2097183,
        "Blanco/Negro",
        "38"
      ],
      [
        2097185,
        "Blanco/Verde",
        "38"
      ],
      [
        2097186,
        "Negro/Dorado",
        "38"
      ],
      [
        2097187,
        "Blanco",
        "39"
      ],
      [
        2097188,
        "Negro",
        "39"
      ],
      [
        2097189,
        "Blanco/Negro",
        "39"
      ],
      [
        2097191,
        "Blanco/Verde",
        "39"
      ],
      [
        2097192,
        "Negro/Dorado",
        "39"
      ],
      [
        2097193,
        "Blanco",
        "40"
      ],
      [
        2097194,
        "Negro",
        "40"
      ],
      [
        2097195,
        "Blanco/Negro",
        "40"
      ],
      [
        2097197,
        "Blanco/Verde",
        "40"
      ],
      [
        2097198,
        "Negro/Dorado",
        "40"
      ],
      [
        2097199,
        "Blanco",
        "41"
      ],
      [
        2097200,
        "Negro",
        "41"
      ],
      [
        2097201,
        "Blanco/Negro",
        "41"
      ],
      [
        2097203,
        "Blanco/Verde",
        "41"
      ],
      [
        2097204,
        "Negro/Dorado",
        "41"
      ],
      [
        2097205,
        "Blanco",
        "42"
      ],
      [
        2097206,
        "Negro",
        "42"
      ],
      [
        2097207,
        "Blanco/Negro",
        "42"
      ],
      [
        2097209,
        "Blanco/Verde",
        "42"
      ],
      [
        2097210,
        "Negro/Dorado",
        "42"
      ],
      [
        2097211,
        "Blanco",
        "43"
      ],
      [
        2097213,
        "Blanco/Negro",
        "43"
      ],
      [
        2097215,
        "Blanco/Verde",
        "43"
      ],
      [
        2097216,
        "Negro/Dorado",
        "43"
      ]
    ]
  },
  {
    "id": 2125711,
    "n": "Tenis Flex 006 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 136,
    "sold": 126,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2125711/1775702914WhatsApp%20Image%202026-04-06%20at%2010.24.54%20PM%20(5).jpeg",
    "v": [
      [
        2088693,
        "Gris Azul Naranja",
        "36"
      ],
      [
        2088694,
        "Gris Azul Naranja",
        "37"
      ],
      [
        2088695,
        "Gris Azul Naranja",
        "38"
      ],
      [
        2088696,
        "Gris Azul Naranja",
        "39"
      ],
      [
        2088697,
        "Gris Azul Naranja",
        "40"
      ],
      [
        2088698,
        "Blanco Gris",
        "35"
      ],
      [
        2088699,
        "Blanco Gris",
        "36"
      ],
      [
        2088700,
        "Blanco Gris",
        "37"
      ],
      [
        2088701,
        "Blanco Gris",
        "38"
      ],
      [
        2088702,
        "Blanco Gris",
        "39"
      ],
      [
        2088703,
        "Blanco Gris",
        "40"
      ],
      [
        2088704,
        "Negro",
        "35"
      ],
      [
        2088705,
        "Negro",
        "36"
      ],
      [
        2088706,
        "Negro",
        "37"
      ],
      [
        2088707,
        "Negro",
        "38"
      ],
      [
        2088708,
        "Negro",
        "39"
      ],
      [
        2088709,
        "Negro",
        "40"
      ],
      [
        2088710,
        "Blanco Negro",
        "35"
      ],
      [
        2088714,
        "Blanco Negro",
        "39"
      ],
      [
        2088715,
        "Blanco Negro",
        "40"
      ],
      [
        2088716,
        "Beige Negro",
        "35"
      ],
      [
        2088717,
        "Beige Negro",
        "36"
      ],
      [
        2088718,
        "Beige Negro",
        "37"
      ],
      [
        2088719,
        "Beige Negro",
        "38"
      ],
      [
        2088720,
        "Beige Negro",
        "39"
      ],
      [
        2088724,
        "Blanco Chulo Azul",
        "37"
      ],
      [
        2088725,
        "Blanco Chulo Azul",
        "38"
      ],
      [
        2088726,
        "Blanco Chulo Azul",
        "39"
      ],
      [
        2088727,
        "Blanco Chulo Azul",
        "40"
      ],
      [
        2088692,
        "Gris Azul Naranja",
        "35"
      ],
      [
        2088711,
        "Blanco Negro",
        "36"
      ],
      [
        2088712,
        "Blanco Negro",
        "37"
      ],
      [
        2088713,
        "Blanco Negro",
        "38"
      ],
      [
        2088721,
        "Beige Negro",
        "40"
      ],
      [
        2088722,
        "Blanco Chulo Azul",
        "35"
      ],
      [
        2088723,
        "Blanco Chulo Azul",
        "36"
      ]
    ]
  },
  {
    "id": 2148286,
    "n": "Tenis Runner 007 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 211,
    "sold": 261,
    "stock": 7,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2148286/1778469573WhatsApp%20Image%202026-05-10%20at%208.03.23%20PM%20(2).jpeg",
    "v": [
      [
        2146615,
        "Blanco Rosado",
        "39"
      ],
      [
        2146616,
        "Blanco Rosado",
        "40"
      ],
      [
        2146617,
        "Negro",
        "35"
      ],
      [
        2146618,
        "Negro",
        "36"
      ],
      [
        2146619,
        "Negro",
        "37"
      ],
      [
        2146620,
        "Negro",
        "38"
      ],
      [
        2146621,
        "Negro",
        "39"
      ],
      [
        2146622,
        "Negro",
        "40"
      ],
      [
        2146593,
        "Blanco Azul",
        "35"
      ],
      [
        2146594,
        "Blanco Azul",
        "36"
      ],
      [
        2146595,
        "Blanco Azul",
        "37"
      ],
      [
        2146596,
        "Blanco Azul",
        "38"
      ],
      [
        2146597,
        "Blanco Azul",
        "39"
      ],
      [
        2146600,
        "Blanco Violeta",
        "36"
      ],
      [
        2146601,
        "Blanco Violeta",
        "37"
      ],
      [
        2146602,
        "Blanco Violeta",
        "38"
      ],
      [
        2146603,
        "Blanco Violeta",
        "39"
      ],
      [
        2146604,
        "Blanco Violeta",
        "40"
      ],
      [
        2146605,
        "Blanco Negro",
        "35"
      ],
      [
        2146606,
        "Blanco Negro",
        "36"
      ],
      [
        2146607,
        "Blanco Negro",
        "37"
      ],
      [
        2146608,
        "Blanco Negro",
        "38"
      ],
      [
        2146609,
        "Blanco Negro",
        "39"
      ],
      [
        2146610,
        "Blanco Negro",
        "40"
      ],
      [
        2146611,
        "Blanco Rosado",
        "35"
      ],
      [
        2146612,
        "Blanco Rosado",
        "36"
      ],
      [
        2146613,
        "Blanco Rosado",
        "37"
      ],
      [
        2146614,
        "Blanco Rosado",
        "38"
      ],
      [
        2146598,
        "Blanco Azul",
        "40"
      ],
      [
        2146599,
        "Blanco Violeta",
        "35"
      ]
    ]
  },
  {
    "id": 2197200,
    "n": "Tenis Casual 008",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 165,
    "sold": 215,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2197200/17836307691782793571WhatsApp%20Image%202026-06-29%20at%209.42.53%20PM%20(2).jpeg",
    "v": [
      [
        2254230,
        "Blanco",
        "35"
      ],
      [
        2254231,
        "Full/Negro",
        "35"
      ],
      [
        2254232,
        "Chulo/Rojo",
        "35"
      ],
      [
        2254233,
        "Chulo/Azul",
        "35"
      ],
      [
        2254234,
        "Fucsia",
        "35"
      ],
      [
        2254235,
        "Blanco",
        "36"
      ],
      [
        2254236,
        "Full/Negro",
        "36"
      ],
      [
        2254237,
        "Chulo/Rojo",
        "36"
      ],
      [
        2254238,
        "Chulo/Azul",
        "36"
      ],
      [
        2254239,
        "Fucsia",
        "36"
      ],
      [
        2254240,
        "Blanco",
        "37"
      ],
      [
        2254241,
        "Full/Negro",
        "37"
      ],
      [
        2254242,
        "Chulo/Rojo",
        "37"
      ],
      [
        2254243,
        "Chulo/Azul",
        "37"
      ],
      [
        2254244,
        "Fucsia",
        "37"
      ],
      [
        2254245,
        "Blanco",
        "38"
      ],
      [
        2254246,
        "Full/Negro",
        "38"
      ],
      [
        2254247,
        "Chulo/Rojo",
        "38"
      ],
      [
        2254248,
        "Chulo/Azul",
        "38"
      ],
      [
        2254249,
        "Fucsia",
        "38"
      ],
      [
        2254250,
        "Blanco",
        "39"
      ],
      [
        2254251,
        "Full/Negro",
        "39"
      ],
      [
        2254252,
        "Chulo/Rojo",
        "39"
      ],
      [
        2254253,
        "Chulo/Azul",
        "39"
      ],
      [
        2254254,
        "Fucsia",
        "39"
      ],
      [
        2254255,
        "Blanco",
        "40"
      ],
      [
        2254256,
        "Full/Negro",
        "40"
      ],
      [
        2254257,
        "Chulo/Rojo",
        "40"
      ],
      [
        2254258,
        "Chulo/Azul",
        "40"
      ],
      [
        2254259,
        "Fucsia",
        "40"
      ],
      [
        2254260,
        "Blanco",
        "41"
      ],
      [
        2254261,
        "Full/Negro",
        "41"
      ],
      [
        2254262,
        "Chulo/Rojo",
        "41"
      ],
      [
        2254263,
        "Chulo/Azul",
        "41"
      ],
      [
        2254265,
        "Blanco",
        "42"
      ],
      [
        2254266,
        "Full/Negro",
        "42"
      ],
      [
        2254267,
        "Chulo/Rojo",
        "42"
      ],
      [
        2254268,
        "Chulo/Azul",
        "42"
      ],
      [
        2254270,
        "Blanco",
        "43"
      ],
      [
        2254271,
        "Full/Negro",
        "43"
      ],
      [
        2254272,
        "Chulo/Rojo",
        "43"
      ],
      [
        2254273,
        "Chulo/Azul",
        "43"
      ]
    ]
  },
  {
    "id": 2135903,
    "n": "Tenis Prime 009",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 68,
    "sold": 118,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135903/1776921731WhatsApp%20Image%202026-04-22%20at%207.41.32%20PM.jpeg",
    "v": [
      [
        2120377,
        "Blanco Gris",
        "36"
      ],
      [
        2120378,
        "Blanco Gris",
        "37"
      ],
      [
        2120379,
        "Blanco Gris",
        "38"
      ],
      [
        2120380,
        "Blanco Gris",
        "39"
      ],
      [
        2120381,
        "Blanco Gris",
        "40"
      ],
      [
        2120382,
        "Blanco Azul",
        "35"
      ],
      [
        2120383,
        "Blanco Azul",
        "36"
      ],
      [
        2120384,
        "Blanco Azul",
        "37"
      ],
      [
        2120385,
        "Blanco Azul",
        "38"
      ],
      [
        2120370,
        "Blanco Violeta",
        "35"
      ],
      [
        2120371,
        "Blanco Violeta",
        "36"
      ],
      [
        2120372,
        "Blanco Violeta",
        "37"
      ],
      [
        2120373,
        "Blanco Violeta",
        "38"
      ],
      [
        2120374,
        "Blanco Violeta",
        "39"
      ],
      [
        2120375,
        "Blanco Violeta",
        "40"
      ],
      [
        2120376,
        "Blanco Gris",
        "35"
      ],
      [
        2120386,
        "Blanco Azul",
        "39"
      ],
      [
        2120387,
        "Blanco Azul",
        "40"
      ],
      [
        2120388,
        "Negro",
        "35"
      ],
      [
        2120389,
        "Negro",
        "36"
      ],
      [
        2120390,
        "Negro",
        "37"
      ],
      [
        2120391,
        "Negro",
        "38"
      ],
      [
        2120392,
        "Negro",
        "39"
      ],
      [
        2120393,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 1950859,
    "n": "Tenis Active 010",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 64,
    "sold": 374,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1950859/17597078615a507bbd-e5ab-4391-bfe5-d7ef8bc97e4f.jpg",
    "v": [
      [
        1771877,
        "Blanco/Negro",
        "40"
      ],
      [
        1771857,
        "Blanco/Negro",
        "35"
      ],
      [
        1771858,
        "Blanco/Rosa",
        "35"
      ],
      [
        1771859,
        "Blanco/Celeste",
        "35"
      ],
      [
        1771860,
        "Negro",
        "36"
      ],
      [
        1771861,
        "Blanco/Negro",
        "36"
      ],
      [
        1771862,
        "Blanco/Rosa",
        "36"
      ],
      [
        1771863,
        "Blanco/Celeste",
        "36"
      ],
      [
        1771865,
        "Blanco/Negro",
        "37"
      ],
      [
        1771866,
        "Blanco/Rosa",
        "37"
      ],
      [
        1771867,
        "Blanco/Celeste",
        "37"
      ],
      [
        1771868,
        "Negro",
        "38"
      ],
      [
        1771869,
        "Blanco/Negro",
        "38"
      ],
      [
        1771870,
        "Blanco/Rosa",
        "38"
      ],
      [
        1771871,
        "Blanco/Celeste",
        "38"
      ],
      [
        1771872,
        "Negro",
        "39"
      ],
      [
        1771873,
        "Blanco/Negro",
        "39"
      ],
      [
        1771874,
        "Blanco/Rosa",
        "39"
      ],
      [
        1771875,
        "Blanco/Celeste",
        "39"
      ],
      [
        1771876,
        "Negro",
        "40"
      ],
      [
        1771878,
        "Blanco/Rosa",
        "40"
      ],
      [
        1771879,
        "Blanco/Celeste",
        "40"
      ],
      [
        1771856,
        "Negro",
        "35"
      ],
      [
        1771864,
        "Negro",
        "37"
      ]
    ]
  },
  {
    "id": 1868745,
    "n": "Tenis Urban 011",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 210,
    "sold": 200,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1868745/17518315741.jpg",
    "v": [
      [
        1599642,
        "BEIGE",
        "38"
      ],
      [
        1599640,
        "BEIGE",
        "36"
      ],
      [
        1599643,
        "BEIGE",
        "39"
      ],
      [
        1599644,
        "BEIGE",
        "40"
      ],
      [
        1599645,
        "BEIGE",
        "41"
      ],
      [
        1599647,
        "BEIGE",
        "43"
      ],
      [
        1599648,
        "BEIGE",
        "44"
      ],
      [
        1599649,
        "NEGRO",
        "36"
      ],
      [
        1599650,
        "NEGRO",
        "37"
      ],
      [
        1599651,
        "NEGRO",
        "38"
      ],
      [
        1599652,
        "NEGRO",
        "39"
      ],
      [
        1599653,
        "NEGRO",
        "40"
      ],
      [
        1599654,
        "NEGRO",
        "41"
      ],
      [
        1599655,
        "NEGRO",
        "42"
      ],
      [
        1599658,
        "BLANCO",
        "36"
      ],
      [
        1599659,
        "BLANCO",
        "37"
      ],
      [
        1599660,
        "BLANCO",
        "38"
      ],
      [
        1599661,
        "BLANCO",
        "39"
      ],
      [
        1599665,
        "BLANCO",
        "43"
      ],
      [
        1599666,
        "BLANCO",
        "44"
      ],
      [
        1599671,
        "AZUL",
        "40"
      ],
      [
        1599674,
        "AZUL",
        "43"
      ],
      [
        1599675,
        "AZUL",
        "44"
      ],
      [
        1599676,
        "ROSADO",
        "36"
      ],
      [
        1599677,
        "ROSADO",
        "37"
      ],
      [
        1599641,
        "BEIGE",
        "37"
      ],
      [
        1599646,
        "BEIGE",
        "42"
      ],
      [
        1599656,
        "NEGRO",
        "43"
      ],
      [
        1599657,
        "NEGRO",
        "44"
      ],
      [
        1599662,
        "BLANCO",
        "40"
      ],
      [
        1599663,
        "BLANCO",
        "41"
      ],
      [
        1599664,
        "BLANCO",
        "42"
      ],
      [
        1599672,
        "AZUL",
        "41"
      ],
      [
        1599673,
        "AZUL",
        "42"
      ],
      [
        1599678,
        "ROSADO",
        "38"
      ],
      [
        1599679,
        "ROSADO",
        "39"
      ],
      [
        1599680,
        "ROSADO",
        "40"
      ]
    ]
  },
  {
    "id": 1824535,
    "n": "Tenis Classic 012",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 100,
    "sold": 190,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1824535/1748443115GIF%20OGIY%20RUSH.gif",
    "v": [
      [
        1504582,
        "NEGRO",
        "35"
      ],
      [
        1504583,
        "BLANCO",
        "35"
      ],
      [
        1504584,
        "BEIGE",
        "35"
      ],
      [
        1504585,
        "ROSADO",
        "35"
      ],
      [
        1504586,
        "NEGRO",
        "36"
      ],
      [
        1504587,
        "BLANCO",
        "36"
      ],
      [
        1504588,
        "BEIGE",
        "36"
      ],
      [
        1504589,
        "ROSADO",
        "36"
      ],
      [
        1504590,
        "NEGRO",
        "37"
      ],
      [
        1504591,
        "BLANCO",
        "37"
      ],
      [
        1504592,
        "BEIGE",
        "37"
      ],
      [
        1504593,
        "ROSADO",
        "37"
      ],
      [
        1504594,
        "NEGRO",
        "38"
      ],
      [
        1504595,
        "BLANCO",
        "38"
      ],
      [
        1504596,
        "BEIGE",
        "38"
      ],
      [
        1504597,
        "ROSADO",
        "38"
      ],
      [
        1504598,
        "NEGRO",
        "39"
      ],
      [
        1504599,
        "BLANCO",
        "39"
      ],
      [
        1504600,
        "BEIGE",
        "39"
      ],
      [
        1504601,
        "ROSADO",
        "39"
      ],
      [
        1504602,
        "NEGRO",
        "40"
      ],
      [
        1504603,
        "BLANCO",
        "40"
      ],
      [
        1504604,
        "BEIGE",
        "40"
      ],
      [
        1504605,
        "ROSADO",
        "40"
      ],
      [
        1504606,
        "NEGRO",
        "41"
      ],
      [
        1504607,
        "BLANCO",
        "41"
      ],
      [
        1504608,
        "BEIGE",
        "41"
      ],
      [
        1504610,
        "NEGRO",
        "42"
      ],
      [
        1504611,
        "BLANCO",
        "42"
      ],
      [
        1504612,
        "BEIGE",
        "42"
      ],
      [
        1504614,
        "NEGRO",
        "43"
      ],
      [
        1504615,
        "BLANCO",
        "43"
      ],
      [
        1504616,
        "BEIGE",
        "43"
      ],
      [
        1504618,
        "NEGRO",
        "44"
      ],
      [
        1504619,
        "BLANCO",
        "44"
      ],
      [
        1504620,
        "BEIGE",
        "44"
      ]
    ]
  },
  {
    "id": 1824508,
    "n": "Tenis Street 013",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.7,
    "rev": 73,
    "sold": 163,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1824508/1748464513GIF%20OGIY%20CORE.gif",
    "v": [
      [
        1504488,
        "NEGRO",
        "35"
      ],
      [
        1504489,
        "BLANCO",
        "35"
      ],
      [
        1504490,
        "BEIGE",
        "35"
      ],
      [
        1504491,
        "ROSADO",
        "35"
      ],
      [
        1504492,
        "NEGRO",
        "36"
      ],
      [
        1504493,
        "BLANCO",
        "36"
      ],
      [
        1504494,
        "BEIGE",
        "36"
      ],
      [
        1504495,
        "ROSADO",
        "36"
      ],
      [
        1504496,
        "NEGRO",
        "37"
      ],
      [
        1504497,
        "BLANCO",
        "37"
      ],
      [
        1504498,
        "BEIGE",
        "37"
      ],
      [
        1504499,
        "ROSADO",
        "37"
      ],
      [
        1504500,
        "NEGRO",
        "38"
      ],
      [
        1504501,
        "BLANCO",
        "38"
      ],
      [
        1504502,
        "BEIGE",
        "38"
      ],
      [
        1504503,
        "ROSADO",
        "38"
      ],
      [
        1504504,
        "NEGRO",
        "39"
      ],
      [
        1504505,
        "BLANCO",
        "39"
      ],
      [
        1504506,
        "BEIGE",
        "39"
      ],
      [
        1504507,
        "ROSADO",
        "39"
      ],
      [
        1504508,
        "NEGRO",
        "40"
      ],
      [
        1504509,
        "BLANCO",
        "40"
      ],
      [
        1504510,
        "BEIGE",
        "40"
      ],
      [
        1504511,
        "ROSADO",
        "40"
      ],
      [
        1504512,
        "NEGRO",
        "41"
      ],
      [
        1504513,
        "BLANCO",
        "41"
      ],
      [
        1504514,
        "BEIGE",
        "41"
      ],
      [
        1504516,
        "NEGRO",
        "42"
      ],
      [
        1504517,
        "BLANCO",
        "42"
      ],
      [
        1504518,
        "BEIGE",
        "42"
      ],
      [
        1504520,
        "NEGRO",
        "43"
      ],
      [
        1504521,
        "BLANCO",
        "43"
      ],
      [
        1504522,
        "BEIGE",
        "43"
      ],
      [
        1504526,
        "BEIGE",
        "44"
      ],
      [
        1504525,
        "BLANCO",
        "44"
      ],
      [
        1504524,
        "NEGRO",
        "44"
      ]
    ]
  },
  {
    "id": 2189034,
    "n": "Tenis Sport 014",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 99,
    "sold": 209,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2189034/1782790877WhatsApp%20Image%202026-06-28%20at%208.46.53%20PM%20(2).jpeg",
    "v": [
      [
        2232599,
        "Blanco",
        "38"
      ],
      [
        2232600,
        "Blanco",
        "39"
      ],
      [
        2232601,
        "Blanco",
        "40"
      ],
      [
        2232602,
        "Blanco",
        "41"
      ],
      [
        2232603,
        "Blanco",
        "42"
      ],
      [
        2232604,
        "Blanco",
        "43"
      ],
      [
        2232605,
        "Beige",
        "37"
      ],
      [
        2232606,
        "Beige",
        "38"
      ],
      [
        2232607,
        "Beige",
        "39"
      ],
      [
        2232608,
        "Beige",
        "40"
      ],
      [
        2232609,
        "Beige",
        "41"
      ],
      [
        2232610,
        "Beige",
        "42"
      ],
      [
        2232611,
        "Beige",
        "43"
      ],
      [
        2232612,
        "Vinotinto",
        "37"
      ],
      [
        2232613,
        "Vinotinto",
        "38"
      ],
      [
        2232614,
        "Vinotinto",
        "39"
      ],
      [
        2232615,
        "Vinotinto",
        "40"
      ],
      [
        2232616,
        "Vinotinto",
        "41"
      ],
      [
        2232617,
        "Vinotinto",
        "42"
      ],
      [
        2232618,
        "Vinotinto",
        "43"
      ],
      [
        2232619,
        "Marron",
        "37"
      ],
      [
        2232620,
        "Marron",
        "38"
      ],
      [
        2232621,
        "Marron",
        "39"
      ],
      [
        2232622,
        "Marron",
        "40"
      ],
      [
        2232623,
        "Marron",
        "41"
      ],
      [
        2232624,
        "Marron",
        "42"
      ],
      [
        2232625,
        "Marron",
        "43"
      ],
      [
        2232591,
        "Negro",
        "37"
      ],
      [
        2232592,
        "Negro",
        "38"
      ],
      [
        2232593,
        "Negro",
        "39"
      ],
      [
        2232594,
        "Negro",
        "40"
      ],
      [
        2232595,
        "Negro",
        "41"
      ],
      [
        2232596,
        "Negro",
        "42"
      ],
      [
        2232597,
        "Negro",
        "43"
      ],
      [
        2232598,
        "Blanco",
        "37"
      ]
    ]
  },
  {
    "id": 1899580,
    "n": "Tenis Retro 015",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 85,
    "sold": 95,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1899580/1a357df3-a864-42c4-9ea4-ba3401b316fc.png",
    "v": [
      [
        1671897,
        "Todo Negro",
        "37"
      ],
      [
        1671887,
        "Blanco Crema Rojo",
        "43"
      ],
      [
        1671919,
        "Celeste",
        "43"
      ],
      [
        1671926,
        "Todo Blanco",
        "42"
      ],
      [
        1671852,
        "Blanco Verde",
        "40"
      ],
      [
        1671885,
        "Blanco Crema Rojo",
        "41"
      ],
      [
        1671871,
        "Gris",
        "43"
      ],
      [
        1671931,
        "Caqui Beige",
        "39"
      ],
      [
        1671902,
        "Todo Negro",
        "42"
      ],
      [
        1671895,
        "Negro Blanco",
        "43"
      ],
      [
        1671894,
        "Negro Blanco",
        "42"
      ],
      [
        1671893,
        "Negro Blanco",
        "41"
      ],
      [
        1671890,
        "Negro Blanco",
        "38"
      ],
      [
        1671864,
        "Gris",
        "36"
      ],
      [
        1671909,
        "Blanco Azul Marino",
        "41"
      ],
      [
        1671906,
        "Blanco Azul Marino",
        "38"
      ],
      [
        1671911,
        "Blanco Azul Marino",
        "43"
      ],
      [
        1671880,
        "Blanco Crema Rojo",
        "36"
      ],
      [
        1671899,
        "Todo Negro",
        "39"
      ],
      [
        1671853,
        "Blanco Verde",
        "41"
      ],
      [
        1671883,
        "Blanco Crema Rojo",
        "39"
      ],
      [
        1671882,
        "Blanco Crema Rojo",
        "38"
      ],
      [
        1671910,
        "Blanco Azul Marino",
        "42"
      ],
      [
        1671918,
        "Celeste",
        "42"
      ],
      [
        1671903,
        "Todo Negro",
        "43"
      ],
      [
        1671901,
        "Todo Negro",
        "41"
      ],
      [
        1671900,
        "Todo Negro",
        "40"
      ],
      [
        1671866,
        "Gris",
        "38"
      ],
      [
        1671850,
        "Blanco Verde",
        "38"
      ],
      [
        1671908,
        "Blanco Azul Marino",
        "40"
      ],
      [
        1671907,
        "Blanco Azul Marino",
        "39"
      ],
      [
        1671912,
        "Celeste",
        "36"
      ],
      [
        1671904,
        "Blanco Azul Marino",
        "36"
      ],
      [
        1671924,
        "Todo Blanco",
        "40"
      ],
      [
        1671921,
        "Todo Blanco",
        "37"
      ],
      [
        1671869,
        "Gris",
        "41"
      ],
      [
        1671905,
        "Blanco Azul Marino",
        "37"
      ],
      [
        1671855,
        "Blanco Verde",
        "43"
      ],
      [
        1671916,
        "Celeste",
        "40"
      ],
      [
        1671915,
        "Celeste",
        "39"
      ],
      [
        1671914,
        "Celeste",
        "38"
      ],
      [
        1671925,
        "Todo Blanco",
        "41"
      ],
      [
        1671923,
        "Todo Blanco",
        "39"
      ],
      [
        1671922,
        "Todo Blanco",
        "38"
      ],
      [
        1671917,
        "Celeste",
        "41"
      ],
      [
        1671892,
        "Negro Blanco",
        "40"
      ],
      [
        1671920,
        "Todo Blanco",
        "36"
      ],
      [
        1671935,
        "Caqui Beige",
        "43"
      ],
      [
        1671934,
        "Caqui Beige",
        "42"
      ],
      [
        1671933,
        "Caqui Beige",
        "41"
      ],
      [
        1671932,
        "Caqui Beige",
        "40"
      ],
      [
        1671930,
        "Caqui Beige",
        "38"
      ],
      [
        1671929,
        "Caqui Beige",
        "37"
      ],
      [
        1671928,
        "Caqui Beige",
        "36"
      ],
      [
        1671927,
        "Todo Blanco",
        "43"
      ],
      [
        1671848,
        "Blanco Verde",
        "36"
      ],
      [
        1671849,
        "Blanco Verde",
        "37"
      ],
      [
        1671870,
        "Gris",
        "42"
      ],
      [
        1671913,
        "Celeste",
        "37"
      ],
      [
        1671889,
        "Negro Blanco",
        "37"
      ],
      [
        1671898,
        "Todo Negro",
        "38"
      ],
      [
        1671886,
        "Blanco Crema Rojo",
        "42"
      ],
      [
        1671854,
        "Blanco Verde",
        "42"
      ],
      [
        1671851,
        "Blanco Verde",
        "39"
      ],
      [
        1671884,
        "Blanco Crema Rojo",
        "40"
      ],
      [
        1671896,
        "Todo Negro",
        "36"
      ],
      [
        1671888,
        "Negro Blanco",
        "36"
      ],
      [
        1671868,
        "Gris",
        "40"
      ],
      [
        1671867,
        "Gris",
        "39"
      ],
      [
        1671865,
        "Gris",
        "37"
      ],
      [
        1671891,
        "Negro Blanco",
        "39"
      ],
      [
        1671881,
        "Blanco Crema Rojo",
        "37"
      ]
    ]
  },
  {
    "id": 1884278,
    "n": "Tenis Flex 016 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 83,
    "sold": 433,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1884278/1753387306WhatsApp%20Image%202025-07-24%20at%202.57.47%20PM.jpeg",
    "v": [
      [
        1635052,
        "NEGRO",
        "41"
      ],
      [
        1635057,
        "BEIGE",
        "42"
      ],
      [
        1635030,
        "CARAMELO",
        "37"
      ],
      [
        1635035,
        "MIEL",
        "38"
      ],
      [
        1635063,
        "BEIGE",
        "43"
      ],
      [
        1635062,
        "AZUL",
        "42"
      ],
      [
        1635068,
        "AZUL",
        "43"
      ],
      [
        1635039,
        "BEIGE",
        "39"
      ],
      [
        1635031,
        "MARRON",
        "37"
      ],
      [
        1635043,
        "MARRON",
        "39"
      ],
      [
        1635045,
        "BEIGE",
        "40"
      ],
      [
        1635048,
        "CARAMELO",
        "40"
      ],
      [
        1635055,
        "MARRON",
        "41"
      ],
      [
        1635054,
        "CARAMELO",
        "41"
      ],
      [
        1635029,
        "MIEL",
        "37"
      ],
      [
        1635033,
        "BEIGE",
        "38"
      ],
      [
        1635050,
        "AZUL",
        "40"
      ],
      [
        1635059,
        "MIEL",
        "42"
      ],
      [
        1635060,
        "CARAMELO",
        "42"
      ],
      [
        1635061,
        "MARRON",
        "42"
      ],
      [
        1635064,
        "NEGRO",
        "43"
      ],
      [
        1635065,
        "MIEL",
        "43"
      ],
      [
        1635056,
        "AZUL",
        "41"
      ],
      [
        1635027,
        "BEIGE",
        "37"
      ],
      [
        1635041,
        "MIEL",
        "39"
      ],
      [
        1635053,
        "MIEL",
        "41"
      ],
      [
        1635058,
        "NEGRO",
        "42"
      ],
      [
        1635047,
        "MIEL",
        "40"
      ],
      [
        1635067,
        "MARRON",
        "43"
      ],
      [
        1635046,
        "NEGRO",
        "40"
      ],
      [
        1635066,
        "CARAMELO",
        "43"
      ],
      [
        1635044,
        "AZUL",
        "39"
      ],
      [
        1635034,
        "NEGRO",
        "38"
      ],
      [
        1635028,
        "NEGRO",
        "37"
      ],
      [
        1635040,
        "NEGRO",
        "39"
      ],
      [
        1635032,
        "AZUL",
        "37"
      ],
      [
        1635042,
        "CARAMELO",
        "39"
      ],
      [
        1635049,
        "MARRON",
        "40"
      ],
      [
        1635051,
        "BEIGE",
        "41"
      ],
      [
        1635038,
        "AZUL",
        "38"
      ],
      [
        1635037,
        "MARRON",
        "38"
      ],
      [
        1635036,
        "CARAMELO",
        "38"
      ]
    ]
  },
  {
    "id": 1902480,
    "n": "Tenis Runner 017 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 105,
    "sold": 275,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1902480/1755580954WhatsApp%20Image%202025-08-18%20at%2011.27.20%20PM%20(2).jpeg",
    "v": [
      [
        1678973,
        "Blanco",
        "41"
      ],
      [
        1678972,
        "Negro/Blanco",
        "40"
      ],
      [
        1678978,
        "Negro/Blanco",
        "43"
      ],
      [
        1678971,
        "Blanco",
        "40"
      ],
      [
        1678970,
        "Negro/Blanco",
        "39"
      ],
      [
        1678969,
        "Blanco",
        "39"
      ],
      [
        1678968,
        "Negro/Blanco",
        "38"
      ],
      [
        1678967,
        "Blanco",
        "38"
      ],
      [
        1678966,
        "Negro/Blanco",
        "37"
      ],
      [
        1678965,
        "Blanco",
        "37"
      ],
      [
        1678964,
        "Negro/Blanco",
        "36"
      ],
      [
        1678962,
        "Negro/Blanco",
        "35"
      ],
      [
        1678961,
        "Blanco",
        "35"
      ],
      [
        1678963,
        "Blanco",
        "36"
      ],
      [
        1678977,
        "Blanco",
        "43"
      ],
      [
        1678976,
        "Negro/Blanco",
        "42"
      ],
      [
        1678975,
        "Blanco",
        "42"
      ],
      [
        1678974,
        "Negro/Blanco",
        "41"
      ]
    ]
  },
  {
    "id": 2164185,
    "n": "Tenis Casual 018",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 90,
    "sold": 180,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2164185/1780255286WhatsApp%20Image%202026-05-29%20at%207.02.12%20PM%20(4).jpeg",
    "v": [
      [
        2181390,
        "Negro Fucsia",
        "35"
      ],
      [
        2181391,
        "Negro Fucsia",
        "36"
      ],
      [
        2181392,
        "Negro Fucsia",
        "37"
      ],
      [
        2181393,
        "Negro Fucsia",
        "38"
      ],
      [
        2181394,
        "Negro Fucsia",
        "39"
      ],
      [
        2181395,
        "Negro Fucsia",
        "40"
      ],
      [
        2181396,
        "Negro Rojo",
        "35"
      ],
      [
        2181397,
        "Negro Rojo",
        "36"
      ],
      [
        2181398,
        "Negro Rojo",
        "37"
      ],
      [
        2181399,
        "Negro Rojo",
        "38"
      ],
      [
        2181400,
        "Negro Rojo",
        "39"
      ],
      [
        2181401,
        "Negro Rojo",
        "40"
      ],
      [
        2181402,
        "Negro Azul",
        "35"
      ],
      [
        2181403,
        "Negro Azul",
        "36"
      ],
      [
        2181404,
        "Negro Azul",
        "37"
      ],
      [
        2181405,
        "Negro Azul",
        "38"
      ],
      [
        2181406,
        "Negro Azul",
        "39"
      ],
      [
        2181407,
        "Negro Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2214572,
    "n": "Tenis Prime 019",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 77,
    "sold": 247,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2214572/1785259255403462.png",
    "v": [
      [
        2285354,
        "Blanco",
        "43"
      ],
      [
        2285337,
        "Negro",
        "35"
      ],
      [
        2285338,
        "Negro",
        "36"
      ],
      [
        2285339,
        "Negro",
        "37"
      ],
      [
        2285340,
        "Negro",
        "38"
      ],
      [
        2285341,
        "Negro",
        "39"
      ],
      [
        2285343,
        "Negro",
        "41"
      ],
      [
        2285344,
        "Negro",
        "42"
      ],
      [
        2285345,
        "Negro",
        "43"
      ],
      [
        2285346,
        "Blanco",
        "35"
      ],
      [
        2285347,
        "Blanco",
        "36"
      ],
      [
        2285348,
        "Blanco",
        "37"
      ],
      [
        2285349,
        "Blanco",
        "38"
      ],
      [
        2285350,
        "Blanco",
        "39"
      ],
      [
        2285351,
        "Blanco",
        "40"
      ],
      [
        2285352,
        "Blanco",
        "41"
      ],
      [
        2285353,
        "Blanco",
        "42"
      ],
      [
        2285355,
        "Gris",
        "35"
      ],
      [
        2285356,
        "Gris",
        "36"
      ],
      [
        2285357,
        "Gris",
        "37"
      ],
      [
        2285358,
        "Gris",
        "38"
      ],
      [
        2285359,
        "Gris",
        "39"
      ],
      [
        2285360,
        "Gris",
        "40"
      ],
      [
        2285361,
        "Gris",
        "41"
      ],
      [
        2285342,
        "Negro",
        "40"
      ],
      [
        2285363,
        "Gris",
        "43"
      ],
      [
        2298313,
        "Rosa",
        "35"
      ],
      [
        2298314,
        "Rosa",
        "36"
      ],
      [
        2298315,
        "Rosa",
        "37"
      ],
      [
        2298316,
        "Rosa",
        "38"
      ],
      [
        2298317,
        "Rosa",
        "39"
      ],
      [
        2298318,
        "Rosa",
        "40"
      ],
      [
        2298319,
        "Azul Marino",
        "35"
      ],
      [
        2298320,
        "Azul Marino",
        "36"
      ],
      [
        2298321,
        "Azul Marino",
        "37"
      ],
      [
        2298322,
        "Azul Marino",
        "38"
      ],
      [
        2298323,
        "Azul Marino",
        "39"
      ],
      [
        2298324,
        "Azul Marino",
        "40"
      ],
      [
        2298325,
        "Azul Marino",
        "41"
      ],
      [
        2298326,
        "Azul Marino",
        "42"
      ],
      [
        2298327,
        "Azul Marino",
        "43"
      ],
      [
        2298328,
        "Crema",
        "35"
      ],
      [
        2298329,
        "Crema",
        "36"
      ],
      [
        2298330,
        "Crema",
        "37"
      ],
      [
        2298331,
        "Crema",
        "38"
      ],
      [
        2298332,
        "Crema",
        "39"
      ],
      [
        2298333,
        "Crema",
        "40"
      ],
      [
        2298334,
        "Crema",
        "41"
      ],
      [
        2298335,
        "Crema",
        "42"
      ],
      [
        2298336,
        "Crema",
        "43"
      ],
      [
        2285362,
        "Gris",
        "42"
      ]
    ]
  },
  {
    "id": 1885771,
    "n": "Tenis Active 020",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 136,
    "sold": 226,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885771/17535501801746636841Alexander%20Mqueen%20-%20(2).jpg",
    "v": [
      [
        1639116,
        "NEGRO BLANCO",
        "36"
      ],
      [
        1639129,
        "NEGRO",
        "40"
      ],
      [
        1639131,
        "NEGRO",
        "42"
      ],
      [
        1639109,
        "BLANCO NEGRO",
        "38"
      ],
      [
        1639110,
        "BLANCO NEGRO",
        "39"
      ],
      [
        1639111,
        "BLANCO NEGRO",
        "40"
      ],
      [
        1639112,
        "BLANCO NEGRO",
        "41"
      ],
      [
        1639113,
        "BLANCO NEGRO",
        "42"
      ],
      [
        1639115,
        "NEGRO BLANCO",
        "35"
      ],
      [
        1639141,
        "BLANCO",
        "43"
      ],
      [
        1639124,
        "NEGRO",
        "35"
      ],
      [
        1639117,
        "NEGRO BLANCO",
        "37"
      ],
      [
        1639118,
        "NEGRO BLANCO",
        "38"
      ],
      [
        1639120,
        "NEGRO BLANCO",
        "40"
      ],
      [
        1639121,
        "NEGRO BLANCO",
        "41"
      ],
      [
        1639125,
        "NEGRO",
        "36"
      ],
      [
        1639126,
        "NEGRO",
        "37"
      ],
      [
        1639127,
        "NEGRO",
        "38"
      ],
      [
        1639128,
        "NEGRO",
        "39"
      ],
      [
        1639138,
        "BLANCO",
        "40"
      ],
      [
        1639139,
        "BLANCO",
        "41"
      ],
      [
        1639106,
        "BLANCO NEGRO",
        "35"
      ],
      [
        1639107,
        "BLANCO NEGRO",
        "36"
      ],
      [
        1639108,
        "BLANCO NEGRO",
        "37"
      ],
      [
        1639114,
        "BLANCO NEGRO",
        "43"
      ],
      [
        1639119,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1639122,
        "NEGRO BLANCO",
        "42"
      ],
      [
        1639123,
        "NEGRO BLANCO",
        "43"
      ],
      [
        1639133,
        "BLANCO",
        "35"
      ],
      [
        1639135,
        "BLANCO",
        "37"
      ],
      [
        1639140,
        "BLANCO",
        "42"
      ],
      [
        1639130,
        "NEGRO",
        "41"
      ],
      [
        1639132,
        "NEGRO",
        "43"
      ],
      [
        1639137,
        "BLANCO",
        "39"
      ],
      [
        1639136,
        "BLANCO",
        "38"
      ],
      [
        1639134,
        "BLANCO",
        "36"
      ]
    ]
  },
  {
    "id": 2051468,
    "n": "Tenis Urban 021",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 53,
    "sold": 343,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2051468/1769402630WhatsApp%20Image%202026-01-25%20at%208.59.06%20PM.jpeg",
    "v": [
      [
        1953527,
        "",
        "35"
      ],
      [
        1953528,
        "",
        "36"
      ],
      [
        1953529,
        "",
        "37"
      ],
      [
        1953530,
        "",
        "38"
      ],
      [
        1953531,
        "",
        "39"
      ],
      [
        1953532,
        "",
        "40"
      ],
      [
        1953533,
        "",
        "41"
      ],
      [
        1953534,
        "",
        "42"
      ],
      [
        1953535,
        "",
        "43"
      ]
    ]
  },
  {
    "id": 2082483,
    "n": "Tenis Classic 022",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 108,
    "sold": 418,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2082483/bb77a110-de96-418c-a4e9-828faecbf86c.png",
    "v": [
      [
        1990710,
        "Negro Líneas Blancas",
        "40"
      ],
      [
        1990665,
        "Todo Negro",
        "40"
      ],
      [
        1990666,
        "Todo Negro",
        "41"
      ],
      [
        1990663,
        "Todo Negro",
        "38"
      ],
      [
        1990664,
        "Todo Negro",
        "39"
      ],
      [
        1990667,
        "Todo Negro",
        "42"
      ],
      [
        1990676,
        "Blanco Celeste",
        "42"
      ],
      [
        1990711,
        "Negro Líneas Blancas",
        "41"
      ],
      [
        1990712,
        "Negro Líneas Blancas",
        "42"
      ],
      [
        1990713,
        "Negro Líneas Blancas",
        "43"
      ],
      [
        1990651,
        "Negro Blanco",
        "35"
      ],
      [
        1990652,
        "Negro Blanco",
        "36"
      ],
      [
        1990653,
        "Negro Blanco",
        "37"
      ],
      [
        1990679,
        "Blanco Amarillo",
        "36"
      ],
      [
        1990684,
        "Blanco Amarillo",
        "41"
      ],
      [
        1990668,
        "Todo Negro",
        "43"
      ],
      [
        1990669,
        "Blanco Celeste",
        "35"
      ],
      [
        1990670,
        "Blanco Celeste",
        "36"
      ],
      [
        1990671,
        "Blanco Celeste",
        "37"
      ],
      [
        1990672,
        "Blanco Celeste",
        "38"
      ],
      [
        1990673,
        "Blanco Celeste",
        "39"
      ],
      [
        1990674,
        "Blanco Celeste",
        "40"
      ],
      [
        1990675,
        "Blanco Celeste",
        "41"
      ],
      [
        1990677,
        "Blanco Celeste",
        "43"
      ],
      [
        1990678,
        "Blanco Amarillo",
        "35"
      ],
      [
        1990680,
        "Blanco Amarillo",
        "37"
      ],
      [
        1990681,
        "Blanco Amarillo",
        "38"
      ],
      [
        1990682,
        "Blanco Amarillo",
        "39"
      ],
      [
        1990683,
        "Blanco Amarillo",
        "40"
      ],
      [
        1990685,
        "Blanco Amarillo",
        "42"
      ],
      [
        1990686,
        "Blanco Amarillo",
        "43"
      ],
      [
        1990687,
        "Blanco Crema",
        "35"
      ],
      [
        1990688,
        "Blanco Crema",
        "36"
      ],
      [
        1990689,
        "Blanco Crema",
        "37"
      ],
      [
        1990690,
        "Blanco Crema",
        "38"
      ],
      [
        1990691,
        "Blanco Crema",
        "39"
      ],
      [
        1990692,
        "Blanco Crema",
        "40"
      ],
      [
        1990693,
        "Blanco Crema",
        "41"
      ],
      [
        1990694,
        "Blanco Crema",
        "42"
      ],
      [
        1990695,
        "Blanco Crema",
        "43"
      ],
      [
        1990696,
        "Turquesa Amarillo Naranja",
        "35"
      ],
      [
        1990697,
        "Turquesa Amarillo Naranja",
        "36"
      ],
      [
        1990698,
        "Turquesa Amarillo Naranja",
        "37"
      ],
      [
        1990699,
        "Turquesa Amarillo Naranja",
        "38"
      ],
      [
        1990700,
        "Turquesa Amarillo Naranja",
        "39"
      ],
      [
        1990701,
        "Turquesa Amarillo Naranja",
        "40"
      ],
      [
        1990702,
        "Turquesa Amarillo Naranja",
        "41"
      ],
      [
        1990703,
        "Turquesa Amarillo Naranja",
        "42"
      ],
      [
        1990704,
        "Turquesa Amarillo Naranja",
        "43"
      ],
      [
        1990705,
        "Negro Líneas Blancas",
        "35"
      ],
      [
        1990706,
        "Negro Líneas Blancas",
        "36"
      ],
      [
        1990707,
        "Negro Líneas Blancas",
        "37"
      ],
      [
        1990708,
        "Negro Líneas Blancas",
        "38"
      ],
      [
        1990709,
        "Negro Líneas Blancas",
        "39"
      ],
      [
        1990654,
        "Negro Blanco",
        "38"
      ],
      [
        1990655,
        "Negro Blanco",
        "39"
      ],
      [
        1990656,
        "Negro Blanco",
        "40"
      ],
      [
        1990657,
        "Negro Blanco",
        "41"
      ],
      [
        1990658,
        "Negro Blanco",
        "42"
      ],
      [
        1990659,
        "Negro Blanco",
        "43"
      ],
      [
        1990660,
        "Todo Negro",
        "35"
      ],
      [
        1990661,
        "Todo Negro",
        "36"
      ],
      [
        1990662,
        "Todo Negro",
        "37"
      ]
    ]
  },
  {
    "id": 2232094,
    "n": "Tenis Street 023",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 139,
    "sold": 429,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2232094/67417892-58d4-4417-afcc-149b281f633d.jpg",
    "v": [
      [
        2319314,
        "Marron Claro",
        "37"
      ],
      [
        2319321,
        "Marron Oscuro",
        "37"
      ],
      [
        2319318,
        "Marron Claro",
        "41"
      ],
      [
        2319309,
        "Negro",
        "39"
      ],
      [
        2319310,
        "Negro",
        "40"
      ],
      [
        2319311,
        "Negro",
        "41"
      ],
      [
        2319312,
        "Negro",
        "42"
      ],
      [
        2319328,
        "Azul Marino",
        "37"
      ],
      [
        2319329,
        "Azul Marino",
        "38"
      ],
      [
        2319330,
        "Azul Marino",
        "39"
      ],
      [
        2319331,
        "Azul Marino",
        "40"
      ],
      [
        2319332,
        "Azul Marino",
        "41"
      ],
      [
        2319334,
        "Azul Marino",
        "43"
      ],
      [
        2319307,
        "Negro",
        "37"
      ],
      [
        2319308,
        "Negro",
        "38"
      ],
      [
        2319320,
        "Marron Claro",
        "43"
      ],
      [
        2319313,
        "Negro",
        "43"
      ],
      [
        2319315,
        "Marron Claro",
        "38"
      ],
      [
        2319316,
        "Marron Claro",
        "39"
      ],
      [
        2319317,
        "Marron Claro",
        "40"
      ],
      [
        2319319,
        "Marron Claro",
        "42"
      ],
      [
        2319322,
        "Marron Oscuro",
        "38"
      ],
      [
        2319323,
        "Marron Oscuro",
        "39"
      ],
      [
        2319324,
        "Marron Oscuro",
        "40"
      ],
      [
        2319325,
        "Marron Oscuro",
        "41"
      ],
      [
        2319327,
        "Marron Oscuro",
        "43"
      ],
      [
        2319333,
        "Azul Marino",
        "42"
      ],
      [
        2319326,
        "Marron Oscuro",
        "42"
      ]
    ]
  },
  {
    "id": 2215126,
    "n": "Bota Sport 024",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 91,
    "sold": 121,
    "stock": 7,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2215126/1785292862405840.jpg",
    "v": [
      [
        2286618,
        "Crema Caqui",
        "40"
      ],
      [
        2286621,
        "Crema Caqui",
        "43"
      ],
      [
        2286622,
        "Naranja",
        "37"
      ],
      [
        2286589,
        "Todo Negro",
        "39"
      ],
      [
        2286590,
        "Todo Negro",
        "40"
      ],
      [
        2286601,
        "Negro Gris",
        "37"
      ],
      [
        2286595,
        "Negro Marron",
        "38"
      ],
      [
        2286596,
        "Negro Marron",
        "39"
      ],
      [
        2286597,
        "Negro Marron",
        "40"
      ],
      [
        2286603,
        "Negro Gris",
        "39"
      ],
      [
        2286604,
        "Negro Gris",
        "40"
      ],
      [
        2286605,
        "Negro Gris",
        "41"
      ],
      [
        2286606,
        "Negro Gris",
        "42"
      ],
      [
        2286607,
        "Negro Gris",
        "43"
      ],
      [
        2286608,
        "Negro Verde Oliva",
        "37"
      ],
      [
        2286609,
        "Negro Verde Oliva",
        "38"
      ],
      [
        2286610,
        "Negro Verde Oliva",
        "39"
      ],
      [
        2286611,
        "Negro Verde Oliva",
        "40"
      ],
      [
        2286612,
        "Negro Verde Oliva",
        "41"
      ],
      [
        2286613,
        "Negro Verde Oliva",
        "42"
      ],
      [
        2286614,
        "Negro Verde Oliva",
        "43"
      ],
      [
        2286615,
        "Crema Caqui",
        "37"
      ],
      [
        2286616,
        "Crema Caqui",
        "38"
      ],
      [
        2286617,
        "Crema Caqui",
        "39"
      ],
      [
        2286619,
        "Crema Caqui",
        "41"
      ],
      [
        2286620,
        "Crema Caqui",
        "42"
      ],
      [
        2286623,
        "Naranja",
        "38"
      ],
      [
        2286624,
        "Naranja",
        "39"
      ],
      [
        2286625,
        "Naranja",
        "40"
      ],
      [
        2286626,
        "Naranja",
        "41"
      ],
      [
        2286627,
        "Naranja",
        "42"
      ],
      [
        2286628,
        "Naranja",
        "43"
      ],
      [
        2286587,
        "Todo Negro",
        "37"
      ],
      [
        2286588,
        "Todo Negro",
        "38"
      ],
      [
        2286591,
        "Todo Negro",
        "41"
      ],
      [
        2286592,
        "Todo Negro",
        "42"
      ],
      [
        2286593,
        "Todo Negro",
        "43"
      ],
      [
        2286594,
        "Negro Marron",
        "37"
      ],
      [
        2286598,
        "Negro Marron",
        "41"
      ],
      [
        2286599,
        "Negro Marron",
        "42"
      ],
      [
        2286600,
        "Negro Marron",
        "43"
      ],
      [
        2286602,
        "Negro Gris",
        "38"
      ]
    ]
  },
  {
    "id": 2282703,
    "n": "Tenis Retro 025",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 168,
    "sold": 378,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2282703/6b5560c3-e816-4b70-9b5b-f962bf37b2f6.png",
    "v": [
      [
        2398832,
        "Blanco Rojo",
        "35"
      ],
      [
        2398833,
        "Blanco Rojo",
        "36"
      ],
      [
        2398834,
        "Blanco Rojo",
        "37"
      ],
      [
        2398835,
        "Blanco Rojo",
        "38"
      ],
      [
        2398836,
        "Blanco Rojo",
        "39"
      ],
      [
        2398837,
        "Blanco Rojo",
        "40"
      ],
      [
        2398838,
        "Blanco Rojo",
        "41"
      ],
      [
        2398839,
        "Blanco Rojo",
        "42"
      ],
      [
        2398840,
        "Blanco Rojo",
        "43"
      ],
      [
        2398841,
        "Blanco Negro",
        "35"
      ],
      [
        2398842,
        "Blanco Negro",
        "36"
      ],
      [
        2398843,
        "Blanco Negro",
        "37"
      ],
      [
        2398844,
        "Blanco Negro",
        "38"
      ],
      [
        2398845,
        "Blanco Negro",
        "39"
      ],
      [
        2398846,
        "Blanco Negro",
        "40"
      ],
      [
        2398847,
        "Blanco Negro",
        "41"
      ],
      [
        2398848,
        "Blanco Negro",
        "42"
      ],
      [
        2398849,
        "Blanco Negro",
        "43"
      ],
      [
        2398850,
        "Blanco Gris",
        "35"
      ],
      [
        2398851,
        "Blanco Gris",
        "36"
      ],
      [
        2398852,
        "Blanco Gris",
        "37"
      ],
      [
        2398853,
        "Blanco Gris",
        "38"
      ],
      [
        2398854,
        "Blanco Gris",
        "39"
      ],
      [
        2398855,
        "Blanco Gris",
        "40"
      ],
      [
        2398856,
        "Blanco Gris",
        "41"
      ],
      [
        2398857,
        "Blanco Gris",
        "42"
      ],
      [
        2398858,
        "Blanco Gris",
        "43"
      ],
      [
        2398859,
        "Blanco Marrón Oscuro",
        "35"
      ],
      [
        2398860,
        "Blanco Marrón Oscuro",
        "36"
      ],
      [
        2398861,
        "Blanco Marrón Oscuro",
        "37"
      ],
      [
        2398862,
        "Blanco Marrón Oscuro",
        "38"
      ],
      [
        2398863,
        "Blanco Marrón Oscuro",
        "39"
      ],
      [
        2398864,
        "Blanco Marrón Oscuro",
        "40"
      ],
      [
        2398865,
        "Blanco Marrón Oscuro",
        "41"
      ],
      [
        2398866,
        "Blanco Marrón Oscuro",
        "42"
      ],
      [
        2398867,
        "Blanco Marrón Oscuro",
        "43"
      ],
      [
        2398868,
        "Blanco Marron Claro",
        "35"
      ],
      [
        2398869,
        "Blanco Marron Claro",
        "36"
      ],
      [
        2398870,
        "Blanco Marron Claro",
        "37"
      ],
      [
        2398871,
        "Blanco Marron Claro",
        "38"
      ],
      [
        2398872,
        "Blanco Marron Claro",
        "39"
      ],
      [
        2398873,
        "Blanco Marron Claro",
        "40"
      ],
      [
        2398874,
        "Blanco Marron Claro",
        "41"
      ],
      [
        2398875,
        "Blanco Marron Claro",
        "42"
      ],
      [
        2398876,
        "Blanco Marron Claro",
        "43"
      ]
    ]
  },
  {
    "id": 2113607,
    "n": "Tenis Flex 026",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 92,
    "sold": 262,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2113607/1b6a3240-a144-4d86-8629-cbc1192f9ebd.png",
    "v": [
      [
        2061836,
        "Todo Negro",
        "39"
      ],
      [
        2061802,
        "Azul",
        "37"
      ],
      [
        2061817,
        "Negro Blanco",
        "36"
      ],
      [
        2061837,
        "Todo Negro",
        "40"
      ],
      [
        2061803,
        "Azul",
        "38"
      ],
      [
        2061810,
        "Negro Rojo",
        "37"
      ],
      [
        2061840,
        "Todo Negro",
        "43"
      ],
      [
        2061815,
        "Negro Rojo",
        "42"
      ],
      [
        2061811,
        "Negro Rojo",
        "38"
      ],
      [
        2061812,
        "Negro Rojo",
        "39"
      ],
      [
        2061813,
        "Negro Rojo",
        "40"
      ],
      [
        2061816,
        "Negro Rojo",
        "43"
      ],
      [
        2061818,
        "Negro Blanco",
        "37"
      ],
      [
        2061839,
        "Todo Negro",
        "42"
      ],
      [
        2061801,
        "Azul",
        "36"
      ],
      [
        2061819,
        "Negro Blanco",
        "38"
      ],
      [
        2061821,
        "Negro Blanco",
        "40"
      ],
      [
        2061822,
        "Negro Blanco",
        "41"
      ],
      [
        2061823,
        "Negro Blanco",
        "42"
      ],
      [
        2061824,
        "Negro Blanco",
        "43"
      ],
      [
        2061825,
        "Negro Dorado",
        "36"
      ],
      [
        2061826,
        "Negro Dorado",
        "37"
      ],
      [
        2061827,
        "Negro Dorado",
        "38"
      ],
      [
        2061828,
        "Negro Dorado",
        "39"
      ],
      [
        2061829,
        "Negro Dorado",
        "40"
      ],
      [
        2061830,
        "Negro Dorado",
        "41"
      ],
      [
        2061831,
        "Negro Dorado",
        "42"
      ],
      [
        2061834,
        "Todo Negro",
        "37"
      ],
      [
        2061835,
        "Todo Negro",
        "38"
      ],
      [
        2061838,
        "Todo Negro",
        "41"
      ],
      [
        2061804,
        "Azul",
        "39"
      ],
      [
        2061805,
        "Azul",
        "40"
      ],
      [
        2061806,
        "Azul",
        "41"
      ],
      [
        2061807,
        "Azul",
        "42"
      ],
      [
        2061808,
        "Azul",
        "43"
      ],
      [
        2061809,
        "Negro Rojo",
        "36"
      ],
      [
        2061814,
        "Negro Rojo",
        "41"
      ],
      [
        2061820,
        "Negro Blanco",
        "39"
      ],
      [
        2061832,
        "Negro Dorado",
        "43"
      ],
      [
        2061833,
        "Todo Negro",
        "36"
      ]
    ]
  },
  {
    "id": 1804300,
    "n": "Tenis Runner 027 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 205,
    "sold": 355,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1804300/1748442842GIF%20ORBITE%20ONE.gif",
    "v": [
      [
        1477397,
        "GRIS",
        "38"
      ],
      [
        1477398,
        "GRIS",
        "39"
      ],
      [
        1477399,
        "GRIS",
        "40"
      ],
      [
        1477396,
        "GRIS",
        "37"
      ],
      [
        1477395,
        "GRIS",
        "36"
      ],
      [
        1477394,
        "BEIGE",
        "40"
      ],
      [
        1477393,
        "BEIGE",
        "39"
      ],
      [
        1477392,
        "BEIGE",
        "38"
      ],
      [
        1477391,
        "BEIGE",
        "37"
      ],
      [
        1477390,
        "BEIGE",
        "36"
      ],
      [
        1477389,
        "BLANCO",
        "40"
      ],
      [
        1477388,
        "BLANCO",
        "39"
      ],
      [
        1477387,
        "BLANCO",
        "38"
      ],
      [
        1477386,
        "BLANCO",
        "37"
      ],
      [
        1477385,
        "BLANCO",
        "36"
      ],
      [
        1477384,
        "NEGRO",
        "40"
      ],
      [
        1477383,
        "NEGRO",
        "39"
      ],
      [
        1477382,
        "NEGRO",
        "38"
      ],
      [
        1477381,
        "NEGRO",
        "37"
      ],
      [
        1477380,
        "NEGRO",
        "36"
      ]
    ]
  },
  {
    "id": 453690,
    "n": "Tenis Casual 028 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 135,
    "sold": 225,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/453690/1748462080GIF%20YRX.gif",
    "v": [
      [
        641937,
        "BLANCO",
        "44"
      ],
      [
        641938,
        "AZUL",
        "44"
      ],
      [
        308801,
        "AZUL",
        "43"
      ],
      [
        308804,
        "BLANCO",
        "40"
      ],
      [
        308806,
        "BLANCO",
        "42"
      ],
      [
        308799,
        "AZUL",
        "41"
      ],
      [
        308797,
        "AZUL",
        "39"
      ],
      [
        308805,
        "BLANCO",
        "41"
      ],
      [
        308807,
        "BLANCO",
        "43"
      ],
      [
        308800,
        "AZUL",
        "42"
      ],
      [
        308798,
        "AZUL",
        "40"
      ]
    ]
  },
  {
    "id": 1841817,
    "n": "Tenis Prime 029 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 102,
    "sold": 132,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1841817/17492413331738122484WhatsApp%20Image%202025-01-28%20at%2022.37.46%20(4).jpeg",
    "v": [
      [
        1544643,
        "Blanco",
        "38"
      ],
      [
        1544642,
        "Marron",
        "38"
      ],
      [
        1544638,
        "Marron",
        "37"
      ],
      [
        1544636,
        "Azul Marino",
        "37"
      ],
      [
        1544659,
        "Blanco",
        "43"
      ],
      [
        1544660,
        "Azul Marino",
        "41"
      ],
      [
        1544661,
        "Negro",
        "41"
      ],
      [
        1544662,
        "Marron",
        "41"
      ],
      [
        1544663,
        "Blanco",
        "41"
      ],
      [
        1544656,
        "Azul Marino",
        "43"
      ],
      [
        1544650,
        "Marron",
        "40"
      ],
      [
        1544651,
        "Blanco",
        "40"
      ],
      [
        1544652,
        "Azul Marino",
        "42"
      ],
      [
        1544653,
        "Negro",
        "42"
      ],
      [
        1544654,
        "Marron",
        "42"
      ],
      [
        1544655,
        "Blanco",
        "42"
      ],
      [
        1544657,
        "Negro",
        "43"
      ],
      [
        1544658,
        "Marron",
        "43"
      ],
      [
        1544649,
        "Negro",
        "40"
      ],
      [
        1544648,
        "Azul Marino",
        "40"
      ],
      [
        1544647,
        "Blanco",
        "39"
      ],
      [
        1544646,
        "Marron",
        "39"
      ],
      [
        1544645,
        "Negro",
        "39"
      ],
      [
        1544644,
        "Azul Marino",
        "39"
      ],
      [
        1544641,
        "Negro",
        "38"
      ],
      [
        1544640,
        "Azul Marino",
        "38"
      ],
      [
        1544639,
        "Blanco",
        "37"
      ],
      [
        1544637,
        "Negro",
        "37"
      ]
    ]
  },
  {
    "id": 1994706,
    "n": "Tenis Active 030 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 171,
    "sold": 361,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1994706/1763020296WhatsApp%20Image%202025-08-18%20at%2011.27.21%20PM.jpeg",
    "v": [
      [
        1848207,
        "Blanco",
        "35"
      ],
      [
        1848208,
        "Negro",
        "35"
      ],
      [
        1848209,
        "Blanco",
        "36"
      ],
      [
        1848210,
        "Negro",
        "36"
      ],
      [
        1848211,
        "Blanco",
        "37"
      ],
      [
        1848212,
        "Negro",
        "37"
      ],
      [
        1848213,
        "Blanco",
        "38"
      ],
      [
        1848214,
        "Negro",
        "38"
      ],
      [
        1848215,
        "Blanco",
        "39"
      ],
      [
        1848216,
        "Negro",
        "39"
      ],
      [
        1848217,
        "Blanco",
        "40"
      ],
      [
        1848218,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2302660,
    "n": "Tenis Urban 031",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 145,
    "sold": 275,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2302660/7b53c055-c356-40d4-aa91-a41c9723f26b.png",
    "v": [
      [
        2433946,
        "Blanco",
        "35"
      ],
      [
        2433947,
        "Blanco",
        "36"
      ],
      [
        2433948,
        "Blanco",
        "37"
      ],
      [
        2433949,
        "Blanco",
        "38"
      ],
      [
        2433950,
        "Blanco",
        "39"
      ],
      [
        2433951,
        "Blanco",
        "40"
      ],
      [
        2433952,
        "Blanco",
        "41"
      ],
      [
        2433953,
        "Blanco",
        "42"
      ],
      [
        2433954,
        "Blanco",
        "43"
      ],
      [
        2433955,
        "Gris",
        "35"
      ],
      [
        2433956,
        "Gris",
        "36"
      ],
      [
        2433957,
        "Gris",
        "37"
      ],
      [
        2433958,
        "Gris",
        "38"
      ],
      [
        2433959,
        "Gris",
        "39"
      ],
      [
        2433960,
        "Gris",
        "40"
      ],
      [
        2433961,
        "Gris",
        "41"
      ],
      [
        2433962,
        "Gris",
        "42"
      ],
      [
        2433963,
        "Gris",
        "43"
      ],
      [
        2433964,
        "Todo Negro",
        "35"
      ],
      [
        2433965,
        "Todo Negro",
        "36"
      ],
      [
        2433966,
        "Todo Negro",
        "37"
      ],
      [
        2433967,
        "Todo Negro",
        "38"
      ],
      [
        2433968,
        "Todo Negro",
        "39"
      ],
      [
        2433969,
        "Todo Negro",
        "40"
      ],
      [
        2433970,
        "Todo Negro",
        "41"
      ],
      [
        2433971,
        "Todo Negro",
        "42"
      ],
      [
        2433972,
        "Todo Negro",
        "43"
      ],
      [
        2433973,
        "Negro Blanco",
        "35"
      ],
      [
        2433974,
        "Negro Blanco",
        "36"
      ],
      [
        2433975,
        "Negro Blanco",
        "37"
      ],
      [
        2433976,
        "Negro Blanco",
        "38"
      ],
      [
        2433977,
        "Negro Blanco",
        "39"
      ],
      [
        2433978,
        "Negro Blanco",
        "40"
      ],
      [
        2433979,
        "Negro Blanco",
        "41"
      ],
      [
        2433980,
        "Negro Blanco",
        "42"
      ],
      [
        2433981,
        "Negro Blanco",
        "43"
      ]
    ]
  },
  {
    "id": 2302673,
    "n": "Tenis Classic 032",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.8,
    "rev": 158,
    "sold": 288,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2302673/e68c9b4b-efbf-4940-9128-dbe0295dd119.png",
    "v": [
      [
        2434015,
        "Blanco Azul",
        "35"
      ],
      [
        2434016,
        "Blanco Azul",
        "36"
      ],
      [
        2434017,
        "Blanco Azul",
        "37"
      ],
      [
        2434018,
        "Blanco Azul",
        "38"
      ],
      [
        2434019,
        "Blanco Azul",
        "39"
      ],
      [
        2434020,
        "Blanco Azul",
        "40"
      ],
      [
        2434021,
        "Blanco Azul",
        "41"
      ],
      [
        2434022,
        "Blanco Azul",
        "42"
      ],
      [
        2434023,
        "Blanco Azul",
        "43"
      ],
      [
        2434024,
        "Blanco Verde",
        "35"
      ],
      [
        2434025,
        "Blanco Verde",
        "36"
      ],
      [
        2434026,
        "Blanco Verde",
        "37"
      ],
      [
        2434027,
        "Blanco Verde",
        "38"
      ],
      [
        2434028,
        "Blanco Verde",
        "39"
      ],
      [
        2434029,
        "Blanco Verde",
        "40"
      ],
      [
        2434030,
        "Blanco Verde",
        "41"
      ],
      [
        2434031,
        "Blanco Verde",
        "42"
      ],
      [
        2434032,
        "Blanco Verde",
        "43"
      ],
      [
        2434033,
        "Blanco Naranja",
        "35"
      ],
      [
        2434034,
        "Blanco Naranja",
        "36"
      ],
      [
        2434035,
        "Blanco Naranja",
        "37"
      ],
      [
        2434036,
        "Blanco Naranja",
        "38"
      ],
      [
        2434037,
        "Blanco Naranja",
        "39"
      ],
      [
        2434038,
        "Blanco Naranja",
        "40"
      ],
      [
        2434039,
        "Blanco Naranja",
        "41"
      ],
      [
        2434040,
        "Blanco Naranja",
        "42"
      ],
      [
        2434041,
        "Blanco Naranja",
        "43"
      ],
      [
        2434042,
        "Negro",
        "35"
      ],
      [
        2434043,
        "Negro",
        "36"
      ],
      [
        2434044,
        "Negro",
        "37"
      ],
      [
        2434045,
        "Negro",
        "38"
      ],
      [
        2434046,
        "Negro",
        "39"
      ],
      [
        2434047,
        "Negro",
        "40"
      ],
      [
        2434048,
        "Negro",
        "41"
      ],
      [
        2434049,
        "Negro",
        "42"
      ],
      [
        2434050,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 1824639,
    "n": "Tenis Street 033 Dama",
    "g": "m",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 204,
    "sold": 294,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1824639/1748457972GIF%20AIR%20MAX%20DN%20MUJER.gif",
    "v": [
      [
        1504819,
        "BLANCO",
        "36"
      ],
      [
        1504820,
        "MARFIL",
        "36"
      ],
      [
        1504818,
        "NEGRO",
        "36"
      ],
      [
        1504817,
        "MARFIL",
        "35"
      ],
      [
        1504815,
        "NEGRO",
        "35"
      ],
      [
        1504816,
        "BLANCO",
        "35"
      ],
      [
        1504821,
        "NEGRO",
        "37"
      ],
      [
        1504822,
        "BLANCO",
        "37"
      ],
      [
        1504823,
        "MARFIL",
        "37"
      ],
      [
        1504824,
        "NEGRO",
        "38"
      ],
      [
        1504825,
        "BLANCO",
        "38"
      ],
      [
        1504826,
        "MARFIL",
        "38"
      ],
      [
        1504830,
        "NEGRO",
        "40"
      ],
      [
        1504828,
        "BLANCO",
        "39"
      ],
      [
        1504827,
        "NEGRO",
        "39"
      ],
      [
        1504829,
        "MARFIL",
        "39"
      ],
      [
        1504832,
        "MARFIL",
        "40"
      ],
      [
        1504831,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 2031806,
    "n": "Tenis Sport 034",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 191,
    "sold": 401,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2031806/1772426421bba2ea5f-6d6a-43c7-8b50-ab479f51d830.jpg",
    "v": [
      [
        1896669,
        "",
        "42"
      ],
      [
        1896664,
        "",
        "37"
      ],
      [
        1896665,
        "",
        "38"
      ],
      [
        1896666,
        "",
        "39"
      ],
      [
        1896667,
        "",
        "40"
      ],
      [
        1896668,
        "",
        "41"
      ],
      [
        1896670,
        "",
        "43"
      ]
    ]
  },
  {
    "id": 1885616,
    "n": "Tenis Retro 035 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 161,
    "sold": 411,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885616/17535415471742585120WhatsApp%20Image%202025-03-20%20at%206.03.41%20PM%20(4).jpeg",
    "v": [
      [
        1638827,
        "BLANCO AZUL",
        "37"
      ],
      [
        1638831,
        "BLANCO AZUL",
        "41"
      ],
      [
        1638820,
        "BLANCO VERDE",
        "37"
      ],
      [
        1638821,
        "BLANCO VERDE",
        "38"
      ],
      [
        1638822,
        "BLANCO VERDE",
        "39"
      ],
      [
        1638823,
        "BLANCO VERDE",
        "40"
      ],
      [
        1638824,
        "BLANCO VERDE",
        "41"
      ],
      [
        1638828,
        "BLANCO AZUL",
        "38"
      ],
      [
        1638829,
        "BLANCO AZUL",
        "39"
      ],
      [
        1638830,
        "BLANCO AZUL",
        "40"
      ],
      [
        1638832,
        "BLANCO AZUL",
        "42"
      ],
      [
        1638833,
        "BLANCO AZUL",
        "43"
      ],
      [
        1638834,
        "GRIS",
        "37"
      ],
      [
        1638835,
        "GRIS",
        "38"
      ],
      [
        1638836,
        "GRIS",
        "39"
      ],
      [
        1638837,
        "GRIS",
        "40"
      ],
      [
        1638840,
        "GRIS",
        "43"
      ],
      [
        1638841,
        "BEIGE",
        "37"
      ],
      [
        1638842,
        "BEIGE",
        "38"
      ],
      [
        1638845,
        "BEIGE",
        "41"
      ],
      [
        1638846,
        "BEIGE",
        "42"
      ],
      [
        1638844,
        "BEIGE",
        "40"
      ],
      [
        1638826,
        "BLANCO VERDE",
        "43"
      ],
      [
        1638847,
        "BEIGE",
        "43"
      ],
      [
        1638838,
        "GRIS",
        "41"
      ],
      [
        1638839,
        "GRIS",
        "42"
      ],
      [
        1638843,
        "BEIGE",
        "39"
      ],
      [
        1638825,
        "BLANCO VERDE",
        "42"
      ]
    ]
  },
  {
    "id": 1847717,
    "n": "Tenis Flex 036 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 62,
    "sold": 252,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1847717/1749765052e09f9a01-84ec-453b-9d39-85f2421c4bdf%20(1).jpg",
    "v": [
      [
        1559322,
        "NEGRO BLANCO",
        "40"
      ],
      [
        1559316,
        "NEGRO",
        "41"
      ],
      [
        1559315,
        "NEGRO",
        "40"
      ],
      [
        1559331,
        "BEIGE",
        "42"
      ],
      [
        1559324,
        "NEGRO BLANCO",
        "42"
      ],
      [
        1559321,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1559320,
        "NEGRO BLANCO",
        "38"
      ],
      [
        1559319,
        "NEGRO BLANCO",
        "37"
      ],
      [
        1559314,
        "NEGRO",
        "39"
      ],
      [
        1559318,
        "NEGRO",
        "43"
      ],
      [
        1559313,
        "NEGRO",
        "38"
      ],
      [
        1559312,
        "NEGRO",
        "37"
      ],
      [
        1559311,
        "BLANCO ROJO",
        "43"
      ],
      [
        1559307,
        "BLANCO ROJO",
        "39"
      ],
      [
        1559330,
        "BEIGE",
        "41"
      ],
      [
        1559332,
        "BEIGE",
        "43"
      ],
      [
        1559305,
        "BLANCO ROJO",
        "37"
      ],
      [
        1559327,
        "BEIGE",
        "38"
      ],
      [
        1559326,
        "BEIGE",
        "37"
      ],
      [
        1559328,
        "BEIGE",
        "39"
      ],
      [
        1559329,
        "BEIGE",
        "40"
      ],
      [
        1559325,
        "NEGRO BLANCO",
        "43"
      ],
      [
        1559317,
        "NEGRO",
        "42"
      ],
      [
        1559323,
        "NEGRO BLANCO",
        "41"
      ],
      [
        1559310,
        "BLANCO ROJO",
        "42"
      ],
      [
        1559306,
        "BLANCO ROJO",
        "38"
      ],
      [
        1559309,
        "BLANCO ROJO",
        "41"
      ],
      [
        1559308,
        "BLANCO ROJO",
        "40"
      ]
    ]
  },
  {
    "id": 2232057,
    "n": "Tenis Runner 037",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 102,
    "sold": 392,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2232057/edc2b7ef-19b2-4950-bf27-597dc4fd93a5.png",
    "v": [
      [
        2319161,
        "Negro Blanco",
        "37"
      ],
      [
        2319162,
        "Negro Blanco",
        "38"
      ],
      [
        2319163,
        "Negro Blanco",
        "39"
      ],
      [
        2319164,
        "Negro Blanco",
        "40"
      ],
      [
        2319165,
        "Negro Blanco",
        "41"
      ],
      [
        2319166,
        "Negro Blanco",
        "42"
      ],
      [
        2319167,
        "Negro Blanco",
        "43"
      ],
      [
        2319168,
        "Negro Rojo",
        "37"
      ],
      [
        2319169,
        "Negro Rojo",
        "38"
      ],
      [
        2319170,
        "Negro Rojo",
        "39"
      ],
      [
        2319171,
        "Negro Rojo",
        "40"
      ],
      [
        2319172,
        "Negro Rojo",
        "41"
      ],
      [
        2319173,
        "Negro Rojo",
        "42"
      ],
      [
        2319174,
        "Negro Rojo",
        "43"
      ],
      [
        2319175,
        "Blanco",
        "37"
      ],
      [
        2319176,
        "Blanco",
        "38"
      ],
      [
        2319177,
        "Blanco",
        "39"
      ],
      [
        2319178,
        "Blanco",
        "40"
      ],
      [
        2319179,
        "Blanco",
        "41"
      ],
      [
        2319180,
        "Blanco",
        "42"
      ],
      [
        2319181,
        "Blanco",
        "43"
      ],
      [
        2319182,
        "Gris",
        "37"
      ],
      [
        2319183,
        "Gris",
        "38"
      ],
      [
        2319184,
        "Gris",
        "39"
      ],
      [
        2319185,
        "Gris",
        "40"
      ],
      [
        2319186,
        "Gris",
        "41"
      ],
      [
        2319187,
        "Gris",
        "42"
      ],
      [
        2319188,
        "Gris",
        "43"
      ],
      [
        2319189,
        "Azul Marino",
        "37"
      ],
      [
        2319190,
        "Azul Marino",
        "38"
      ],
      [
        2319191,
        "Azul Marino",
        "39"
      ],
      [
        2319192,
        "Azul Marino",
        "40"
      ],
      [
        2319193,
        "Azul Marino",
        "41"
      ],
      [
        2319194,
        "Azul Marino",
        "42"
      ],
      [
        2319195,
        "Azul Marino",
        "43"
      ]
    ]
  },
  {
    "id": 2196259,
    "n": "Zapato Casual 038 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 124,
    "sold": 294,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2196259/9051ddcb-1683-41c2-842f-89e71bf210d6.jpg",
    "v": [
      [
        2252868,
        "Negro",
        "40"
      ],
      [
        2252880,
        "Crema",
        "38"
      ],
      [
        2252882,
        "Crema",
        "40"
      ],
      [
        2252892,
        "Naranja",
        "43"
      ],
      [
        2252863,
        "Verde",
        "42"
      ],
      [
        2252864,
        "Verde",
        "43"
      ],
      [
        2252865,
        "Negro",
        "37"
      ],
      [
        2252866,
        "Negro",
        "38"
      ],
      [
        2252867,
        "Negro",
        "39"
      ],
      [
        2252869,
        "Negro",
        "41"
      ],
      [
        2252870,
        "Negro",
        "42"
      ],
      [
        2252871,
        "Negro",
        "43"
      ],
      [
        2252872,
        "Marron",
        "37"
      ],
      [
        2252873,
        "Marron",
        "38"
      ],
      [
        2252875,
        "Marron",
        "40"
      ],
      [
        2252876,
        "Marron",
        "41"
      ],
      [
        2252877,
        "Marron",
        "42"
      ],
      [
        2252878,
        "Marron",
        "43"
      ],
      [
        2252879,
        "Crema",
        "37"
      ],
      [
        2252881,
        "Crema",
        "39"
      ],
      [
        2252883,
        "Crema",
        "41"
      ],
      [
        2252884,
        "Crema",
        "42"
      ],
      [
        2252885,
        "Crema",
        "43"
      ],
      [
        2252886,
        "Naranja",
        "37"
      ],
      [
        2252887,
        "Naranja",
        "38"
      ],
      [
        2252888,
        "Naranja",
        "39"
      ],
      [
        2252889,
        "Naranja",
        "40"
      ],
      [
        2252890,
        "Naranja",
        "41"
      ],
      [
        2252891,
        "Naranja",
        "42"
      ],
      [
        2252858,
        "Verde",
        "37"
      ],
      [
        2252859,
        "Verde",
        "38"
      ],
      [
        2252860,
        "Verde",
        "39"
      ],
      [
        2252861,
        "Verde",
        "40"
      ],
      [
        2252862,
        "Verde",
        "41"
      ],
      [
        2252874,
        "Marron",
        "39"
      ]
    ]
  },
  {
    "id": 2282682,
    "n": "Tenis Prime 039 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 147,
    "sold": 357,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2282682/61989b30-6405-4897-8b74-b5e67961e5b3.png",
    "v": [
      [
        2390560,
        "Negro Rojo",
        "38"
      ],
      [
        2390561,
        "Negro Rojo",
        "39"
      ],
      [
        2390562,
        "Negro Rojo",
        "40"
      ],
      [
        2390563,
        "Negro Rojo",
        "41"
      ],
      [
        2390564,
        "Negro Rojo",
        "42"
      ],
      [
        2390565,
        "Negro Rojo",
        "43"
      ],
      [
        2390566,
        "Blanco",
        "37"
      ],
      [
        2390567,
        "Blanco",
        "38"
      ],
      [
        2390568,
        "Blanco",
        "39"
      ],
      [
        2390569,
        "Blanco",
        "40"
      ],
      [
        2390570,
        "Blanco",
        "41"
      ],
      [
        2390571,
        "Blanco",
        "42"
      ],
      [
        2390572,
        "Blanco",
        "43"
      ],
      [
        2390538,
        "Blanco Verde Oliva",
        "37"
      ],
      [
        2390539,
        "Blanco Verde Oliva",
        "38"
      ],
      [
        2390540,
        "Blanco Verde Oliva",
        "39"
      ],
      [
        2390541,
        "Blanco Verde Oliva",
        "40"
      ],
      [
        2390542,
        "Blanco Verde Oliva",
        "41"
      ],
      [
        2390543,
        "Blanco Verde Oliva",
        "42"
      ],
      [
        2390544,
        "Blanco Verde Oliva",
        "43"
      ],
      [
        2390545,
        "Todo Negro",
        "37"
      ],
      [
        2390546,
        "Todo Negro",
        "38"
      ],
      [
        2390547,
        "Todo Negro",
        "39"
      ],
      [
        2390548,
        "Todo Negro",
        "40"
      ],
      [
        2390549,
        "Todo Negro",
        "41"
      ],
      [
        2390550,
        "Todo Negro",
        "42"
      ],
      [
        2390551,
        "Todo Negro",
        "43"
      ],
      [
        2390552,
        "Negro Blanco",
        "37"
      ],
      [
        2390553,
        "Negro Blanco",
        "38"
      ],
      [
        2390554,
        "Negro Blanco",
        "39"
      ],
      [
        2390555,
        "Negro Blanco",
        "40"
      ],
      [
        2390556,
        "Negro Blanco",
        "41"
      ],
      [
        2390557,
        "Negro Blanco",
        "42"
      ],
      [
        2390558,
        "Negro Blanco",
        "43"
      ],
      [
        2390559,
        "Negro Rojo",
        "37"
      ]
    ]
  },
  {
    "id": 284283,
    "n": "Tenis Active 040 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 108,
    "sold": 138,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/284283/17018822151701882215xUBhg829m0oTjp8fEizAd78AffjNmXUfogTqzYdX.jpg",
    "v": [
      [
        166527,
        "",
        "40"
      ],
      [
        166526,
        "",
        "39"
      ],
      [
        166524,
        "",
        "37"
      ],
      [
        166529,
        "",
        "42"
      ],
      [
        166528,
        "",
        "41"
      ],
      [
        166530,
        "",
        "43"
      ],
      [
        166525,
        "",
        "38"
      ]
    ]
  },
  {
    "id": 1988089,
    "n": "Tenis Urban 041 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 214,
    "sold": 204,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1988089/176254590317195940231713567923WhatsApp%20Image%202024-04-19%20at%205.56.57%20PM.jpeg",
    "v": [
      [
        1838014,
        "BLANCO AZUL",
        "39"
      ],
      [
        1838015,
        "BLANCO AZUL",
        "40"
      ],
      [
        1838016,
        "BLANCO AZUL",
        "41"
      ],
      [
        1838023,
        "BLANCO VERDE",
        "41"
      ],
      [
        1837999,
        "GRIS",
        "38"
      ],
      [
        1838000,
        "GRIS",
        "39"
      ],
      [
        1838001,
        "GRIS",
        "40"
      ],
      [
        1838003,
        "GRIS",
        "42"
      ],
      [
        1838004,
        "GRIS",
        "43"
      ],
      [
        1838005,
        "BEIGE",
        "37"
      ],
      [
        1838009,
        "BEIGE",
        "41"
      ],
      [
        1838012,
        "BLANCO AZUL",
        "37"
      ],
      [
        1838013,
        "BLANCO AZUL",
        "38"
      ],
      [
        1838017,
        "BLANCO AZUL",
        "42"
      ],
      [
        1838018,
        "BLANCO AZUL",
        "43"
      ],
      [
        1838019,
        "BLANCO VERDE",
        "37"
      ],
      [
        1838020,
        "BLANCO VERDE",
        "38"
      ],
      [
        1838021,
        "BLANCO VERDE",
        "39"
      ],
      [
        1838022,
        "BLANCO VERDE",
        "40"
      ],
      [
        1838024,
        "BLANCO VERDE",
        "42"
      ],
      [
        1838025,
        "BLANCO VERDE",
        "43"
      ],
      [
        1837998,
        "GRIS",
        "37"
      ],
      [
        1838007,
        "BEIGE",
        "39"
      ],
      [
        1838010,
        "BEIGE",
        "42"
      ],
      [
        1838011,
        "BEIGE",
        "43"
      ],
      [
        1838002,
        "GRIS",
        "41"
      ],
      [
        1838008,
        "BEIGE",
        "40"
      ],
      [
        1838006,
        "BEIGE",
        "38"
      ]
    ]
  },
  {
    "id": 1872049,
    "n": "Tenis Classic 042",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 94,
    "sold": 104,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1872049/1752114502H00d039de952944e28e6da98f0597e1204_LE_upscale_balanced_x4%20cuadrado.jpg",
    "v": [
      [
        1607843,
        "AZUL",
        "40"
      ],
      [
        1607850,
        "BLANCO",
        "41"
      ],
      [
        1607851,
        "BLANCO",
        "42"
      ],
      [
        1607855,
        "AZUL/NEGRO",
        "40"
      ],
      [
        1607856,
        "AZUL/NEGRO",
        "41"
      ],
      [
        1607859,
        "AZUL/NEGRO",
        "44"
      ],
      [
        1607864,
        "ROJO/NEGRO",
        "43"
      ],
      [
        1607848,
        "BLANCO",
        "39"
      ],
      [
        1607845,
        "AZUL",
        "42"
      ],
      [
        1607844,
        "AZUL",
        "41"
      ],
      [
        1607842,
        "AZUL",
        "39"
      ],
      [
        1607846,
        "AZUL",
        "43"
      ],
      [
        1607847,
        "AZUL",
        "44"
      ],
      [
        1607849,
        "BLANCO",
        "40"
      ],
      [
        1607852,
        "BLANCO",
        "43"
      ],
      [
        1607853,
        "BLANCO",
        "44"
      ],
      [
        1607854,
        "AZUL/NEGRO",
        "39"
      ],
      [
        1607857,
        "AZUL/NEGRO",
        "42"
      ],
      [
        1607858,
        "AZUL/NEGRO",
        "43"
      ],
      [
        1607860,
        "ROJO/NEGRO",
        "39"
      ],
      [
        1607861,
        "ROJO/NEGRO",
        "40"
      ],
      [
        1607865,
        "ROJO/NEGRO",
        "44"
      ],
      [
        1607863,
        "ROJO/NEGRO",
        "42"
      ],
      [
        1607862,
        "ROJO/NEGRO",
        "41"
      ]
    ]
  },
  {
    "id": 1894963,
    "n": "Tenis Street 043 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 148,
    "sold": 238,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1894963/17546675411715010939WhatsApp%20Image%202024-05-06%20at%2010.43.16%20AM%20(3).jpeg",
    "v": [
      [
        1661042,
        "BLANCO",
        "43"
      ],
      [
        1661044,
        "GRIS",
        "38"
      ],
      [
        1661045,
        "GRIS",
        "39"
      ],
      [
        1661036,
        "BLANCO",
        "37"
      ],
      [
        1661047,
        "GRIS",
        "41"
      ],
      [
        1661046,
        "GRIS",
        "40"
      ],
      [
        1661054,
        "NEGRO ROJO",
        "41"
      ],
      [
        1661055,
        "NEGRO ROJO",
        "42"
      ],
      [
        1661056,
        "NEGRO ROJO",
        "43"
      ],
      [
        1661035,
        "NEGRO GRIS",
        "43"
      ],
      [
        1661034,
        "NEGRO GRIS",
        "42"
      ],
      [
        1661033,
        "NEGRO GRIS",
        "41"
      ],
      [
        1661032,
        "NEGRO GRIS",
        "40"
      ],
      [
        1661031,
        "NEGRO GRIS",
        "39"
      ],
      [
        1661030,
        "NEGRO GRIS",
        "38"
      ],
      [
        1661029,
        "NEGRO GRIS",
        "37"
      ],
      [
        1661037,
        "BLANCO",
        "38"
      ],
      [
        1661038,
        "BLANCO",
        "39"
      ],
      [
        1661039,
        "BLANCO",
        "40"
      ],
      [
        1661049,
        "GRIS",
        "43"
      ],
      [
        1661050,
        "NEGRO ROJO",
        "37"
      ],
      [
        1661051,
        "NEGRO ROJO",
        "38"
      ],
      [
        1661040,
        "BLANCO",
        "41"
      ],
      [
        1661041,
        "BLANCO",
        "42"
      ],
      [
        1661043,
        "GRIS",
        "37"
      ],
      [
        1661052,
        "NEGRO ROJO",
        "39"
      ],
      [
        1661053,
        "NEGRO ROJO",
        "40"
      ],
      [
        1661048,
        "GRIS",
        "42"
      ]
    ]
  },
  {
    "id": 1887717,
    "n": "Tenis Sport 044",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 102,
    "sold": 132,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1887717/17538239331730493748Imagen%20de%20WhatsApp%202024-11-01%20a%20las%2015.40.40_3d0931d2%20(1).jpg",
    "v": [
      [
        1644531,
        "BLANCO",
        "37"
      ],
      [
        1644546,
        "BLANCO",
        "42"
      ],
      [
        1644545,
        "NEGRO",
        "42"
      ],
      [
        1869179,
        "BLANCO",
        "35"
      ],
      [
        1644544,
        "BLANCO VERDE",
        "41"
      ],
      [
        1644543,
        "BLANCO",
        "41"
      ],
      [
        1644534,
        "BLANCO",
        "38"
      ],
      [
        1644550,
        "BLANCO VERDE",
        "43"
      ],
      [
        1869180,
        "BLANCO",
        "36"
      ],
      [
        1869181,
        "BLANCO VERDE",
        "35"
      ],
      [
        1869182,
        "BLANCO VERDE",
        "36"
      ],
      [
        1869183,
        "NEGRO",
        "36"
      ],
      [
        1869184,
        "NEGRO",
        "35"
      ],
      [
        1644542,
        "NEGRO",
        "41"
      ],
      [
        1644541,
        "BLANCO VERDE",
        "40"
      ],
      [
        1644536,
        "NEGRO",
        "39"
      ],
      [
        1644540,
        "BLANCO",
        "40"
      ],
      [
        1644539,
        "NEGRO",
        "40"
      ],
      [
        1644538,
        "BLANCO VERDE",
        "39"
      ],
      [
        1644537,
        "BLANCO",
        "39"
      ],
      [
        1644533,
        "NEGRO",
        "38"
      ],
      [
        1644532,
        "BLANCO VERDE",
        "37"
      ],
      [
        1644549,
        "BLANCO",
        "43"
      ],
      [
        1644548,
        "NEGRO",
        "43"
      ],
      [
        1644547,
        "BLANCO VERDE",
        "42"
      ],
      [
        1644535,
        "BLANCO VERDE",
        "38"
      ],
      [
        1644530,
        "NEGRO",
        "37"
      ]
    ]
  },
  {
    "id": 1952161,
    "n": "Tenis Retro 045",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 106,
    "sold": 316,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1952161/22edd099-8cc7-4b9b-8f98-f280ba747eea.png",
    "v": [
      [
        1774780,
        "Negro Blanco",
        "42"
      ],
      [
        1774799,
        "Negro Rojo",
        "40"
      ],
      [
        1774808,
        "Negro Negro",
        "42"
      ],
      [
        1774809,
        "Negro Negro",
        "43"
      ],
      [
        1774778,
        "Negro Blanco",
        "40"
      ],
      [
        1774803,
        "Negro Negro",
        "37"
      ],
      [
        1774764,
        "Gris",
        "40"
      ],
      [
        1774765,
        "Gris",
        "41"
      ],
      [
        1774755,
        "Verde",
        "38"
      ],
      [
        1774756,
        "Verde",
        "39"
      ],
      [
        1774757,
        "Verde",
        "40"
      ],
      [
        1774758,
        "Verde",
        "41"
      ],
      [
        1774759,
        "Verde",
        "42"
      ],
      [
        1774760,
        "Verde",
        "43"
      ],
      [
        1774761,
        "Gris",
        "37"
      ],
      [
        1774807,
        "Negro Negro",
        "41"
      ],
      [
        1774754,
        "Verde",
        "37"
      ],
      [
        1774772,
        "Blanco Turquesa",
        "41"
      ],
      [
        1774773,
        "Blanco Turquesa",
        "42"
      ],
      [
        1774763,
        "Gris",
        "39"
      ],
      [
        1774766,
        "Gris",
        "42"
      ],
      [
        1774767,
        "Gris",
        "43"
      ],
      [
        1774768,
        "Blanco Turquesa",
        "37"
      ],
      [
        1774769,
        "Blanco Turquesa",
        "38"
      ],
      [
        1774770,
        "Blanco Turquesa",
        "39"
      ],
      [
        1774771,
        "Blanco Turquesa",
        "40"
      ],
      [
        1774774,
        "Blanco Turquesa",
        "43"
      ],
      [
        1774775,
        "Negro Blanco",
        "37"
      ],
      [
        1774776,
        "Negro Blanco",
        "38"
      ],
      [
        1774777,
        "Negro Blanco",
        "39"
      ],
      [
        1774779,
        "Negro Blanco",
        "41"
      ],
      [
        1774781,
        "Negro Blanco",
        "43"
      ],
      [
        1774782,
        "Blanco Naranja",
        "37"
      ],
      [
        1774783,
        "Blanco Naranja",
        "38"
      ],
      [
        1774784,
        "Blanco Naranja",
        "39"
      ],
      [
        1774785,
        "Blanco Naranja",
        "40"
      ],
      [
        1774786,
        "Blanco Naranja",
        "41"
      ],
      [
        1774787,
        "Blanco Naranja",
        "42"
      ],
      [
        1774788,
        "Blanco Naranja",
        "43"
      ],
      [
        1774789,
        "Blanco Azul",
        "37"
      ],
      [
        1774790,
        "Blanco Azul",
        "38"
      ],
      [
        1774791,
        "Blanco Azul",
        "39"
      ],
      [
        1774792,
        "Blanco Azul",
        "40"
      ],
      [
        1774793,
        "Blanco Azul",
        "41"
      ],
      [
        1774794,
        "Blanco Azul",
        "42"
      ],
      [
        1774795,
        "Blanco Azul",
        "43"
      ],
      [
        1774796,
        "Negro Rojo",
        "37"
      ],
      [
        1774797,
        "Negro Rojo",
        "38"
      ],
      [
        1774798,
        "Negro Rojo",
        "39"
      ],
      [
        1774800,
        "Negro Rojo",
        "41"
      ],
      [
        1774802,
        "Negro Rojo",
        "43"
      ],
      [
        1774804,
        "Negro Negro",
        "38"
      ],
      [
        1774805,
        "Negro Negro",
        "39"
      ],
      [
        1774806,
        "Negro Negro",
        "40"
      ],
      [
        1774801,
        "Negro Rojo",
        "42"
      ],
      [
        1774762,
        "Gris",
        "38"
      ]
    ]
  },
  {
    "id": 1888290,
    "n": "Tenis Flex 046",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 135,
    "sold": 365,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1888290/17538866041712415611WhatsApp%20Image%202024-04-06%20at%2010.36.40%20AM%20(2).jpeg",
    "v": [
      [
        1645433,
        "BLANCO GRIS",
        "36"
      ],
      [
        1645434,
        "BLANCO GRIS",
        "37"
      ],
      [
        1645435,
        "BLANCO GRIS",
        "38"
      ],
      [
        1645436,
        "BLANCO GRIS",
        "39"
      ],
      [
        1645438,
        "BLANCO NEGRO",
        "35"
      ],
      [
        1645442,
        "BLANCO NEGRO",
        "39"
      ],
      [
        1645443,
        "BLANCO NEGRO",
        "40"
      ],
      [
        1645444,
        "BLANCO ROSA",
        "35"
      ],
      [
        1645445,
        "BLANCO ROSA",
        "36"
      ],
      [
        1645446,
        "BLANCO ROSA",
        "37"
      ],
      [
        1645454,
        "BLANCO AZUL",
        "39"
      ],
      [
        1645453,
        "BLANCO AZUL",
        "38"
      ],
      [
        1645452,
        "BLANCO AZUL",
        "37"
      ],
      [
        1645451,
        "BLANCO AZUL",
        "36"
      ],
      [
        1645450,
        "BLANCO AZUL",
        "35"
      ],
      [
        1645449,
        "BLANCO ROSA",
        "40"
      ],
      [
        1645448,
        "BLANCO ROSA",
        "39"
      ],
      [
        1645447,
        "BLANCO ROSA",
        "38"
      ],
      [
        1645441,
        "BLANCO NEGRO",
        "38"
      ],
      [
        1645437,
        "BLANCO GRIS",
        "40"
      ],
      [
        1645439,
        "BLANCO NEGRO",
        "36"
      ],
      [
        1645440,
        "BLANCO NEGRO",
        "37"
      ],
      [
        1645455,
        "BLANCO AZUL",
        "40"
      ],
      [
        1645432,
        "BLANCO GRIS",
        "35"
      ]
    ]
  },
  {
    "id": 2010481,
    "n": "Tenis Runner 047",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 106,
    "sold": 156,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2010481/1764280239WhatsApp%20Image%202025-11-27%20at%209.13.47%20AM.jpeg",
    "v": [
      [
        1869385,
        "Negro Blanco",
        "38"
      ],
      [
        1869409,
        "Negro",
        "41"
      ],
      [
        1869415,
        "Azul",
        "40"
      ],
      [
        1869419,
        "Gris",
        "37"
      ],
      [
        1869420,
        "Gris",
        "38"
      ],
      [
        1869430,
        "Beige",
        "41"
      ],
      [
        1869387,
        "Negro Blanco",
        "40"
      ],
      [
        1869388,
        "Negro Blanco",
        "41"
      ],
      [
        1869389,
        "Negro Blanco",
        "42"
      ],
      [
        1869390,
        "Negro Blanco",
        "43"
      ],
      [
        1869402,
        "Blanco Negro",
        "41"
      ],
      [
        1869408,
        "Negro",
        "40"
      ],
      [
        1869412,
        "Azul",
        "37"
      ],
      [
        1869432,
        "Beige",
        "43"
      ],
      [
        1869431,
        "Beige",
        "42"
      ],
      [
        1869413,
        "Azul",
        "38"
      ],
      [
        1869414,
        "Azul",
        "39"
      ],
      [
        1869416,
        "Azul",
        "41"
      ],
      [
        1869417,
        "Azul",
        "42"
      ],
      [
        1869418,
        "Azul",
        "43"
      ],
      [
        1869421,
        "Gris",
        "39"
      ],
      [
        1869422,
        "Gris",
        "40"
      ],
      [
        1869423,
        "Gris",
        "41"
      ],
      [
        1869424,
        "Gris",
        "42"
      ],
      [
        1869425,
        "Gris",
        "43"
      ],
      [
        1869426,
        "Beige",
        "37"
      ],
      [
        1869427,
        "Beige",
        "38"
      ],
      [
        1869428,
        "Beige",
        "39"
      ],
      [
        1869429,
        "Beige",
        "40"
      ],
      [
        1869384,
        "Negro Blanco",
        "37"
      ],
      [
        1869386,
        "Negro Blanco",
        "39"
      ],
      [
        1869391,
        "Negro Naranja",
        "37"
      ],
      [
        1869392,
        "Negro Naranja",
        "38"
      ],
      [
        1869393,
        "Negro Naranja",
        "39"
      ],
      [
        1869394,
        "Negro Naranja",
        "40"
      ],
      [
        1869395,
        "Negro Naranja",
        "41"
      ],
      [
        1869396,
        "Negro Naranja",
        "42"
      ],
      [
        1869397,
        "Negro Naranja",
        "43"
      ],
      [
        1869398,
        "Blanco Negro",
        "37"
      ],
      [
        1869399,
        "Blanco Negro",
        "38"
      ],
      [
        1869400,
        "Blanco Negro",
        "39"
      ],
      [
        1869401,
        "Blanco Negro",
        "40"
      ],
      [
        1869403,
        "Blanco Negro",
        "42"
      ],
      [
        1869404,
        "Blanco Negro",
        "43"
      ],
      [
        1869405,
        "Negro",
        "37"
      ],
      [
        1869406,
        "Negro",
        "38"
      ],
      [
        1869411,
        "Negro",
        "43"
      ],
      [
        1869407,
        "Negro",
        "39"
      ],
      [
        1869410,
        "Negro",
        "42"
      ]
    ]
  },
  {
    "id": 2135924,
    "n": "Tenis Casual 048",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.7,
    "rev": 89,
    "sold": 139,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135924/17852940381132915.png",
    "v": [
      [
        2120516,
        "Gris",
        "38"
      ],
      [
        2120492,
        "Azul",
        "41"
      ],
      [
        2120493,
        "Azul",
        "42"
      ],
      [
        2120495,
        "Negro",
        "35"
      ],
      [
        2120496,
        "Negro",
        "36"
      ],
      [
        2120520,
        "Gris",
        "42"
      ],
      [
        2120485,
        "Rojo",
        "43"
      ],
      [
        2120512,
        "Blanco",
        "43"
      ],
      [
        2120480,
        "Rojo",
        "38"
      ],
      [
        2120479,
        "Rojo",
        "37"
      ],
      [
        2120481,
        "Rojo",
        "39"
      ],
      [
        2120487,
        "Azul",
        "36"
      ],
      [
        2120513,
        "Gris",
        "35"
      ],
      [
        2120483,
        "Rojo",
        "41"
      ],
      [
        2120494,
        "Azul",
        "43"
      ],
      [
        2120514,
        "Gris",
        "36"
      ],
      [
        2120518,
        "Gris",
        "40"
      ],
      [
        2120510,
        "Blanco",
        "41"
      ],
      [
        2120511,
        "Blanco",
        "42"
      ],
      [
        2120502,
        "Negro",
        "42"
      ],
      [
        2120486,
        "Azul",
        "35"
      ],
      [
        2120488,
        "Azul",
        "37"
      ],
      [
        2120489,
        "Azul",
        "38"
      ],
      [
        2120490,
        "Azul",
        "39"
      ],
      [
        2120491,
        "Azul",
        "40"
      ],
      [
        2120497,
        "Negro",
        "37"
      ],
      [
        2120498,
        "Negro",
        "38"
      ],
      [
        2120499,
        "Negro",
        "39"
      ],
      [
        2120503,
        "Negro",
        "43"
      ],
      [
        2120504,
        "Blanco",
        "35"
      ],
      [
        2120505,
        "Blanco",
        "36"
      ],
      [
        2120506,
        "Blanco",
        "37"
      ],
      [
        2120507,
        "Blanco",
        "38"
      ],
      [
        2120508,
        "Blanco",
        "39"
      ],
      [
        2120509,
        "Blanco",
        "40"
      ],
      [
        2120515,
        "Gris",
        "37"
      ],
      [
        2120517,
        "Gris",
        "39"
      ],
      [
        2120500,
        "Negro",
        "40"
      ],
      [
        2120501,
        "Negro",
        "41"
      ],
      [
        2120519,
        "Gris",
        "41"
      ],
      [
        2120521,
        "Gris",
        "43"
      ],
      [
        2120477,
        "Rojo",
        "35"
      ],
      [
        2120478,
        "Rojo",
        "36"
      ],
      [
        2120482,
        "Rojo",
        "40"
      ],
      [
        2120484,
        "Rojo",
        "42"
      ]
    ]
  },
  {
    "id": 1838454,
    "n": "Tenis Prime 049 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 159,
    "sold": 169,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1838454/175337221317489811801727916723WhatsApp%20Image%202024-10-01%20at%205.56.00%20PM%20(1).jpeg",
    "v": [
      [
        1537349,
        "BLANCO DORADO",
        "38"
      ],
      [
        1537348,
        "BLANCO GRIS",
        "38"
      ],
      [
        1537347,
        "BLANCO MULTICOLOR",
        "37"
      ],
      [
        1537346,
        "BLANCO ROSA",
        "37"
      ],
      [
        1537338,
        "BLANCO ROSA",
        "35"
      ],
      [
        1537337,
        "BLANCO DORADO",
        "35"
      ],
      [
        1537336,
        "BLANCO GRIS",
        "35"
      ],
      [
        1537350,
        "BLANCO ROSA",
        "38"
      ],
      [
        1537351,
        "BLANCO MULTICOLOR",
        "38"
      ],
      [
        1537352,
        "BLANCO GRIS",
        "39"
      ],
      [
        1537355,
        "BLANCO MULTICOLOR",
        "39"
      ],
      [
        1537358,
        "BLANCO ROSA",
        "40"
      ],
      [
        1537343,
        "BLANCO MULTICOLOR",
        "36"
      ],
      [
        1537342,
        "BLANCO ROSA",
        "36"
      ],
      [
        1537340,
        "BLANCO GRIS",
        "36"
      ],
      [
        1537339,
        "BLANCO MULTICOLOR",
        "35"
      ],
      [
        1537353,
        "BLANCO DORADO",
        "39"
      ],
      [
        1537354,
        "BLANCO ROSA",
        "39"
      ],
      [
        1537357,
        "BLANCO DORADO",
        "40"
      ],
      [
        1537356,
        "BLANCO GRIS",
        "40"
      ],
      [
        1537359,
        "BLANCO MULTICOLOR",
        "40"
      ],
      [
        1537345,
        "BLANCO DORADO",
        "37"
      ],
      [
        1537344,
        "BLANCO GRIS",
        "37"
      ],
      [
        1537341,
        "BLANCO DORADO",
        "36"
      ]
    ]
  },
  {
    "id": 1885838,
    "n": "Tenis Active 050 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 203,
    "sold": 293,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885838/17535536781726672476WhatsApp%20Image%202024-09-18%20at%2010.11.00%20AM%20(1).jpeg",
    "v": [
      [
        1639304,
        "CREMA SALMON",
        "35"
      ],
      [
        1639305,
        "CREMA SALMON",
        "36"
      ],
      [
        1639306,
        "CREMA SALMON",
        "37"
      ],
      [
        1639307,
        "CREMA SALMON",
        "38"
      ],
      [
        1639308,
        "CREMA SALMON",
        "39"
      ],
      [
        1639309,
        "CREMA SALMON",
        "40"
      ],
      [
        1639311,
        "BLANCO AZUL",
        "36"
      ],
      [
        1639312,
        "BLANCO AZUL",
        "37"
      ],
      [
        1639313,
        "BLANCO AZUL",
        "38"
      ],
      [
        1639314,
        "BLANCO AZUL",
        "39"
      ],
      [
        1639315,
        "BLANCO AZUL",
        "40"
      ],
      [
        1639317,
        "BLANCO BEIGE",
        "36"
      ],
      [
        1639318,
        "BLANCO BEIGE",
        "37"
      ],
      [
        1639320,
        "BLANCO BEIGE",
        "39"
      ],
      [
        1639321,
        "BLANCO BEIGE",
        "40"
      ],
      [
        1639322,
        "BLANCO GRIS",
        "35"
      ],
      [
        1639325,
        "BLANCO GRIS",
        "38"
      ],
      [
        1639326,
        "BLANCO GRIS",
        "39"
      ],
      [
        1639327,
        "BLANCO GRIS",
        "40"
      ],
      [
        1639319,
        "BLANCO BEIGE",
        "38"
      ],
      [
        1639310,
        "BLANCO AZUL",
        "35"
      ],
      [
        1639316,
        "BLANCO BEIGE",
        "35"
      ],
      [
        1639323,
        "BLANCO GRIS",
        "36"
      ],
      [
        1639324,
        "BLANCO GRIS",
        "37"
      ]
    ]
  },
  {
    "id": 2273120,
    "n": "Tenis Urban 051 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 125,
    "sold": 315,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2273120/51783250-9915-4367-85ec-17822809ce83.jpeg",
    "v": [
      [
        2380149,
        "CAFE",
        "35"
      ],
      [
        2380150,
        "CAFE",
        "36"
      ],
      [
        2380151,
        "CAFE",
        "37"
      ],
      [
        2380152,
        "CAFE",
        "38"
      ],
      [
        2380153,
        "CAFE",
        "39"
      ],
      [
        2380154,
        "CAFE",
        "40"
      ],
      [
        2380155,
        "AZUL",
        "35"
      ],
      [
        2380156,
        "AZUL",
        "36"
      ],
      [
        2380157,
        "AZUL",
        "37"
      ],
      [
        2380158,
        "AZUL",
        "38"
      ],
      [
        2380159,
        "AZUL",
        "39"
      ],
      [
        2380160,
        "AZUL",
        "40"
      ],
      [
        2380161,
        "GRIS",
        "35"
      ],
      [
        2380164,
        "GRIS",
        "38"
      ],
      [
        2380165,
        "GRIS",
        "39"
      ],
      [
        2380166,
        "GRIS",
        "40"
      ],
      [
        2380167,
        "ROSA",
        "35"
      ],
      [
        2380173,
        "LILA",
        "35"
      ],
      [
        2380174,
        "LILA",
        "36"
      ],
      [
        2380175,
        "LILA",
        "37"
      ],
      [
        2380176,
        "LILA",
        "38"
      ],
      [
        2380177,
        "LILA",
        "39"
      ],
      [
        2380162,
        "GRIS",
        "36"
      ],
      [
        2380163,
        "GRIS",
        "37"
      ],
      [
        2380178,
        "LILA",
        "40"
      ],
      [
        2380168,
        "ROSA",
        "36"
      ],
      [
        2380169,
        "ROSA",
        "37"
      ],
      [
        2380170,
        "ROSA",
        "38"
      ],
      [
        2380171,
        "ROSA",
        "39"
      ],
      [
        2380172,
        "ROSA",
        "40"
      ]
    ]
  },
  {
    "id": 2050610,
    "n": "Bota Classic 052",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 95,
    "sold": 165,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2050610/1769228177f6a3eaf8-f26f-41bd-bb21-6101af49d8fa.jpg",
    "v": [
      [
        1951666,
        "",
        "43"
      ],
      [
        1951658,
        "",
        "35"
      ],
      [
        1951657,
        "",
        "34"
      ],
      [
        1951659,
        "",
        "36"
      ],
      [
        1951660,
        "",
        "37"
      ],
      [
        1951661,
        "",
        "38"
      ],
      [
        1951662,
        "",
        "39"
      ],
      [
        1951663,
        "",
        "40"
      ],
      [
        1951664,
        "",
        "41"
      ],
      [
        1951665,
        "",
        "42"
      ]
    ]
  },
  {
    "id": 2161611,
    "n": "Tenis Street 053 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 216,
    "sold": 326,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2161611/8cdd172d-73f5-4436-bc4c-7341d9f78c3c.png",
    "v": [
      [
        2175534,
        "Blanco Negro",
        "38"
      ],
      [
        2175536,
        "Blanco Negro",
        "40"
      ],
      [
        2175507,
        "Gris",
        "35"
      ],
      [
        2175510,
        "Gris",
        "38"
      ],
      [
        2175511,
        "Gris",
        "39"
      ],
      [
        2175512,
        "Gris",
        "40"
      ],
      [
        2175513,
        "Negro",
        "35"
      ],
      [
        2175514,
        "Negro",
        "36"
      ],
      [
        2175518,
        "Negro",
        "40"
      ],
      [
        2175519,
        "Blanco Fucsia",
        "35"
      ],
      [
        2175520,
        "Blanco Fucsia",
        "36"
      ],
      [
        2175521,
        "Blanco Fucsia",
        "37"
      ],
      [
        2175522,
        "Blanco Fucsia",
        "38"
      ],
      [
        2175523,
        "Blanco Fucsia",
        "39"
      ],
      [
        2175524,
        "Blanco Fucsia",
        "40"
      ],
      [
        2175527,
        "Blanco Menta",
        "37"
      ],
      [
        2175508,
        "Gris",
        "36"
      ],
      [
        2175509,
        "Gris",
        "37"
      ],
      [
        2175531,
        "Blanco Negro",
        "35"
      ],
      [
        2175532,
        "Blanco Negro",
        "36"
      ],
      [
        2175515,
        "Negro",
        "37"
      ],
      [
        2175525,
        "Blanco Menta",
        "35"
      ],
      [
        2175526,
        "Blanco Menta",
        "36"
      ],
      [
        2175530,
        "Blanco Menta",
        "40"
      ],
      [
        2175533,
        "Blanco Negro",
        "37"
      ],
      [
        2175535,
        "Blanco Negro",
        "39"
      ],
      [
        2175516,
        "Negro",
        "38"
      ],
      [
        2175517,
        "Negro",
        "39"
      ],
      [
        2175528,
        "Blanco Menta",
        "38"
      ],
      [
        2175529,
        "Blanco Menta",
        "39"
      ]
    ]
  },
  {
    "id": 2290929,
    "n": "Tenis Sport 054",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 114,
    "sold": 104,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2290929/cfef68bb-a6d1-4aa7-bfc9-b047a66eaddb.jpeg",
    "v": [
      [
        2408260,
        "GRIS",
        "38"
      ],
      [
        2408261,
        "GRIS",
        "39"
      ],
      [
        2408262,
        "GRIS",
        "40"
      ],
      [
        2408263,
        "ROJO",
        "35"
      ],
      [
        2408264,
        "ROJO",
        "36"
      ],
      [
        2408265,
        "ROJO",
        "37"
      ],
      [
        2408266,
        "ROJO",
        "38"
      ],
      [
        2408267,
        "ROJO",
        "39"
      ],
      [
        2408268,
        "ROJO",
        "40"
      ],
      [
        2408269,
        "NEGRO LILA",
        "35"
      ],
      [
        2408257,
        "GRIS",
        "35"
      ],
      [
        2408258,
        "GRIS",
        "36"
      ],
      [
        2408259,
        "GRIS",
        "37"
      ],
      [
        2408270,
        "NEGRO LILA",
        "36"
      ],
      [
        2408271,
        "NEGRO LILA",
        "37"
      ],
      [
        2408272,
        "NEGRO LILA",
        "38"
      ],
      [
        2408273,
        "NEGRO LILA",
        "39"
      ],
      [
        2408274,
        "NEGRO LILA",
        "40"
      ],
      [
        2408275,
        "NEGRO",
        "35"
      ],
      [
        2408276,
        "NEGRO",
        "36"
      ],
      [
        2408277,
        "NEGRO",
        "37"
      ],
      [
        2408278,
        "NEGRO",
        "38"
      ],
      [
        2408279,
        "NEGRO",
        "39"
      ],
      [
        2408280,
        "NEGRO",
        "40"
      ],
      [
        2408281,
        "AZUL",
        "35"
      ],
      [
        2408282,
        "AZUL",
        "36"
      ],
      [
        2408283,
        "AZUL",
        "37"
      ],
      [
        2408284,
        "AZUL",
        "38"
      ],
      [
        2408285,
        "AZUL",
        "39"
      ],
      [
        2408286,
        "AZUL",
        "40"
      ]
    ]
  },
  {
    "id": 1795452,
    "n": "Tenis Retro 055 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 177,
    "sold": 347,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1795452/1748458075gif%20AIR%20NOVA.gif",
    "v": [
      [
        1476759,
        "ROSADO",
        "39"
      ],
      [
        1476758,
        "NEGRO",
        "39"
      ],
      [
        1476756,
        "ROSADO",
        "38"
      ],
      [
        1476755,
        "NEGRO",
        "38"
      ],
      [
        1476754,
        "BEIGE",
        "38"
      ],
      [
        1476749,
        "NEGRO",
        "36"
      ],
      [
        1476748,
        "BEIGE",
        "36"
      ],
      [
        1476760,
        "BEIGE",
        "40"
      ],
      [
        1476753,
        "ROSADO",
        "37"
      ],
      [
        1476750,
        "ROSADO",
        "36"
      ],
      [
        1476751,
        "BEIGE",
        "37"
      ],
      [
        1476752,
        "NEGRO",
        "37"
      ],
      [
        1476757,
        "BEIGE",
        "39"
      ],
      [
        1476761,
        "NEGRO",
        "40"
      ],
      [
        1476762,
        "ROSADO",
        "40"
      ]
    ]
  },
  {
    "id": 1794352,
    "n": "Tenis Flex 056 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 157,
    "sold": 267,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1794352/1748458136GIF%20AIR%20TIGER.gif",
    "v": [
      [
        1476740,
        "BEIGE",
        "38"
      ],
      [
        1476745,
        "AZUL",
        "40"
      ],
      [
        1476744,
        "ROSADO",
        "39"
      ],
      [
        1476743,
        "BEIGE",
        "39"
      ],
      [
        1476742,
        "AZUL",
        "39"
      ],
      [
        1476741,
        "ROSADO",
        "38"
      ],
      [
        1476739,
        "AZUL",
        "38"
      ],
      [
        1476738,
        "ROSADO",
        "37"
      ],
      [
        1476737,
        "BEIGE",
        "37"
      ],
      [
        1476736,
        "AZUL",
        "37"
      ],
      [
        1476747,
        "ROSADO",
        "40"
      ],
      [
        1476746,
        "BEIGE",
        "40"
      ],
      [
        1476735,
        "ROSADO",
        "36"
      ],
      [
        1476734,
        "BEIGE",
        "36"
      ],
      [
        1476733,
        "AZUL",
        "36"
      ]
    ]
  },
  {
    "id": 1804321,
    "n": "Tenis Runner 057 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.8,
    "rev": 46,
    "sold": 376,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1804321/1748459791GIF%20NB%20STORM.gif",
    "v": [
      [
        1477506,
        "NEGRO",
        "38"
      ],
      [
        1477517,
        "BEIGE",
        "39"
      ],
      [
        1477516,
        "BEIGE",
        "38"
      ],
      [
        1477515,
        "BEIGE",
        "37"
      ],
      [
        1477514,
        "BEIGE",
        "36"
      ],
      [
        1477513,
        "BLANCO",
        "40"
      ],
      [
        1477512,
        "BLANCO",
        "39"
      ],
      [
        1477511,
        "BLANCO",
        "38"
      ],
      [
        1477510,
        "BLANCO",
        "37"
      ],
      [
        1477509,
        "BLANCO",
        "36"
      ],
      [
        1477508,
        "NEGRO",
        "40"
      ],
      [
        1477507,
        "NEGRO",
        "39"
      ],
      [
        1477504,
        "NEGRO",
        "36"
      ],
      [
        1477505,
        "NEGRO",
        "37"
      ],
      [
        1477518,
        "BEIGE",
        "40"
      ]
    ]
  },
  {
    "id": 2226616,
    "n": "Zueco Casual 058 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 61,
    "sold": 391,
    "stock": 7,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2226616/b7a0bade-74e4-4475-becf-d33cf7733c5e.jpg",
    "v": [
      [
        2305961,
        "BLANCO",
        "35"
      ],
      [
        2305974,
        "BEIGE",
        "36"
      ],
      [
        2305975,
        "BEIGE",
        "37"
      ],
      [
        2305962,
        "BLANCO",
        "36"
      ],
      [
        2305963,
        "BLANCO",
        "37"
      ],
      [
        2305964,
        "BLANCO",
        "38"
      ],
      [
        2305965,
        "BLANCO",
        "39"
      ],
      [
        2305966,
        "BLANCO",
        "40"
      ],
      [
        2305967,
        "CAFE",
        "35"
      ],
      [
        2305976,
        "BEIGE",
        "38"
      ],
      [
        2305949,
        "AZUL",
        "35"
      ],
      [
        2305950,
        "AZUL",
        "36"
      ],
      [
        2305951,
        "AZUL",
        "37"
      ],
      [
        2305952,
        "AZUL",
        "38"
      ],
      [
        2305953,
        "AZUL",
        "39"
      ],
      [
        2305954,
        "AZUL",
        "40"
      ],
      [
        2305955,
        "NEGRO",
        "35"
      ],
      [
        2305956,
        "NEGRO",
        "36"
      ],
      [
        2305957,
        "NEGRO",
        "37"
      ],
      [
        2305958,
        "NEGRO",
        "38"
      ],
      [
        2305959,
        "NEGRO",
        "39"
      ],
      [
        2305960,
        "NEGRO",
        "40"
      ],
      [
        2305968,
        "CAFE",
        "36"
      ],
      [
        2305969,
        "CAFE",
        "37"
      ],
      [
        2305970,
        "CAFE",
        "38"
      ],
      [
        2305971,
        "CAFE",
        "39"
      ],
      [
        2305972,
        "CAFE",
        "40"
      ],
      [
        2305973,
        "BEIGE",
        "35"
      ],
      [
        2305977,
        "BEIGE",
        "39"
      ],
      [
        2305978,
        "BEIGE",
        "40"
      ]
    ]
  },
  {
    "id": 2227175,
    "n": "Tenis Prime 059",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 80,
    "sold": 270,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2227175/812b4512-7ea7-4154-a196-2ab4251a2652.png",
    "v": [
      [
        2306555,
        "Negro Dorado",
        "36"
      ],
      [
        2306563,
        "Gris Cafe",
        "38"
      ],
      [
        2306536,
        "Rosa",
        "35"
      ],
      [
        2306537,
        "Rosa",
        "36"
      ],
      [
        2306538,
        "Rosa",
        "37"
      ],
      [
        2306539,
        "Rosa",
        "38"
      ],
      [
        2306540,
        "Rosa",
        "39"
      ],
      [
        2306541,
        "Rosa",
        "40"
      ],
      [
        2306542,
        "Blanco Azul",
        "35"
      ],
      [
        2306543,
        "Blanco Azul",
        "36"
      ],
      [
        2306544,
        "Blanco Azul",
        "37"
      ],
      [
        2306545,
        "Blanco Azul",
        "38"
      ],
      [
        2306546,
        "Blanco Azul",
        "39"
      ],
      [
        2306547,
        "Blanco Azul",
        "40"
      ],
      [
        2306548,
        "Negro Blanco",
        "35"
      ],
      [
        2306549,
        "Negro Blanco",
        "36"
      ],
      [
        2306550,
        "Negro Blanco",
        "37"
      ],
      [
        2306551,
        "Negro Blanco",
        "38"
      ],
      [
        2306552,
        "Negro Blanco",
        "39"
      ],
      [
        2306553,
        "Negro Blanco",
        "40"
      ],
      [
        2306554,
        "Negro Dorado",
        "35"
      ],
      [
        2306556,
        "Negro Dorado",
        "37"
      ],
      [
        2306557,
        "Negro Dorado",
        "38"
      ],
      [
        2306558,
        "Negro Dorado",
        "39"
      ],
      [
        2306559,
        "Negro Dorado",
        "40"
      ],
      [
        2306560,
        "Gris Cafe",
        "35"
      ],
      [
        2306561,
        "Gris Cafe",
        "36"
      ],
      [
        2306562,
        "Gris Cafe",
        "37"
      ],
      [
        2306564,
        "Gris Cafe",
        "39"
      ],
      [
        2306565,
        "Gris Cafe",
        "40"
      ]
    ]
  },
  {
    "id": 1804327,
    "n": "Tenis Active 060 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 5,
    "rev": 52,
    "sold": 382,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1804327/1748442769GIF%20PULSE%20ONE.gif",
    "v": [
      [
        1477545,
        "BLANCO",
        "39"
      ],
      [
        1477546,
        "BLANCO",
        "40"
      ],
      [
        1477547,
        "BEIGE",
        "36"
      ],
      [
        1477548,
        "BEIGE",
        "37"
      ],
      [
        1477539,
        "NEGRO",
        "38"
      ],
      [
        1477540,
        "NEGRO",
        "39"
      ],
      [
        1477549,
        "BEIGE",
        "38"
      ],
      [
        1477550,
        "BEIGE",
        "39"
      ],
      [
        1477551,
        "BEIGE",
        "40"
      ],
      [
        1477544,
        "BLANCO",
        "38"
      ],
      [
        1477543,
        "BLANCO",
        "37"
      ],
      [
        1477542,
        "BLANCO",
        "36"
      ],
      [
        1477541,
        "NEGRO",
        "40"
      ],
      [
        1477537,
        "NEGRO",
        "36"
      ],
      [
        1477538,
        "NEGRO",
        "37"
      ]
    ]
  },
  {
    "id": 284306,
    "n": "Tenis Urban 061 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 131,
    "sold": 161,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/284306/17018822151701882215z3c7EatlZivGgG7AEdLuDKaD4PH7tnhMpy9t3Lxy.jpg",
    "v": [
      [
        166554,
        "",
        "39"
      ],
      [
        166557,
        "",
        "42"
      ],
      [
        166558,
        "",
        "43"
      ],
      [
        166553,
        "",
        "38"
      ],
      [
        166556,
        "",
        "41"
      ],
      [
        166555,
        "",
        "40"
      ],
      [
        166552,
        "",
        "37"
      ]
    ]
  },
  {
    "id": 2233344,
    "n": "Tenis Classic 062",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 129,
    "sold": 319,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2233344/c9d2c707-14d1-4b88-a168-82e386f5909b.png",
    "v": [
      [
        2321945,
        "Blanco Gris",
        "43"
      ],
      [
        2321918,
        "Verde",
        "37"
      ],
      [
        2321919,
        "Verde",
        "38"
      ],
      [
        2321920,
        "Verde",
        "39"
      ],
      [
        2321921,
        "Verde",
        "40"
      ],
      [
        2321922,
        "Verde",
        "41"
      ],
      [
        2321923,
        "Verde",
        "42"
      ],
      [
        2321924,
        "Verde",
        "43"
      ],
      [
        2321925,
        "Negro Blanco",
        "37"
      ],
      [
        2321926,
        "Negro Blanco",
        "38"
      ],
      [
        2321927,
        "Negro Blanco",
        "39"
      ],
      [
        2321928,
        "Negro Blanco",
        "40"
      ],
      [
        2321929,
        "Negro Blanco",
        "41"
      ],
      [
        2321930,
        "Negro Blanco",
        "42"
      ],
      [
        2321931,
        "Negro Blanco",
        "43"
      ],
      [
        2321932,
        "Blanco Menta",
        "37"
      ],
      [
        2321933,
        "Blanco Menta",
        "38"
      ],
      [
        2321934,
        "Blanco Menta",
        "39"
      ],
      [
        2321935,
        "Blanco Menta",
        "40"
      ],
      [
        2321936,
        "Blanco Menta",
        "41"
      ],
      [
        2321937,
        "Blanco Menta",
        "42"
      ],
      [
        2321938,
        "Blanco Menta",
        "43"
      ],
      [
        2321939,
        "Blanco Gris",
        "37"
      ],
      [
        2321940,
        "Blanco Gris",
        "38"
      ],
      [
        2321941,
        "Blanco Gris",
        "39"
      ],
      [
        2321942,
        "Blanco Gris",
        "40"
      ],
      [
        2321943,
        "Blanco Gris",
        "41"
      ],
      [
        2321944,
        "Blanco Gris",
        "42"
      ]
    ]
  },
  {
    "id": 2079661,
    "n": "Tenis Street 063 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 166,
    "sold": 316,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2079661/84d0034e-e147-4aff-b962-e66fbdb059c8.png",
    "v": [
      [
        1985173,
        "Negro Blanco",
        "37"
      ],
      [
        1985174,
        "Negro Blanco",
        "38"
      ],
      [
        1985153,
        "Verde",
        "38"
      ],
      [
        1985176,
        "Negro Blanco",
        "40"
      ],
      [
        1985154,
        "Verde",
        "39"
      ],
      [
        1985175,
        "Negro Blanco",
        "39"
      ],
      [
        1985178,
        "Negro Blanco",
        "42"
      ],
      [
        1985180,
        "Gris",
        "37"
      ],
      [
        1985182,
        "Gris",
        "39"
      ],
      [
        1985183,
        "Gris",
        "40"
      ],
      [
        1985171,
        "Todo Negro",
        "42"
      ],
      [
        1985172,
        "Todo Negro",
        "43"
      ],
      [
        1985186,
        "Gris",
        "43"
      ],
      [
        1985155,
        "Verde",
        "40"
      ],
      [
        1985156,
        "Verde",
        "41"
      ],
      [
        1985159,
        "Azul Marino",
        "37"
      ],
      [
        1985160,
        "Azul Marino",
        "38"
      ],
      [
        1985161,
        "Azul Marino",
        "39"
      ],
      [
        1985162,
        "Azul Marino",
        "40"
      ],
      [
        1985163,
        "Azul Marino",
        "41"
      ],
      [
        1985164,
        "Azul Marino",
        "42"
      ],
      [
        1985165,
        "Azul Marino",
        "43"
      ],
      [
        1985166,
        "Todo Negro",
        "37"
      ],
      [
        1985167,
        "Todo Negro",
        "38"
      ],
      [
        1985177,
        "Negro Blanco",
        "41"
      ],
      [
        1985179,
        "Negro Blanco",
        "43"
      ],
      [
        1985184,
        "Gris",
        "41"
      ],
      [
        1985185,
        "Gris",
        "42"
      ],
      [
        1985152,
        "Verde",
        "37"
      ],
      [
        1985157,
        "Verde",
        "42"
      ],
      [
        1985158,
        "Verde",
        "43"
      ],
      [
        1985181,
        "Gris",
        "38"
      ],
      [
        1985168,
        "Todo Negro",
        "39"
      ],
      [
        1985169,
        "Todo Negro",
        "40"
      ],
      [
        1985170,
        "Todo Negro",
        "41"
      ]
    ]
  },
  {
    "id": 2138539,
    "n": "Tenis Sport 064",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 184,
    "sold": 374,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2138539/1777172884WhatsApp%20Image%202026-04-25%20at%209.13.12%20PM.jpeg",
    "v": [
      [
        2126614,
        "Blanco",
        "35"
      ],
      [
        2126620,
        "Blanco",
        "41"
      ],
      [
        2126621,
        "Blanco",
        "42"
      ],
      [
        2126622,
        "Blanco",
        "43"
      ],
      [
        2126615,
        "Blanco",
        "36"
      ],
      [
        2126616,
        "Blanco",
        "37"
      ],
      [
        2126617,
        "Blanco",
        "38"
      ],
      [
        2126618,
        "Blanco",
        "39"
      ],
      [
        2126619,
        "Blanco",
        "40"
      ]
    ]
  },
  {
    "id": 2122603,
    "n": "Tenis Retro 065",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 88,
    "sold": 418,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2122603/1775176956WhatsApp%20Image%202026-04-02%20at%206.49.04%20PM%20(2).jpeg",
    "v": [
      [
        2080258,
        "Negro",
        "35"
      ],
      [
        2080259,
        "Negro",
        "36"
      ],
      [
        2080260,
        "Negro",
        "37"
      ],
      [
        2080261,
        "Negro",
        "38"
      ],
      [
        2080262,
        "Negro",
        "39"
      ],
      [
        2080263,
        "Negro",
        "40"
      ],
      [
        2080264,
        "Negro",
        "41"
      ],
      [
        2080265,
        "Negro",
        "42"
      ],
      [
        2080266,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 2121295,
    "n": "Tenis Flex 066",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 220,
    "sold": 130,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2121295/1775018655WhatsApp%20Image%202026-03-31%20at%2010.47.56%20PM%20(2).jpeg",
    "v": [
      [
        2078185,
        "Plateado",
        "35"
      ],
      [
        2078186,
        "Plateado",
        "36"
      ],
      [
        2078187,
        "Plateado",
        "37"
      ],
      [
        2078188,
        "Plateado",
        "38"
      ],
      [
        2078189,
        "Plateado",
        "39"
      ],
      [
        2078190,
        "Plateado",
        "40"
      ],
      [
        2078191,
        "Plateado",
        "41"
      ],
      [
        2078192,
        "Plateado",
        "42"
      ],
      [
        2078193,
        "Plateado",
        "43"
      ]
    ]
  },
  {
    "id": 2146229,
    "n": "Tenis Runner 067",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 134,
    "sold": 244,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2146229/1778128431WhatsApp%20Image%202026-05-06%20at%208.56.14%20PM%20(3).jpeg",
    "v": [
      [
        2142053,
        "Blanco Azul",
        "35"
      ],
      [
        2142056,
        "Blanco Azul",
        "38"
      ],
      [
        2142057,
        "Blanco Azul",
        "39"
      ],
      [
        2142058,
        "Blanco Azul",
        "40"
      ],
      [
        2142059,
        "Blanco Azul",
        "41"
      ],
      [
        2142060,
        "Blanco Azul",
        "42"
      ],
      [
        2142054,
        "Blanco Azul",
        "36"
      ],
      [
        2142055,
        "Blanco Azul",
        "37"
      ],
      [
        2142061,
        "Blanco Azul",
        "43"
      ]
    ]
  },
  {
    "id": 2144108,
    "n": "Bota Casual 068 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 173,
    "sold": 163,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2144108/1777927609WhatsApp%20Image%202026-04-27%20at%2020.25.03%20(1).jpeg",
    "v": [
      [
        2138002,
        "Negro Naranja",
        "42"
      ],
      [
        2137983,
        "Cafe",
        "37"
      ],
      [
        2138005,
        "Negro Amarillo",
        "38"
      ],
      [
        2138006,
        "Negro Amarillo",
        "39"
      ],
      [
        2137976,
        "Beige",
        "37"
      ],
      [
        2137977,
        "Beige",
        "38"
      ],
      [
        2137978,
        "Beige",
        "39"
      ],
      [
        2137979,
        "Beige",
        "40"
      ],
      [
        2137980,
        "Beige",
        "41"
      ],
      [
        2137981,
        "Beige",
        "42"
      ],
      [
        2137982,
        "Beige",
        "43"
      ],
      [
        2137984,
        "Cafe",
        "38"
      ],
      [
        2137985,
        "Cafe",
        "39"
      ],
      [
        2137986,
        "Cafe",
        "40"
      ],
      [
        2137987,
        "Cafe",
        "41"
      ],
      [
        2137988,
        "Cafe",
        "42"
      ],
      [
        2137989,
        "Cafe",
        "43"
      ],
      [
        2137990,
        "Azul",
        "37"
      ],
      [
        2137991,
        "Azul",
        "38"
      ],
      [
        2137992,
        "Azul",
        "39"
      ],
      [
        2137993,
        "Azul",
        "40"
      ],
      [
        2137994,
        "Azul",
        "41"
      ],
      [
        2137995,
        "Azul",
        "42"
      ],
      [
        2137996,
        "Azul",
        "43"
      ],
      [
        2137997,
        "Negro Naranja",
        "37"
      ],
      [
        2137998,
        "Negro Naranja",
        "38"
      ],
      [
        2137999,
        "Negro Naranja",
        "39"
      ],
      [
        2138000,
        "Negro Naranja",
        "40"
      ],
      [
        2138001,
        "Negro Naranja",
        "41"
      ],
      [
        2138003,
        "Negro Naranja",
        "43"
      ],
      [
        2138004,
        "Negro Amarillo",
        "37"
      ],
      [
        2138007,
        "Negro Amarillo",
        "40"
      ],
      [
        2138008,
        "Negro Amarillo",
        "41"
      ],
      [
        2138009,
        "Negro Amarillo",
        "42"
      ],
      [
        2138010,
        "Negro Amarillo",
        "43"
      ]
    ]
  },
  {
    "id": 2271989,
    "n": "Tenis Prime 069 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 74,
    "sold": 204,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2271989/04df0093-1f93-4c48-95df-dfe50e4d1307.png",
    "v": [
      [
        2378191,
        "Blanco Azul",
        "37"
      ],
      [
        2378192,
        "Blanco Azul",
        "38"
      ],
      [
        2378193,
        "Blanco Azul",
        "39"
      ],
      [
        2378194,
        "Blanco Azul",
        "40"
      ],
      [
        2378195,
        "Blanco Azul",
        "41"
      ],
      [
        2378196,
        "Blanco Azul",
        "42"
      ],
      [
        2378197,
        "Blanco Azul",
        "43"
      ],
      [
        2378198,
        "Blanco Negro",
        "37"
      ],
      [
        2378199,
        "Blanco Negro",
        "38"
      ],
      [
        2378200,
        "Blanco Negro",
        "39"
      ],
      [
        2378201,
        "Blanco Negro",
        "40"
      ],
      [
        2378202,
        "Blanco Negro",
        "41"
      ],
      [
        2378203,
        "Blanco Negro",
        "42"
      ],
      [
        2378204,
        "Blanco Negro",
        "43"
      ],
      [
        2378205,
        "Gris",
        "37"
      ],
      [
        2378206,
        "Gris",
        "38"
      ],
      [
        2378207,
        "Gris",
        "39"
      ],
      [
        2378208,
        "Gris",
        "40"
      ],
      [
        2378209,
        "Gris",
        "41"
      ],
      [
        2378210,
        "Gris",
        "42"
      ],
      [
        2378211,
        "Gris",
        "43"
      ],
      [
        2378212,
        "Negro",
        "37"
      ],
      [
        2378213,
        "Negro",
        "38"
      ],
      [
        2378214,
        "Negro",
        "39"
      ],
      [
        2378215,
        "Negro",
        "40"
      ],
      [
        2378216,
        "Negro",
        "41"
      ],
      [
        2378217,
        "Negro",
        "42"
      ],
      [
        2378218,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 2121226,
    "n": "Tenis Active 070",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 151,
    "sold": 401,
    "stock": 7,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2121226/1775009752WhatsApp%20Image%202026-03-31%20at%208.39.22%20PM.jpeg",
    "v": [
      [
        2077937,
        "Blanco Negro",
        "42"
      ],
      [
        2077938,
        "Blanco Negro",
        "43"
      ],
      [
        2077930,
        "Blanco Negro",
        "35"
      ],
      [
        2077931,
        "Blanco Negro",
        "36"
      ],
      [
        2077932,
        "Blanco Negro",
        "37"
      ],
      [
        2077933,
        "Blanco Negro",
        "38"
      ],
      [
        2077934,
        "Blanco Negro",
        "39"
      ],
      [
        2077935,
        "Blanco Negro",
        "40"
      ],
      [
        2077936,
        "Blanco Negro",
        "41"
      ]
    ]
  },
  {
    "id": 1690842,
    "n": "Tenis Urban 071",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 147,
    "sold": 117,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1690842/1740941306WhatsApp%20Image%202025-02-27%20at%2012.36.09%20PM%20(2).jpeg",
    "v": [
      [
        1277393,
        "",
        "35"
      ],
      [
        1277394,
        "",
        "36"
      ],
      [
        1277395,
        "",
        "37"
      ],
      [
        1277396,
        "",
        "38"
      ],
      [
        1277401,
        "",
        "43"
      ],
      [
        1277400,
        "",
        "42"
      ],
      [
        1277399,
        "",
        "41"
      ],
      [
        1277398,
        "",
        "40"
      ],
      [
        1277397,
        "",
        "39"
      ]
    ]
  },
  {
    "id": 1946552,
    "n": "Tenis Classic 072 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 77,
    "sold": 147,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1946552/1759346305WhatsApp%20Image%202025-09-29%20at%203.05.49%20PM.jpeg",
    "v": [
      [
        1763591,
        "NEGRO",
        "42"
      ],
      [
        1763594,
        "MARRON",
        "38"
      ],
      [
        1763596,
        "MARRON",
        "40"
      ],
      [
        1763606,
        "VERDE MARRON",
        "43"
      ],
      [
        1763600,
        "VERDE MARRON",
        "37"
      ],
      [
        1763599,
        "MARRON",
        "43"
      ],
      [
        1763601,
        "VERDE MARRON",
        "38"
      ],
      [
        1763605,
        "VERDE MARRON",
        "42"
      ],
      [
        1763590,
        "NEGRO",
        "41"
      ],
      [
        1763589,
        "NEGRO",
        "40"
      ],
      [
        1763592,
        "NEGRO",
        "43"
      ],
      [
        1763602,
        "VERDE MARRON",
        "39"
      ],
      [
        1763597,
        "MARRON",
        "41"
      ],
      [
        1763593,
        "MARRON",
        "37"
      ],
      [
        1763586,
        "NEGRO",
        "37"
      ],
      [
        1763604,
        "VERDE MARRON",
        "41"
      ],
      [
        1763588,
        "NEGRO",
        "39"
      ],
      [
        1763595,
        "MARRON",
        "39"
      ],
      [
        1763603,
        "VERDE MARRON",
        "40"
      ],
      [
        1763598,
        "MARRON",
        "42"
      ],
      [
        1763587,
        "NEGRO",
        "38"
      ]
    ]
  },
  {
    "id": 2121272,
    "n": "Bota Street 073",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 197,
    "sold": 107,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2121272/1775015842WhatsApp%20Image%202026-03-31%20at%205.34.34%20PM%20(2).jpeg",
    "v": [
      [
        2078080,
        "Negro Rojo",
        "35"
      ],
      [
        2078081,
        "Negro Rojo",
        "36"
      ],
      [
        2078082,
        "Negro Rojo",
        "37"
      ],
      [
        2078083,
        "Negro Rojo",
        "38"
      ],
      [
        2078084,
        "Negro Rojo",
        "39"
      ],
      [
        2078085,
        "Negro Rojo",
        "40"
      ],
      [
        2078086,
        "Negro Rojo",
        "41"
      ],
      [
        2078087,
        "Negro Rojo",
        "42"
      ],
      [
        2078088,
        "Negro Rojo",
        "43"
      ]
    ]
  },
  {
    "id": 1546506,
    "n": "Tenis Sport 074",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 171,
    "sold": 281,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1546506/ece7b1f8-340d-4a8f-bb38-ec0086457abc.jpeg",
    "v": [
      [
        1082892,
        "Negro Blanco",
        "41"
      ],
      [
        1082893,
        "Negro Blanco",
        "42"
      ],
      [
        1082894,
        "Negro Blanco",
        "43"
      ],
      [
        1082887,
        "Negro Blanco",
        "36"
      ],
      [
        1082886,
        "Negro Blanco",
        "35"
      ],
      [
        1082888,
        "Negro Blanco",
        "37"
      ],
      [
        1082889,
        "Negro Blanco",
        "38"
      ],
      [
        1082890,
        "Negro Blanco",
        "39"
      ],
      [
        1082891,
        "Negro Blanco",
        "40"
      ]
    ]
  },
  {
    "id": 2249055,
    "n": "Tenis Retro 075",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 5,
    "rev": 180,
    "sold": 390,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2249055/3be345d1-7e32-47fa-96dd-73cadbeb11a4.jpg",
    "v": [
      [
        2344651,
        "NEGRO/AZUL",
        "44"
      ],
      [
        2344624,
        "BLANCO",
        "38"
      ],
      [
        2344625,
        "BLANCO",
        "39"
      ],
      [
        2344626,
        "BLANCO",
        "40"
      ],
      [
        2344627,
        "BLANCO",
        "41"
      ],
      [
        2344628,
        "BLANCO",
        "42"
      ],
      [
        2344629,
        "BLANCO",
        "43"
      ],
      [
        2344630,
        "BLANCO",
        "44"
      ],
      [
        2344631,
        "AZUL",
        "38"
      ],
      [
        2344632,
        "AZUL",
        "39"
      ],
      [
        2344633,
        "AZUL",
        "40"
      ],
      [
        2344634,
        "AZUL",
        "41"
      ],
      [
        2344635,
        "AZUL",
        "42"
      ],
      [
        2344636,
        "AZUL",
        "43"
      ],
      [
        2344637,
        "AZUL",
        "44"
      ],
      [
        2344638,
        "NEGRO/ROJO",
        "38"
      ],
      [
        2344639,
        "NEGRO/ROJO",
        "39"
      ],
      [
        2344640,
        "NEGRO/ROJO",
        "40"
      ],
      [
        2344641,
        "NEGRO/ROJO",
        "41"
      ],
      [
        2344642,
        "NEGRO/ROJO",
        "42"
      ],
      [
        2344643,
        "NEGRO/ROJO",
        "43"
      ],
      [
        2344644,
        "NEGRO/ROJO",
        "44"
      ],
      [
        2344645,
        "NEGRO/AZUL",
        "38"
      ],
      [
        2344646,
        "NEGRO/AZUL",
        "39"
      ],
      [
        2344647,
        "NEGRO/AZUL",
        "40"
      ],
      [
        2344648,
        "NEGRO/AZUL",
        "41"
      ],
      [
        2344649,
        "NEGRO/AZUL",
        "42"
      ],
      [
        2344650,
        "NEGRO/AZUL",
        "43"
      ]
    ]
  },
  {
    "id": 2035932,
    "n": "Tenis Flex 076 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 177,
    "sold": 107,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2035932/1768344749WhatsApp%20Image%202026-01-13%20at%203.58.14%20PM.jpeg",
    "v": [
      [
        1904414,
        "Negro Rojo",
        "38"
      ],
      [
        1904421,
        "Blanco Negro",
        "38"
      ],
      [
        1904422,
        "Blanco Negro",
        "39"
      ],
      [
        1904406,
        "Negro Blanco",
        "37"
      ],
      [
        1904430,
        "Negro Gris",
        "40"
      ],
      [
        1904408,
        "Negro Blanco",
        "39"
      ],
      [
        1904409,
        "Negro Blanco",
        "40"
      ],
      [
        1904410,
        "Negro Blanco",
        "41"
      ],
      [
        1904416,
        "Negro Rojo",
        "40"
      ],
      [
        1904425,
        "Blanco Negro",
        "42"
      ],
      [
        1904407,
        "Negro Blanco",
        "38"
      ],
      [
        1904411,
        "Negro Blanco",
        "42"
      ],
      [
        1904412,
        "Negro Blanco",
        "43"
      ],
      [
        1904413,
        "Negro Rojo",
        "37"
      ],
      [
        1904415,
        "Negro Rojo",
        "39"
      ],
      [
        1904417,
        "Negro Rojo",
        "41"
      ],
      [
        1904418,
        "Negro Rojo",
        "42"
      ],
      [
        1904419,
        "Negro Rojo",
        "43"
      ],
      [
        1904420,
        "Blanco Negro",
        "37"
      ],
      [
        1904423,
        "Blanco Negro",
        "40"
      ],
      [
        1904424,
        "Blanco Negro",
        "41"
      ],
      [
        1904426,
        "Blanco Negro",
        "43"
      ],
      [
        1904427,
        "Negro Gris",
        "37"
      ],
      [
        1904428,
        "Negro Gris",
        "38"
      ],
      [
        1904429,
        "Negro Gris",
        "39"
      ],
      [
        1904431,
        "Negro Gris",
        "41"
      ],
      [
        1904432,
        "Negro Gris",
        "42"
      ],
      [
        1904433,
        "Negro Gris",
        "43"
      ]
    ]
  },
  {
    "id": 2145988,
    "n": "Tenis Runner 077 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 73,
    "sold": 343,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2145988/1778100922WhatsApp%20Image%202026-05-06%20at%209.06.16%20AM.jpeg",
    "v": [
      [
        2141170,
        "Blanco Negro",
        "38"
      ],
      [
        2141171,
        "Blanco Negro",
        "39"
      ],
      [
        2141172,
        "Blanco Negro",
        "40"
      ],
      [
        2141164,
        "Blanco Beige",
        "38"
      ],
      [
        2141165,
        "Blanco Beige",
        "39"
      ],
      [
        2141166,
        "Blanco Beige",
        "40"
      ],
      [
        2141144,
        "Negro",
        "36"
      ],
      [
        2141145,
        "Negro",
        "37"
      ],
      [
        2141146,
        "Negro",
        "38"
      ],
      [
        2141148,
        "Negro",
        "40"
      ],
      [
        2141149,
        "Blanco Rosa",
        "35"
      ],
      [
        2141150,
        "Blanco Rosa",
        "36"
      ],
      [
        2141151,
        "Blanco Rosa",
        "37"
      ],
      [
        2141152,
        "Blanco Rosa",
        "38"
      ],
      [
        2141153,
        "Blanco Rosa",
        "39"
      ],
      [
        2141154,
        "Blanco Rosa",
        "40"
      ],
      [
        2141155,
        "Blanco Rojo",
        "35"
      ],
      [
        2141156,
        "Blanco Rojo",
        "36"
      ],
      [
        2141157,
        "Blanco Rojo",
        "37"
      ],
      [
        2141158,
        "Blanco Rojo",
        "38"
      ],
      [
        2141159,
        "Blanco Rojo",
        "39"
      ],
      [
        2141160,
        "Blanco Rojo",
        "40"
      ],
      [
        2141161,
        "Blanco Beige",
        "35"
      ],
      [
        2141162,
        "Blanco Beige",
        "36"
      ],
      [
        2141163,
        "Blanco Beige",
        "37"
      ],
      [
        2141143,
        "Negro",
        "35"
      ],
      [
        2141167,
        "Blanco Negro",
        "35"
      ],
      [
        2141168,
        "Blanco Negro",
        "36"
      ],
      [
        2141169,
        "Blanco Negro",
        "37"
      ],
      [
        2141147,
        "Negro",
        "39"
      ]
    ]
  },
  {
    "id": 1096943,
    "n": "Zapato Casual 078",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 68,
    "sold": 198,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1096943/385f8305-6438-4166-9986-71cb3a1d1d30.png",
    "v": [
      [
        827482,
        "Negro",
        "37"
      ],
      [
        827507,
        "Crema",
        "41"
      ],
      [
        827504,
        "Crema",
        "38"
      ],
      [
        827501,
        "Marrón",
        "42"
      ],
      [
        827479,
        "Naranja",
        "41"
      ],
      [
        827483,
        "Negro",
        "38"
      ],
      [
        827499,
        "Marrón",
        "40"
      ],
      [
        827498,
        "Marrón",
        "39"
      ],
      [
        827497,
        "Marrón",
        "38"
      ],
      [
        827488,
        "Negro",
        "43"
      ],
      [
        827500,
        "Marrón",
        "41"
      ],
      [
        827502,
        "Marrón",
        "43"
      ],
      [
        827478,
        "Naranja",
        "40"
      ],
      [
        827480,
        "Naranja",
        "42"
      ],
      [
        827503,
        "Crema",
        "37"
      ],
      [
        827496,
        "Marrón",
        "37"
      ],
      [
        827477,
        "Naranja",
        "39"
      ],
      [
        827505,
        "Crema",
        "39"
      ],
      [
        827508,
        "Crema",
        "42"
      ],
      [
        827509,
        "Crema",
        "43"
      ],
      [
        827506,
        "Crema",
        "40"
      ],
      [
        827481,
        "Naranja",
        "43"
      ],
      [
        827484,
        "Negro",
        "39"
      ],
      [
        827485,
        "Negro",
        "40"
      ],
      [
        827486,
        "Negro",
        "41"
      ],
      [
        827487,
        "Negro",
        "42"
      ],
      [
        827475,
        "Naranja",
        "37"
      ],
      [
        827476,
        "Naranja",
        "38"
      ]
    ]
  },
  {
    "id": 2113634,
    "n": "Tenis Prime 079",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 119,
    "sold": 289,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2113634/cdfacaf5-8cdc-4072-8a4c-84b8ac1b1246.png",
    "v": [
      [
        2061950,
        "Todo Negro",
        "42"
      ],
      [
        2061951,
        "Todo Negro",
        "43"
      ],
      [
        2061952,
        "Negro blanco",
        "35"
      ],
      [
        2061934,
        "Blanco",
        "35"
      ],
      [
        2061935,
        "Blanco",
        "36"
      ],
      [
        2061936,
        "Blanco",
        "37"
      ],
      [
        2061937,
        "Blanco",
        "38"
      ],
      [
        2061938,
        "Blanco",
        "39"
      ],
      [
        2061939,
        "Blanco",
        "40"
      ],
      [
        2061940,
        "Blanco",
        "41"
      ],
      [
        2061941,
        "Blanco",
        "42"
      ],
      [
        2061942,
        "Blanco",
        "43"
      ],
      [
        2061943,
        "Todo Negro",
        "35"
      ],
      [
        2061944,
        "Todo Negro",
        "36"
      ],
      [
        2061953,
        "Negro blanco",
        "36"
      ],
      [
        2061954,
        "Negro blanco",
        "37"
      ],
      [
        2061955,
        "Negro blanco",
        "38"
      ],
      [
        2061956,
        "Negro blanco",
        "39"
      ],
      [
        2061957,
        "Negro blanco",
        "40"
      ],
      [
        2061958,
        "Negro blanco",
        "41"
      ],
      [
        2061959,
        "Negro blanco",
        "42"
      ],
      [
        2061960,
        "Negro blanco",
        "43"
      ],
      [
        2061945,
        "Todo Negro",
        "37"
      ],
      [
        2061946,
        "Todo Negro",
        "38"
      ],
      [
        2061947,
        "Todo Negro",
        "39"
      ],
      [
        2061948,
        "Todo Negro",
        "40"
      ],
      [
        2061949,
        "Todo Negro",
        "41"
      ]
    ]
  },
  {
    "id": 2190363,
    "n": "Tenis Active 080",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 168,
    "sold": 178,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2190363/178294286242e784bc-9893-4600-8df4-0e17093e09ce.jpeg",
    "v": [
      [
        2237029,
        "AZUL",
        "37"
      ],
      [
        2237030,
        "AZUL",
        "38"
      ],
      [
        2237031,
        "AZUL",
        "39"
      ],
      [
        2237032,
        "AZUL",
        "40"
      ],
      [
        2237033,
        "AZUL",
        "41"
      ],
      [
        2237034,
        "AZUL",
        "42"
      ],
      [
        2237035,
        "AZUL",
        "43"
      ],
      [
        2237038,
        "NEGRO",
        "37"
      ],
      [
        2237039,
        "NEGRO",
        "38"
      ],
      [
        2237040,
        "NEGRO",
        "39"
      ],
      [
        2237041,
        "NEGRO",
        "40"
      ],
      [
        2237042,
        "NEGRO",
        "41"
      ],
      [
        2237043,
        "NEGRO",
        "42"
      ],
      [
        2237044,
        "NEGRO",
        "43"
      ],
      [
        2237047,
        "NEGRO GRIS",
        "37"
      ],
      [
        2237048,
        "NEGRO GRIS",
        "38"
      ],
      [
        2237049,
        "NEGRO GRIS",
        "39"
      ],
      [
        2237050,
        "NEGRO GRIS",
        "40"
      ],
      [
        2237051,
        "NEGRO GRIS",
        "41"
      ],
      [
        2237052,
        "NEGRO GRIS",
        "42"
      ],
      [
        2237053,
        "NEGRO GRIS",
        "43"
      ],
      [
        2237054,
        "PALO ROSA",
        "35"
      ],
      [
        2237055,
        "PALO ROSA",
        "36"
      ],
      [
        2237056,
        "PALO ROSA",
        "37"
      ],
      [
        2237057,
        "PALO ROSA",
        "38"
      ],
      [
        2237058,
        "PALO ROSA",
        "39"
      ],
      [
        2237059,
        "PALO ROSA",
        "40"
      ]
    ]
  },
  {
    "id": 2163664,
    "n": "Tenis Urban 081",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 109,
    "sold": 339,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2163664/4e30b172-346e-4edc-8243-a960edec6945.png",
    "v": [
      [
        2180059,
        "Todo Negro",
        "35"
      ],
      [
        2180083,
        "Negro Blanco Suela Negra",
        "41"
      ],
      [
        2180060,
        "Todo Negro",
        "36"
      ],
      [
        2180061,
        "Todo Negro",
        "37"
      ],
      [
        2180062,
        "Todo Negro",
        "38"
      ],
      [
        2180063,
        "Todo Negro",
        "39"
      ],
      [
        2180064,
        "Todo Negro",
        "40"
      ],
      [
        2180065,
        "Todo Negro",
        "41"
      ],
      [
        2180066,
        "Todo Negro",
        "42"
      ],
      [
        2180067,
        "Todo Negro",
        "43"
      ],
      [
        2180068,
        "Negro Blanco Suela Cafe",
        "35"
      ],
      [
        2180069,
        "Negro Blanco Suela Cafe",
        "36"
      ],
      [
        2180070,
        "Negro Blanco Suela Cafe",
        "37"
      ],
      [
        2180071,
        "Negro Blanco Suela Cafe",
        "38"
      ],
      [
        2180072,
        "Negro Blanco Suela Cafe",
        "39"
      ],
      [
        2180073,
        "Negro Blanco Suela Cafe",
        "40"
      ],
      [
        2180074,
        "Negro Blanco Suela Cafe",
        "41"
      ],
      [
        2180077,
        "Negro Blanco Suela Negra",
        "35"
      ],
      [
        2180078,
        "Negro Blanco Suela Negra",
        "36"
      ],
      [
        2180079,
        "Negro Blanco Suela Negra",
        "37"
      ],
      [
        2180080,
        "Negro Blanco Suela Negra",
        "38"
      ],
      [
        2180081,
        "Negro Blanco Suela Negra",
        "39"
      ],
      [
        2180082,
        "Negro Blanco Suela Negra",
        "40"
      ],
      [
        2180084,
        "Negro Blanco Suela Negra",
        "42"
      ],
      [
        2180085,
        "Negro Blanco Suela Negra",
        "43"
      ],
      [
        2180075,
        "Negro Blanco Suela Cafe",
        "42"
      ],
      [
        2180076,
        "Negro Blanco Suela Cafe",
        "43"
      ]
    ]
  },
  {
    "id": 1822885,
    "n": "Tenis Classic 082 Hombre",
    "g": "h",
    "p": 149900,
    "o": 209900,
    "rate": 4.8,
    "rev": 70,
    "sold": 240,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1822885/1748457837GIF%20AIR%20MAX%20DN%20HOMBRE.gif",
    "v": [
      [
        1502069,
        "NEGRO",
        "40"
      ],
      [
        1502071,
        "NEGRO",
        "41"
      ],
      [
        1502072,
        "BLANCO",
        "41"
      ],
      [
        1502073,
        "NEGRO",
        "42"
      ],
      [
        1502074,
        "BLANCO",
        "42"
      ],
      [
        1502075,
        "NEGRO",
        "43"
      ],
      [
        1502076,
        "BLANCO",
        "43"
      ],
      [
        1502065,
        "NEGRO",
        "38"
      ],
      [
        1502066,
        "BLANCO",
        "38"
      ],
      [
        1502068,
        "BLANCO",
        "39"
      ],
      [
        1502067,
        "NEGRO",
        "39"
      ],
      [
        1502077,
        "NEGRO",
        "44"
      ],
      [
        1502078,
        "BLANCO",
        "44"
      ],
      [
        1502070,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 2133838,
    "n": "Tenis Street 083",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 163,
    "sold": 433,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2133838/fafe1088-4c3b-497c-9446-d3267b40b8eb.png",
    "v": [
      [
        2115784,
        "Negro",
        "40"
      ],
      [
        2115792,
        "Blanco",
        "41"
      ],
      [
        2115774,
        "Azul",
        "37"
      ],
      [
        2115775,
        "Azul",
        "38"
      ],
      [
        2115778,
        "Azul",
        "41"
      ],
      [
        2115779,
        "Azul",
        "42"
      ],
      [
        2115780,
        "Azul",
        "43"
      ],
      [
        2115781,
        "Negro",
        "37"
      ],
      [
        2115782,
        "Negro",
        "38"
      ],
      [
        2115783,
        "Negro",
        "39"
      ],
      [
        2115793,
        "Blanco",
        "42"
      ],
      [
        2115776,
        "Azul",
        "39"
      ],
      [
        2115770,
        "Verde",
        "40"
      ],
      [
        2115771,
        "Verde",
        "41"
      ],
      [
        2115767,
        "Verde",
        "37"
      ],
      [
        2357535,
        "Azul",
        "35"
      ],
      [
        2115772,
        "Verde",
        "42"
      ],
      [
        2115788,
        "Blanco",
        "37"
      ],
      [
        2115795,
        "Gris",
        "37"
      ],
      [
        2115785,
        "Negro",
        "41"
      ],
      [
        2115786,
        "Negro",
        "42"
      ],
      [
        2115787,
        "Negro",
        "43"
      ],
      [
        2115777,
        "Azul",
        "40"
      ],
      [
        2115768,
        "Verde",
        "38"
      ],
      [
        2115769,
        "Verde",
        "39"
      ],
      [
        2115794,
        "Blanco",
        "43"
      ],
      [
        2115796,
        "Gris",
        "38"
      ],
      [
        2115797,
        "Gris",
        "39"
      ],
      [
        2115798,
        "Gris",
        "40"
      ],
      [
        2115799,
        "Gris",
        "41"
      ],
      [
        2115791,
        "Blanco",
        "40"
      ],
      [
        2115800,
        "Gris",
        "42"
      ],
      [
        2115801,
        "Gris",
        "43"
      ],
      [
        2115789,
        "Blanco",
        "38"
      ],
      [
        2115790,
        "Blanco",
        "39"
      ],
      [
        2115773,
        "Verde",
        "43"
      ],
      [
        2357536,
        "Azul",
        "36"
      ],
      [
        2357537,
        "Blanco",
        "35"
      ],
      [
        2357538,
        "Blanco",
        "36"
      ],
      [
        2357539,
        "Negro",
        "35"
      ],
      [
        2357540,
        "Negro",
        "36"
      ]
    ]
  },
  {
    "id": 2126504,
    "n": "Tenis Sport 084",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 209,
    "sold": 239,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2126504/1775794254WhatsApp%20Image%202026-04-09%20at%207.24.37%20PM%20(11).jpeg",
    "v": [
      [
        2090786,
        "Blanco Negro",
        "35"
      ],
      [
        2090787,
        "Blanco Negro",
        "36"
      ],
      [
        2090788,
        "Blanco Negro",
        "37"
      ],
      [
        2090789,
        "Blanco Negro",
        "38"
      ],
      [
        2090790,
        "Blanco Negro",
        "39"
      ],
      [
        2090791,
        "Blanco Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2238497,
    "n": "Tenis Retro 085",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 62,
    "sold": 372,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2238497/dd480743-3984-4082-9dfc-fead8b1ad26b.jpeg",
    "v": [
      [
        2328423,
        "Mostaza-Azul",
        "37"
      ],
      [
        2328424,
        "Mostaza-Azul",
        "38"
      ],
      [
        2328425,
        "Mostaza-Azul",
        "39"
      ],
      [
        2328426,
        "Mostaza-Azul",
        "40"
      ],
      [
        2328427,
        "Mostaza-Azul",
        "41"
      ],
      [
        2328428,
        "Mostaza-Azul",
        "42"
      ],
      [
        2328429,
        "Mostaza-Azul",
        "43"
      ],
      [
        2328430,
        "Negro-Gris",
        "37"
      ],
      [
        2328431,
        "Negro-Gris",
        "38"
      ],
      [
        2328432,
        "Negro-Gris",
        "39"
      ],
      [
        2328409,
        "Beige-Miel",
        "37"
      ],
      [
        2328410,
        "Beige-Miel",
        "38"
      ],
      [
        2328411,
        "Beige-Miel",
        "39"
      ],
      [
        2328412,
        "Beige-Miel",
        "40"
      ],
      [
        2328413,
        "Beige-Miel",
        "41"
      ],
      [
        2328414,
        "Beige-Miel",
        "42"
      ],
      [
        2328415,
        "Beige-Miel",
        "43"
      ],
      [
        2328416,
        "Beige-Azul",
        "37"
      ],
      [
        2328417,
        "Beige-Azul",
        "38"
      ],
      [
        2328418,
        "Beige-Azul",
        "39"
      ],
      [
        2328419,
        "Beige-Azul",
        "40"
      ],
      [
        2328420,
        "Beige-Azul",
        "41"
      ],
      [
        2328421,
        "Beige-Azul",
        "42"
      ],
      [
        2328422,
        "Beige-Azul",
        "43"
      ],
      [
        2328433,
        "Negro-Gris",
        "40"
      ],
      [
        2328434,
        "Negro-Gris",
        "41"
      ],
      [
        2328435,
        "Negro-Gris",
        "42"
      ],
      [
        2328436,
        "Negro-Gris",
        "43"
      ]
    ]
  },
  {
    "id": 2139938,
    "n": "Tenis Flex 086",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 143,
    "sold": 413,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2139938/1777348335WhatsApp%20Image%202026-04-26%20at%209.44.46%20PM%20(1).jpeg",
    "v": [
      [
        2128947,
        "Blanco Negro",
        "40"
      ],
      [
        2128942,
        "Blanco Negro",
        "35"
      ],
      [
        2128943,
        "Blanco Negro",
        "36"
      ],
      [
        2128944,
        "Blanco Negro",
        "37"
      ],
      [
        2128945,
        "Blanco Negro",
        "38"
      ],
      [
        2128946,
        "Blanco Negro",
        "39"
      ]
    ]
  },
  {
    "id": 1905209,
    "n": "Tenis Runner 087",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 134,
    "sold": 284,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1905209/175588256232.jpg",
    "v": [
      [
        1687079,
        "GRIS",
        "37"
      ],
      [
        1687109,
        "BEIGE",
        "44"
      ],
      [
        1687108,
        "BLANCO",
        "44"
      ],
      [
        1687107,
        "GRIS",
        "44"
      ],
      [
        1687106,
        "NEGRO",
        "44"
      ],
      [
        1687104,
        "BLANCO",
        "43"
      ],
      [
        1687103,
        "GRIS",
        "43"
      ],
      [
        1687102,
        "NEGRO",
        "43"
      ],
      [
        1687101,
        "BEIGE",
        "42"
      ],
      [
        1687100,
        "BLANCO",
        "42"
      ],
      [
        1687099,
        "GRIS",
        "42"
      ],
      [
        1687098,
        "NEGRO",
        "42"
      ],
      [
        1687097,
        "BEIGE",
        "41"
      ],
      [
        1687096,
        "BLANCO",
        "41"
      ],
      [
        1687095,
        "GRIS",
        "41"
      ],
      [
        1687094,
        "NEGRO",
        "41"
      ],
      [
        1687093,
        "BEIGE",
        "40"
      ],
      [
        1687092,
        "BLANCO",
        "40"
      ],
      [
        1687091,
        "GRIS",
        "40"
      ],
      [
        1687090,
        "NEGRO",
        "40"
      ],
      [
        1687089,
        "BEIGE",
        "39"
      ],
      [
        1687088,
        "BLANCO",
        "39"
      ],
      [
        1687087,
        "GRIS",
        "39"
      ],
      [
        1687086,
        "NEGRO",
        "39"
      ],
      [
        1687085,
        "BEIGE",
        "38"
      ],
      [
        1687083,
        "GRIS",
        "38"
      ],
      [
        1687082,
        "NEGRO",
        "38"
      ],
      [
        1687081,
        "BEIGE",
        "37"
      ],
      [
        1687078,
        "NEGRO",
        "37"
      ],
      [
        1687077,
        "BEIGE",
        "36"
      ],
      [
        1687075,
        "GRIS",
        "36"
      ],
      [
        1687074,
        "NEGRO",
        "36"
      ],
      [
        1687105,
        "BEIGE",
        "43"
      ]
    ]
  },
  {
    "id": 2133840,
    "n": "Tenis Casual 088 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 165,
    "sold": 95,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2133840/4a12ef85-aa25-4e09-a36a-86e39eddbb10.png",
    "v": [
      [
        2161831,
        "Turquesa",
        "35"
      ],
      [
        2161832,
        "Turquesa",
        "36"
      ],
      [
        2115805,
        "Negro",
        "38"
      ],
      [
        2115824,
        "Blanco Azul",
        "39"
      ],
      [
        2115808,
        "Blanco Negro",
        "35"
      ],
      [
        2161825,
        "Azul Claro",
        "35"
      ],
      [
        2161826,
        "Azul Claro",
        "36"
      ],
      [
        2161827,
        "Azul Claro",
        "37"
      ],
      [
        2161828,
        "Azul Claro",
        "38"
      ],
      [
        2161829,
        "Azul Claro",
        "39"
      ],
      [
        2161834,
        "Turquesa",
        "38"
      ],
      [
        2161835,
        "Turquesa",
        "39"
      ],
      [
        2161836,
        "Turquesa",
        "40"
      ],
      [
        2115821,
        "Blanco Azul",
        "36"
      ],
      [
        2115807,
        "Negro",
        "40"
      ],
      [
        2115809,
        "Blanco Negro",
        "36"
      ],
      [
        2115810,
        "Blanco Negro",
        "37"
      ],
      [
        2115812,
        "Blanco Negro",
        "39"
      ],
      [
        2115813,
        "Blanco Negro",
        "40"
      ],
      [
        2115814,
        "Blanco Plateado",
        "35"
      ],
      [
        2115815,
        "Blanco Plateado",
        "36"
      ],
      [
        2115816,
        "Blanco Plateado",
        "37"
      ],
      [
        2115817,
        "Blanco Plateado",
        "38"
      ],
      [
        2115818,
        "Blanco Plateado",
        "39"
      ],
      [
        2115822,
        "Blanco Azul",
        "37"
      ],
      [
        2115823,
        "Blanco Azul",
        "38"
      ],
      [
        2115820,
        "Blanco Azul",
        "35"
      ],
      [
        2115802,
        "Negro",
        "35"
      ],
      [
        2115803,
        "Negro",
        "36"
      ],
      [
        2115811,
        "Blanco Negro",
        "38"
      ],
      [
        2115819,
        "Blanco Plateado",
        "40"
      ],
      [
        2115804,
        "Negro",
        "37"
      ],
      [
        2161830,
        "Azul Claro",
        "40"
      ],
      [
        2161833,
        "Turquesa",
        "37"
      ],
      [
        2115825,
        "Blanco Azul",
        "40"
      ],
      [
        2115806,
        "Negro",
        "39"
      ]
    ]
  },
  {
    "id": 1637179,
    "n": "Tenis Prime 089 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 124,
    "sold": 174,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637179/1737568191WhatsApp%20Image%202025-01-22%20at%2012.22.42%20PM.jpeg",
    "v": [
      [
        1152659,
        "",
        "39"
      ],
      [
        1152658,
        "",
        "38"
      ],
      [
        1152657,
        "",
        "37"
      ],
      [
        1152656,
        "",
        "36"
      ],
      [
        1152655,
        "",
        "35"
      ],
      [
        1152660,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 2233202,
    "n": "Tenis Active 090 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 167,
    "sold": 177,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2233202/9f24bb61-b6a7-4f07-9284-427d5ac88815.png",
    "v": [
      [
        2321138,
        "Gris",
        "38"
      ],
      [
        2321137,
        "Gris",
        "37"
      ],
      [
        2321139,
        "Gris",
        "39"
      ],
      [
        2321140,
        "Gris",
        "40"
      ],
      [
        2321117,
        "Blanco",
        "35"
      ],
      [
        2321118,
        "Blanco",
        "36"
      ],
      [
        2321119,
        "Blanco",
        "37"
      ],
      [
        2321120,
        "Blanco",
        "38"
      ],
      [
        2321121,
        "Blanco",
        "39"
      ],
      [
        2321122,
        "Blanco",
        "40"
      ],
      [
        2321123,
        "Rojo",
        "35"
      ],
      [
        2321124,
        "Rojo",
        "36"
      ],
      [
        2321125,
        "Rojo",
        "37"
      ],
      [
        2321126,
        "Rojo",
        "38"
      ],
      [
        2321127,
        "Rojo",
        "39"
      ],
      [
        2321128,
        "Rojo",
        "40"
      ],
      [
        2321129,
        "Negro",
        "35"
      ],
      [
        2321130,
        "Negro",
        "36"
      ],
      [
        2321131,
        "Negro",
        "37"
      ],
      [
        2321132,
        "Negro",
        "38"
      ],
      [
        2321133,
        "Negro",
        "39"
      ],
      [
        2321134,
        "Negro",
        "40"
      ],
      [
        2321135,
        "Gris",
        "35"
      ],
      [
        2321136,
        "Gris",
        "36"
      ]
    ]
  },
  {
    "id": 1895201,
    "n": "Tenis Urban 091 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 206,
    "sold": 136,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1895201/17546753001719429271WhatsApp%20Image%202024-06-26%20at%201.55.26%20PM%20(5).jpeg",
    "v": [
      [
        1661770,
        "BLANCO LILA",
        "38"
      ],
      [
        1661764,
        "BLANCO VERDE",
        "37"
      ],
      [
        1661765,
        "BLANCO GRIS",
        "37"
      ],
      [
        1661766,
        "BLANCO LILA",
        "37"
      ],
      [
        1661757,
        "BLANCO GRIS",
        "35"
      ],
      [
        1661760,
        "BLANCO VERDE",
        "36"
      ],
      [
        1661763,
        "NEGRO BLANCO",
        "37"
      ],
      [
        1661769,
        "BLANCO GRIS",
        "38"
      ],
      [
        1661773,
        "BLANCO GRIS",
        "39"
      ],
      [
        1661778,
        "BLANCO LILA",
        "40"
      ],
      [
        1661774,
        "BLANCO LILA",
        "39"
      ],
      [
        1661775,
        "NEGRO BLANCO",
        "40"
      ],
      [
        1661776,
        "BLANCO VERDE",
        "40"
      ],
      [
        1661777,
        "BLANCO GRIS",
        "40"
      ],
      [
        1661755,
        "NEGRO BLANCO",
        "35"
      ],
      [
        1661756,
        "BLANCO VERDE",
        "35"
      ],
      [
        1661758,
        "BLANCO LILA",
        "35"
      ],
      [
        1661759,
        "NEGRO BLANCO",
        "36"
      ],
      [
        1661771,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1661772,
        "BLANCO VERDE",
        "39"
      ],
      [
        1661761,
        "BLANCO GRIS",
        "36"
      ],
      [
        1661762,
        "BLANCO LILA",
        "36"
      ],
      [
        1661767,
        "NEGRO BLANCO",
        "38"
      ],
      [
        1661768,
        "BLANCO VERDE",
        "38"
      ]
    ]
  },
  {
    "id": 2292743,
    "n": "Tenis Classic 092 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 128,
    "sold": 218,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2292743/77889b44-b6e1-428d-abcb-2366e9c843e1.png",
    "v": [
      [
        2411657,
        "Lila",
        "35"
      ],
      [
        2411658,
        "Lila",
        "36"
      ],
      [
        2411659,
        "Lila",
        "37"
      ],
      [
        2411660,
        "Lila",
        "38"
      ],
      [
        2411661,
        "Lila",
        "39"
      ],
      [
        2411662,
        "Lila",
        "40"
      ],
      [
        2411663,
        "Negro",
        "35"
      ],
      [
        2411664,
        "Negro",
        "36"
      ],
      [
        2411665,
        "Negro",
        "37"
      ],
      [
        2411666,
        "Negro",
        "38"
      ],
      [
        2411667,
        "Negro",
        "39"
      ],
      [
        2411668,
        "Negro",
        "40"
      ],
      [
        2411669,
        "Blanco",
        "35"
      ],
      [
        2411670,
        "Blanco",
        "36"
      ],
      [
        2411671,
        "Blanco",
        "37"
      ],
      [
        2411672,
        "Blanco",
        "38"
      ],
      [
        2411673,
        "Blanco",
        "39"
      ],
      [
        2411674,
        "Blanco",
        "40"
      ],
      [
        2411675,
        "Azul",
        "35"
      ],
      [
        2411676,
        "Azul",
        "36"
      ],
      [
        2411677,
        "Azul",
        "37"
      ],
      [
        2411678,
        "Azul",
        "38"
      ],
      [
        2411679,
        "Azul",
        "39"
      ],
      [
        2411680,
        "Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2139601,
    "n": "Tenis Street 093 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 166,
    "sold": 416,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2139601/1777325398WhatsApp%20Image%202026-04-27%20at%202.54.56%20PM.jpeg",
    "v": [
      [
        2128066,
        "Blanco Azul",
        "35"
      ],
      [
        2128067,
        "Blanco Rosa",
        "35"
      ],
      [
        2128068,
        "Negro",
        "35"
      ],
      [
        2128069,
        "Blanco Beige",
        "36"
      ],
      [
        2128070,
        "Blanco Azul",
        "36"
      ],
      [
        2128071,
        "Blanco Rosa",
        "36"
      ],
      [
        2128072,
        "Negro",
        "36"
      ],
      [
        2128073,
        "Blanco Beige",
        "37"
      ],
      [
        2128074,
        "Blanco Azul",
        "37"
      ],
      [
        2128075,
        "Blanco Rosa",
        "37"
      ],
      [
        2128076,
        "Negro",
        "37"
      ],
      [
        2128077,
        "Blanco Beige",
        "38"
      ],
      [
        2128078,
        "Blanco Azul",
        "38"
      ],
      [
        2128079,
        "Blanco Rosa",
        "38"
      ],
      [
        2128080,
        "Negro",
        "38"
      ],
      [
        2128081,
        "Blanco Beige",
        "39"
      ],
      [
        2128082,
        "Blanco Azul",
        "39"
      ],
      [
        2128083,
        "Blanco Rosa",
        "39"
      ],
      [
        2128084,
        "Negro",
        "39"
      ],
      [
        2128085,
        "Blanco Beige",
        "40"
      ],
      [
        2128086,
        "Blanco Azul",
        "40"
      ],
      [
        2128087,
        "Blanco Rosa",
        "40"
      ],
      [
        2128088,
        "Negro",
        "40"
      ],
      [
        2128065,
        "Blanco Beige",
        "35"
      ]
    ]
  },
  {
    "id": 2258024,
    "n": "Tenis Sport 094",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.7,
    "rev": 149,
    "sold": 179,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2258024/e72aee3f-5afb-49ef-be3c-2100346e55c1.jpg",
    "v": [
      [
        2355984,
        "Negro",
        "36"
      ],
      [
        2355985,
        "Negro",
        "37"
      ],
      [
        2355986,
        "Negro",
        "38"
      ],
      [
        2355987,
        "Negro",
        "39"
      ],
      [
        2355988,
        "Negro",
        "40"
      ],
      [
        2355983,
        "Negro",
        "35"
      ],
      [
        2355989,
        "Fucsia",
        "35"
      ],
      [
        2355990,
        "Fucsia",
        "36"
      ],
      [
        2355991,
        "Fucsia",
        "37"
      ],
      [
        2355992,
        "Fucsia",
        "38"
      ],
      [
        2355993,
        "Fucsia",
        "39"
      ],
      [
        2355994,
        "Fucsia",
        "40"
      ],
      [
        2356059,
        "Blanco",
        "35"
      ],
      [
        2356060,
        "Blanco",
        "36"
      ],
      [
        2356061,
        "Blanco",
        "37"
      ],
      [
        2356062,
        "Blanco",
        "38"
      ],
      [
        2356063,
        "Blanco",
        "39"
      ],
      [
        2356064,
        "Blanco",
        "40"
      ],
      [
        2356065,
        "Menta",
        "35"
      ],
      [
        2356066,
        "Menta",
        "36"
      ],
      [
        2356067,
        "Menta",
        "37"
      ],
      [
        2356068,
        "Menta",
        "38"
      ],
      [
        2356069,
        "Menta",
        "39"
      ],
      [
        2356070,
        "Menta",
        "40"
      ]
    ]
  },
  {
    "id": 2189811,
    "n": "Tenis Retro 095",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 156,
    "sold": 306,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2189811/1782876726WhatsApp%20Image%202026-06-30%20at%202.10.42%20PM%20(5).jpeg",
    "v": [
      [
        2235428,
        "Fucsia",
        "35"
      ],
      [
        2235429,
        "Fucsia",
        "36"
      ],
      [
        2235430,
        "Fucsia",
        "37"
      ],
      [
        2235431,
        "Fucsia",
        "38"
      ],
      [
        2235432,
        "Fucsia",
        "39"
      ],
      [
        2235433,
        "Fucsia",
        "40"
      ],
      [
        2235434,
        "Blanco Gris",
        "35"
      ],
      [
        2235435,
        "Blanco Gris",
        "36"
      ],
      [
        2235436,
        "Blanco Gris",
        "37"
      ],
      [
        2235437,
        "Blanco Gris",
        "38"
      ],
      [
        2235438,
        "Blanco Gris",
        "39"
      ],
      [
        2235439,
        "Blanco Gris",
        "40"
      ]
    ]
  },
  {
    "id": 2271994,
    "n": "Tenis Flex 096 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 79,
    "sold": 209,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2271994/8116a6d7-9c8b-4da3-9183-c27b67d5d084.png",
    "v": [
      [
        2378228,
        "Blanco Dorado",
        "37"
      ],
      [
        2378229,
        "Blanco Dorado",
        "38"
      ],
      [
        2378230,
        "Blanco Dorado",
        "39"
      ],
      [
        2378231,
        "Blanco Dorado",
        "40"
      ],
      [
        2378220,
        "Blanco Gris",
        "35"
      ],
      [
        2378221,
        "Blanco Gris",
        "36"
      ],
      [
        2378222,
        "Blanco Gris",
        "37"
      ],
      [
        2378223,
        "Blanco Gris",
        "38"
      ],
      [
        2378224,
        "Blanco Gris",
        "39"
      ],
      [
        2378225,
        "Blanco Gris",
        "40"
      ],
      [
        2378226,
        "Blanco Dorado",
        "35"
      ],
      [
        2378227,
        "Blanco Dorado",
        "36"
      ],
      [
        2378232,
        "Beige",
        "35"
      ],
      [
        2378233,
        "Beige",
        "36"
      ],
      [
        2378234,
        "Beige",
        "37"
      ],
      [
        2378235,
        "Beige",
        "38"
      ],
      [
        2378236,
        "Beige",
        "39"
      ],
      [
        2378237,
        "Beige",
        "40"
      ],
      [
        2378238,
        "Marron Oscuro",
        "35"
      ],
      [
        2378239,
        "Marron Oscuro",
        "36"
      ],
      [
        2378240,
        "Marron Oscuro",
        "37"
      ],
      [
        2378241,
        "Marron Oscuro",
        "38"
      ],
      [
        2378242,
        "Marron Oscuro",
        "39"
      ],
      [
        2378243,
        "Marron Oscuro",
        "40"
      ]
    ]
  },
  {
    "id": 2000480,
    "n": "Tenis Runner 097",
    "g": "u",
    "p": 114900,
    "o": 164900,
    "rate": 4.7,
    "rev": 185,
    "sold": 355,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2000480/17636031271763575918WhatsApp%20Image%202025-11-19%20at%2012.58.27%20PM.jpeg",
    "v": [
      [
        1858408,
        "BEIGE",
        "38"
      ],
      [
        1858411,
        "BLANCO",
        "35"
      ],
      [
        1858393,
        "MARRON",
        "35"
      ],
      [
        1858394,
        "MARRON",
        "36"
      ],
      [
        1858395,
        "MARRON",
        "37"
      ],
      [
        1858396,
        "MARRON",
        "38"
      ],
      [
        1858397,
        "MARRON",
        "39"
      ],
      [
        1858398,
        "MARRON",
        "40"
      ],
      [
        1858399,
        "NEGRO",
        "35"
      ],
      [
        1858400,
        "NEGRO",
        "36"
      ],
      [
        1858401,
        "NEGRO",
        "37"
      ],
      [
        1858402,
        "NEGRO",
        "38"
      ],
      [
        1858403,
        "NEGRO",
        "39"
      ],
      [
        1858404,
        "NEGRO",
        "40"
      ],
      [
        1858405,
        "BEIGE",
        "35"
      ],
      [
        1858406,
        "BEIGE",
        "36"
      ],
      [
        1858407,
        "BEIGE",
        "37"
      ],
      [
        1858409,
        "BEIGE",
        "39"
      ],
      [
        1858410,
        "BEIGE",
        "40"
      ],
      [
        1858412,
        "BLANCO",
        "36"
      ],
      [
        1858413,
        "BLANCO",
        "37"
      ],
      [
        1858414,
        "BLANCO",
        "38"
      ],
      [
        1858415,
        "BLANCO",
        "39"
      ],
      [
        1858416,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 2161603,
    "n": "Tenis Casual 098 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 208,
    "sold": 318,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2161603/3d2d5197-c09a-4065-844d-dc23b1649f2b.png",
    "v": [
      [
        2175468,
        "Blanco",
        "40"
      ],
      [
        2175465,
        "Blanco",
        "37"
      ],
      [
        2175464,
        "Blanco",
        "36"
      ],
      [
        2175466,
        "Blanco",
        "38"
      ],
      [
        2175467,
        "Blanco",
        "39"
      ],
      [
        2175471,
        "Negro",
        "37"
      ],
      [
        2175472,
        "Negro",
        "38"
      ],
      [
        2175473,
        "Negro",
        "39"
      ],
      [
        2175474,
        "Negro",
        "40"
      ],
      [
        2175475,
        "Gris",
        "35"
      ],
      [
        2175476,
        "Gris",
        "36"
      ],
      [
        2175477,
        "Gris",
        "37"
      ],
      [
        2175478,
        "Gris",
        "38"
      ],
      [
        2175479,
        "Gris",
        "39"
      ],
      [
        2175480,
        "Gris",
        "40"
      ],
      [
        2175481,
        "Fucsia",
        "35"
      ],
      [
        2175482,
        "Fucsia",
        "36"
      ],
      [
        2175483,
        "Fucsia",
        "37"
      ],
      [
        2175484,
        "Fucsia",
        "38"
      ],
      [
        2175485,
        "Fucsia",
        "39"
      ],
      [
        2175486,
        "Fucsia",
        "40"
      ],
      [
        2175463,
        "Blanco",
        "35"
      ],
      [
        2175470,
        "Negro",
        "36"
      ],
      [
        2175469,
        "Negro",
        "35"
      ]
    ]
  },
  {
    "id": 2232045,
    "n": "Tenis Prime 099 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 90,
    "sold": 380,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2232045/9d550fcb-6184-460c-92c0-e41562406918.png",
    "v": [
      [
        2319137,
        "Negro",
        "35"
      ],
      [
        2319138,
        "Negro",
        "36"
      ],
      [
        2319139,
        "Negro",
        "37"
      ],
      [
        2319140,
        "Negro",
        "38"
      ],
      [
        2319141,
        "Negro",
        "39"
      ],
      [
        2319142,
        "Negro",
        "40"
      ],
      [
        2319143,
        "Rosa",
        "35"
      ],
      [
        2319144,
        "Rosa",
        "36"
      ],
      [
        2319145,
        "Rosa",
        "37"
      ],
      [
        2319146,
        "Rosa",
        "38"
      ],
      [
        2319147,
        "Rosa",
        "39"
      ],
      [
        2319148,
        "Rosa",
        "40"
      ],
      [
        2319149,
        "Blanco Morado",
        "35"
      ],
      [
        2319150,
        "Blanco Morado",
        "36"
      ],
      [
        2319151,
        "Blanco Morado",
        "37"
      ],
      [
        2319152,
        "Blanco Morado",
        "38"
      ],
      [
        2319153,
        "Blanco Morado",
        "39"
      ],
      [
        2319154,
        "Blanco Morado",
        "40"
      ],
      [
        2319155,
        "Blanco Azul",
        "35"
      ],
      [
        2319156,
        "Blanco Azul",
        "36"
      ],
      [
        2319157,
        "Blanco Azul",
        "37"
      ],
      [
        2319158,
        "Blanco Azul",
        "38"
      ],
      [
        2319159,
        "Blanco Azul",
        "39"
      ],
      [
        2319160,
        "Blanco Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2140728,
    "n": "Baleta Active 100 Dama",
    "g": "m",
    "p": 114900,
    "o": 164900,
    "rate": 4.7,
    "rev": 213,
    "sold": 183,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2140728/1777412245WhatsApp%20Image%202026-04-28%20at%202.31.28%20PM.jpeg",
    "v": [
      [
        2130246,
        "Blanco Negro",
        "35"
      ],
      [
        2130265,
        "Blanco Azul",
        "36"
      ],
      [
        2130266,
        "Blanco Azul",
        "37"
      ],
      [
        2130267,
        "Blanco Azul",
        "38"
      ],
      [
        2130268,
        "Blanco Azul",
        "39"
      ],
      [
        2130269,
        "Blanco Azul",
        "40"
      ],
      [
        2130247,
        "Blanco Negro",
        "36"
      ],
      [
        2130248,
        "Blanco Negro",
        "37"
      ],
      [
        2130249,
        "Blanco Negro",
        "38"
      ],
      [
        2130250,
        "Blanco Negro",
        "39"
      ],
      [
        2130251,
        "Blanco Negro",
        "40"
      ],
      [
        2130252,
        "Negro Beige",
        "35"
      ],
      [
        2130253,
        "Negro Beige",
        "36"
      ],
      [
        2130254,
        "Negro Beige",
        "37"
      ],
      [
        2130255,
        "Negro Beige",
        "38"
      ],
      [
        2130256,
        "Negro Beige",
        "39"
      ],
      [
        2130257,
        "Negro Beige",
        "40"
      ],
      [
        2130258,
        "Blanco Plateado",
        "35"
      ],
      [
        2130259,
        "Blanco Plateado",
        "36"
      ],
      [
        2130260,
        "Blanco Plateado",
        "37"
      ],
      [
        2130261,
        "Blanco Plateado",
        "38"
      ],
      [
        2130262,
        "Blanco Plateado",
        "39"
      ],
      [
        2130263,
        "Blanco Plateado",
        "40"
      ],
      [
        2130264,
        "Blanco Azul",
        "35"
      ]
    ]
  },
  {
    "id": 2136216,
    "n": "Tenis Urban 101 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 201,
    "sold": 431,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2136216/1776965209WhatsApp%20Image%202026-04-22%20at%2012.11.59%20PM%20(1).jpeg",
    "v": [
      [
        2121113,
        "Avellana",
        "38"
      ],
      [
        2121110,
        "Avellana",
        "35"
      ],
      [
        2121111,
        "Avellana",
        "36"
      ],
      [
        2121112,
        "Avellana",
        "37"
      ],
      [
        2121114,
        "Avellana",
        "39"
      ],
      [
        2121115,
        "Avellana",
        "40"
      ],
      [
        2121116,
        "Beige",
        "35"
      ],
      [
        2121117,
        "Beige",
        "36"
      ],
      [
        2121118,
        "Beige",
        "37"
      ],
      [
        2121119,
        "Beige",
        "38"
      ],
      [
        2121120,
        "Beige",
        "39"
      ],
      [
        2121121,
        "Beige",
        "40"
      ],
      [
        2121122,
        "Negro",
        "35"
      ],
      [
        2121123,
        "Negro",
        "36"
      ],
      [
        2121124,
        "Negro",
        "37"
      ],
      [
        2121125,
        "Negro",
        "38"
      ],
      [
        2121126,
        "Negro",
        "39"
      ],
      [
        2121127,
        "Negro",
        "40"
      ],
      [
        2121128,
        "Blanco",
        "35"
      ],
      [
        2121129,
        "Blanco",
        "36"
      ],
      [
        2121130,
        "Blanco",
        "37"
      ],
      [
        2121131,
        "Blanco",
        "38"
      ],
      [
        2121132,
        "Blanco",
        "39"
      ],
      [
        2121133,
        "Blanco",
        "40"
      ]
    ]
  },
  {
    "id": 2098446,
    "n": "Tenis Classic 102",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 51,
    "sold": 401,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2098446/80fd63aa-a06d-4be6-bff6-bfe65805ec08.png",
    "v": [
      [
        2028875,
        "Blanco Verde",
        "41"
      ],
      [
        2028885,
        "Gris",
        "37"
      ],
      [
        2028891,
        "Gris",
        "43"
      ],
      [
        2028865,
        "Negro Suela Blanca",
        "38"
      ],
      [
        2028857,
        "Todo Negro",
        "37"
      ],
      [
        2028858,
        "Todo Negro",
        "38"
      ],
      [
        2028859,
        "Todo Negro",
        "39"
      ],
      [
        2028860,
        "Todo Negro",
        "40"
      ],
      [
        2028861,
        "Todo Negro",
        "41"
      ],
      [
        2028862,
        "Todo Negro",
        "42"
      ],
      [
        2028863,
        "Todo Negro",
        "43"
      ],
      [
        2028864,
        "Negro Suela Blanca",
        "37"
      ],
      [
        2028866,
        "Negro Suela Blanca",
        "39"
      ],
      [
        2028867,
        "Negro Suela Blanca",
        "40"
      ],
      [
        2028868,
        "Negro Suela Blanca",
        "41"
      ],
      [
        2028869,
        "Negro Suela Blanca",
        "42"
      ],
      [
        2028870,
        "Negro Suela Blanca",
        "43"
      ],
      [
        2028876,
        "Blanco Verde",
        "42"
      ],
      [
        2028877,
        "Blanco Verde",
        "43"
      ],
      [
        2028878,
        "Blanco Beige Azul Marino",
        "37"
      ],
      [
        2028879,
        "Blanco Beige Azul Marino",
        "38"
      ],
      [
        2028880,
        "Blanco Beige Azul Marino",
        "39"
      ],
      [
        2028881,
        "Blanco Beige Azul Marino",
        "40"
      ],
      [
        2028882,
        "Blanco Beige Azul Marino",
        "41"
      ],
      [
        2028883,
        "Blanco Beige Azul Marino",
        "42"
      ],
      [
        2028884,
        "Blanco Beige Azul Marino",
        "43"
      ],
      [
        2028886,
        "Gris",
        "38"
      ],
      [
        2028887,
        "Gris",
        "39"
      ],
      [
        2028890,
        "Gris",
        "42"
      ],
      [
        2028871,
        "Blanco Verde",
        "37"
      ],
      [
        2028872,
        "Blanco Verde",
        "38"
      ],
      [
        2028873,
        "Blanco Verde",
        "39"
      ],
      [
        2028874,
        "Blanco Verde",
        "40"
      ],
      [
        2028888,
        "Gris",
        "40"
      ],
      [
        2028889,
        "Gris",
        "41"
      ]
    ]
  },
  {
    "id": 2240701,
    "n": "Tenis Street 103",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 106,
    "sold": 196,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2240701/bbd6cc54-69c0-4da3-8ba0-32a2cc9f1f1d.png",
    "v": [
      [
        2332103,
        "Negro",
        "38"
      ],
      [
        2332104,
        "Negro",
        "39"
      ],
      [
        2332105,
        "Negro",
        "40"
      ],
      [
        2332082,
        "Blanco Rosa",
        "35"
      ],
      [
        2332083,
        "Blanco Rosa",
        "36"
      ],
      [
        2332084,
        "Blanco Rosa",
        "37"
      ],
      [
        2332085,
        "Blanco Rosa",
        "38"
      ],
      [
        2332086,
        "Blanco Rosa",
        "39"
      ],
      [
        2332087,
        "Blanco Rosa",
        "40"
      ],
      [
        2332088,
        "Blanco Menta",
        "35"
      ],
      [
        2332089,
        "Blanco Menta",
        "36"
      ],
      [
        2332090,
        "Blanco Menta",
        "37"
      ],
      [
        2332091,
        "Blanco Menta",
        "38"
      ],
      [
        2332092,
        "Blanco Menta",
        "39"
      ],
      [
        2332093,
        "Blanco Menta",
        "40"
      ],
      [
        2332094,
        "Blanco Naranja",
        "35"
      ],
      [
        2332095,
        "Blanco Naranja",
        "36"
      ],
      [
        2332096,
        "Blanco Naranja",
        "37"
      ],
      [
        2332097,
        "Blanco Naranja",
        "38"
      ],
      [
        2332098,
        "Blanco Naranja",
        "39"
      ],
      [
        2332099,
        "Blanco Naranja",
        "40"
      ],
      [
        2332100,
        "Negro",
        "35"
      ],
      [
        2332101,
        "Negro",
        "36"
      ],
      [
        2332102,
        "Negro",
        "37"
      ]
    ]
  },
  {
    "id": 2084763,
    "n": "Tenis Sport 104 Dama",
    "g": "m",
    "p": 114900,
    "o": 164900,
    "rate": 5,
    "rev": 48,
    "sold": 318,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2084763/17793071731771274325WhatsApp%20Image%202026-02-16%20at%2015.37.44-dropicup.png",
    "v": [
      [
        1997145,
        "Azul Gris",
        "38"
      ],
      [
        1997141,
        "Negro lila",
        "40"
      ],
      [
        1997146,
        "Azul Gris",
        "39"
      ],
      [
        1997150,
        "Azul negro",
        "37"
      ],
      [
        1997151,
        "Azul negro",
        "38"
      ],
      [
        1997153,
        "Azul negro",
        "40"
      ],
      [
        1997142,
        "Azul Gris",
        "35"
      ],
      [
        1997143,
        "Azul Gris",
        "36"
      ],
      [
        1997144,
        "Azul Gris",
        "37"
      ],
      [
        1997147,
        "Azul Gris",
        "40"
      ],
      [
        1997148,
        "Azul negro",
        "35"
      ],
      [
        1997149,
        "Azul negro",
        "36"
      ],
      [
        1997152,
        "Azul negro",
        "39"
      ],
      [
        1997154,
        "Gris Rosa",
        "35"
      ],
      [
        1997155,
        "Gris Rosa",
        "36"
      ],
      [
        1997156,
        "Gris Rosa",
        "37"
      ],
      [
        1997157,
        "Gris Rosa",
        "38"
      ],
      [
        1997158,
        "Gris Rosa",
        "39"
      ],
      [
        1997159,
        "Gris Rosa",
        "40"
      ],
      [
        1997136,
        "Negro lila",
        "35"
      ],
      [
        1997137,
        "Negro lila",
        "36"
      ],
      [
        1997138,
        "Negro lila",
        "37"
      ],
      [
        1997139,
        "Negro lila",
        "38"
      ],
      [
        1997140,
        "Negro lila",
        "39"
      ]
    ]
  },
  {
    "id": 1894166,
    "n": "Tenis Retro 105 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 71,
    "sold": 121,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1894166/1763228059sin-titulo-1699624116-multiverso-sport-1118051662%20(1).jpg",
    "v": [
      [
        1658728,
        "BLANCO",
        "36"
      ],
      [
        1658740,
        "BEIGE",
        "36"
      ],
      [
        1658742,
        "BEIGE",
        "38"
      ],
      [
        1658749,
        "MARRON",
        "39"
      ],
      [
        1658744,
        "BEIGE",
        "40"
      ],
      [
        1658738,
        "NEGRO",
        "40"
      ],
      [
        1658739,
        "BEIGE",
        "35"
      ],
      [
        1658745,
        "MARRON",
        "35"
      ],
      [
        1658727,
        "BLANCO",
        "35"
      ],
      [
        1658735,
        "NEGRO",
        "37"
      ],
      [
        1658736,
        "NEGRO",
        "38"
      ],
      [
        1658737,
        "NEGRO",
        "39"
      ],
      [
        1658747,
        "MARRON",
        "37"
      ],
      [
        1658741,
        "BEIGE",
        "37"
      ],
      [
        1658729,
        "BLANCO",
        "37"
      ],
      [
        1658730,
        "BLANCO",
        "38"
      ],
      [
        1658750,
        "MARRON",
        "40"
      ],
      [
        1658733,
        "NEGRO",
        "35"
      ],
      [
        1658734,
        "NEGRO",
        "36"
      ],
      [
        1658731,
        "BLANCO",
        "39"
      ],
      [
        1658732,
        "BLANCO",
        "40"
      ],
      [
        1658746,
        "MARRON",
        "36"
      ],
      [
        1658748,
        "MARRON",
        "38"
      ],
      [
        1658743,
        "BEIGE",
        "39"
      ]
    ]
  },
  {
    "id": 1836914,
    "n": "Tenis Flex 106 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 59,
    "sold": 329,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1836914/175337235117487195571727137081WhatsApp%20Image%202024-09-20%20at%2012.42.00%20PM%20(2)%20(2).jpeg",
    "v": [
      [
        1534944,
        "BLANCO VERDE",
        "38"
      ],
      [
        1534937,
        "BLANCO",
        "37"
      ],
      [
        1534936,
        "BLANCO",
        "36"
      ],
      [
        1534949,
        "BLANCO ESTAMPADO",
        "37"
      ],
      [
        1534950,
        "BLANCO ESTAMPADO",
        "38"
      ],
      [
        1534946,
        "BLANCO VERDE",
        "40"
      ],
      [
        1534947,
        "BLANCO ESTAMPADO",
        "35"
      ],
      [
        1534948,
        "BLANCO ESTAMPADO",
        "36"
      ],
      [
        1534951,
        "BLANCO ESTAMPADO",
        "39"
      ],
      [
        1534952,
        "BLANCO ESTAMPADO",
        "40"
      ],
      [
        1534939,
        "BLANCO",
        "39"
      ],
      [
        1534940,
        "BLANCO",
        "40"
      ],
      [
        1534945,
        "BLANCO VERDE",
        "39"
      ],
      [
        1534942,
        "BLANCO VERDE",
        "36"
      ],
      [
        1534943,
        "BLANCO VERDE",
        "37"
      ],
      [
        1534941,
        "BLANCO VERDE",
        "35"
      ],
      [
        1534938,
        "BLANCO",
        "38"
      ],
      [
        1534935,
        "BLANCO",
        "35"
      ]
    ]
  },
  {
    "id": 1988881,
    "n": "Tenis Runner 107 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 106,
    "sold": 316,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1988881/176263015217492232471740526803Imagen%20de%20WhatsApp%202025-02-25%20a%20las%2018.37.08_9540882a%20(1).jpg",
    "v": [
      [
        1839576,
        "NEGRO",
        "38"
      ],
      [
        1839577,
        "NEGRO",
        "39"
      ],
      [
        1839563,
        "BLANCO",
        "37"
      ],
      [
        1839561,
        "BLANCO",
        "35"
      ],
      [
        1839569,
        "DORADO",
        "37"
      ],
      [
        1839570,
        "DORADO",
        "38"
      ],
      [
        1839562,
        "BLANCO",
        "36"
      ],
      [
        1839564,
        "BLANCO",
        "38"
      ],
      [
        1839565,
        "BLANCO",
        "39"
      ],
      [
        1839567,
        "DORADO",
        "35"
      ],
      [
        1839568,
        "DORADO",
        "36"
      ],
      [
        1839571,
        "DORADO",
        "39"
      ],
      [
        1839572,
        "DORADO",
        "40"
      ],
      [
        1839573,
        "NEGRO",
        "35"
      ],
      [
        1839574,
        "NEGRO",
        "36"
      ],
      [
        1839575,
        "NEGRO",
        "37"
      ],
      [
        1839578,
        "NEGRO",
        "40"
      ],
      [
        1839566,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 1885200,
    "n": "Tenis Casual 108 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 105,
    "sold": 335,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885200/17793074581763241730171819907517019843041701984304WhatsApp%20Image%202023-03-29%20at%204.06.51%20PM%20(1)%20(1)-dropicup.png",
    "v": [
      [
        1637959,
        "BLANCO",
        "38"
      ],
      [
        1637957,
        "BLANCO",
        "36"
      ],
      [
        1637963,
        "NEGRO",
        "36"
      ],
      [
        1637971,
        "BEIGE",
        "38"
      ],
      [
        1637962,
        "NEGRO",
        "35"
      ],
      [
        1637966,
        "NEGRO",
        "39"
      ],
      [
        1637972,
        "BEIGE",
        "39"
      ],
      [
        1637973,
        "BEIGE",
        "40"
      ],
      [
        1637961,
        "BLANCO",
        "40"
      ],
      [
        1637964,
        "NEGRO",
        "37"
      ],
      [
        1637970,
        "BEIGE",
        "37"
      ],
      [
        1637969,
        "BEIGE",
        "36"
      ],
      [
        1637965,
        "NEGRO",
        "38"
      ],
      [
        1637967,
        "NEGRO",
        "40"
      ],
      [
        1637956,
        "BLANCO",
        "35"
      ],
      [
        1637958,
        "BLANCO",
        "37"
      ],
      [
        1637960,
        "BLANCO",
        "39"
      ],
      [
        1637968,
        "BEIGE",
        "35"
      ]
    ]
  },
  {
    "id": 1890692,
    "n": "Tenis Prime 109 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 197,
    "sold": 387,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1890692/177930665217540855701724681837WhatsApp%20Image%202024-08-26%20at%209.14.51%20AM-dropicup.png",
    "v": [
      [
        1650461,
        "",
        "40"
      ],
      [
        1650458,
        "",
        "37"
      ],
      [
        1650460,
        "",
        "39"
      ],
      [
        1650459,
        "",
        "38"
      ],
      [
        1650430,
        "",
        "37"
      ],
      [
        1650463,
        "",
        "42"
      ],
      [
        1650440,
        "",
        "40"
      ],
      [
        1650441,
        "",
        "41"
      ],
      [
        1650442,
        "",
        "42"
      ],
      [
        1650444,
        "",
        "37"
      ],
      [
        1650445,
        "",
        "38"
      ],
      [
        1650446,
        "",
        "39"
      ],
      [
        1650432,
        "",
        "39"
      ],
      [
        1650462,
        "",
        "41"
      ],
      [
        1650434,
        "",
        "41"
      ],
      [
        1650447,
        "",
        "40"
      ],
      [
        1650448,
        "",
        "41"
      ],
      [
        1650449,
        "",
        "42"
      ],
      [
        1650435,
        "",
        "42"
      ],
      [
        1650437,
        "",
        "37"
      ],
      [
        1650431,
        "",
        "38"
      ],
      [
        1650433,
        "",
        "40"
      ],
      [
        1650438,
        "",
        "38"
      ],
      [
        1650439,
        "",
        "39"
      ]
    ]
  },
  {
    "id": 1888479,
    "n": "Tenis Active 110 Dama",
    "g": "m",
    "p": 114900,
    "o": 164900,
    "rate": 5,
    "rev": 144,
    "sold": 214,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1888479/17538957551752782387WhatsApp%20Image%202025-07-17%20at%202.09.38%20PM%20(3).jpeg",
    "v": [
      [
        1645655,
        "NEGRO",
        "37"
      ],
      [
        1645653,
        "NEGRO",
        "35"
      ],
      [
        1645665,
        "GRIS",
        "35"
      ],
      [
        1645656,
        "NEGRO",
        "38"
      ],
      [
        1645654,
        "NEGRO",
        "36"
      ],
      [
        1645669,
        "GRIS",
        "39"
      ],
      [
        1645668,
        "GRIS",
        "38"
      ],
      [
        1645661,
        "AZUL",
        "37"
      ],
      [
        1645660,
        "AZUL",
        "36"
      ],
      [
        1645659,
        "AZUL",
        "35"
      ],
      [
        1645658,
        "NEGRO",
        "40"
      ],
      [
        1645664,
        "AZUL",
        "40"
      ],
      [
        1645663,
        "AZUL",
        "39"
      ],
      [
        1645670,
        "GRIS",
        "40"
      ],
      [
        1645667,
        "GRIS",
        "37"
      ],
      [
        1645666,
        "GRIS",
        "36"
      ],
      [
        1645657,
        "NEGRO",
        "39"
      ],
      [
        1645662,
        "AZUL",
        "38"
      ]
    ]
  },
  {
    "id": 1883997,
    "n": "Tenis Urban 111 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 162,
    "sold": 152,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1883997/17533751331739291125WhatsApp%20Image%202025-02-11%20at%2012.01.37.jpeg",
    "v": [
      [
        1634164,
        "BLANCO MULTICOLOR",
        "39"
      ],
      [
        1634160,
        "BLANCO NEGRO",
        "38"
      ],
      [
        1634153,
        "BLANCO",
        "35"
      ],
      [
        1634161,
        "BLANCO MULTICOLOR",
        "38"
      ],
      [
        1634151,
        "BLANCO NEGRO",
        "35"
      ],
      [
        1634152,
        "BLANCO MULTICOLOR",
        "35"
      ],
      [
        1634154,
        "BLANCO NEGRO",
        "36"
      ],
      [
        1634155,
        "BLANCO MULTICOLOR",
        "36"
      ],
      [
        1634156,
        "BLANCO",
        "36"
      ],
      [
        1634157,
        "BLANCO NEGRO",
        "37"
      ],
      [
        1634158,
        "BLANCO MULTICOLOR",
        "37"
      ],
      [
        1634159,
        "BLANCO",
        "37"
      ],
      [
        1634162,
        "BLANCO",
        "38"
      ],
      [
        1634163,
        "BLANCO NEGRO",
        "39"
      ],
      [
        1634167,
        "BLANCO MULTICOLOR",
        "40"
      ],
      [
        1634166,
        "BLANCO NEGRO",
        "40"
      ],
      [
        1634165,
        "BLANCO",
        "39"
      ],
      [
        1634168,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 1887648,
    "n": "Tenis Classic 112 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 213,
    "sold": 403,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1887648/17538218951730495280Imagen%20de%20WhatsApp%202024-11-01%20a%20las%2015.53.26_c9c5799d%20(1).jpg",
    "v": [
      [
        1644480,
        "BLANCO NEGRO",
        "35"
      ],
      [
        1644487,
        "BLANCO VERDE",
        "36"
      ],
      [
        1644489,
        "BLANCO VERDE",
        "38"
      ],
      [
        1644474,
        "NEGRO",
        "35"
      ],
      [
        1644482,
        "BLANCO NEGRO",
        "37"
      ],
      [
        1644476,
        "NEGRO",
        "37"
      ],
      [
        1644475,
        "NEGRO",
        "36"
      ],
      [
        1644477,
        "NEGRO",
        "38"
      ],
      [
        1644481,
        "BLANCO NEGRO",
        "36"
      ],
      [
        1644484,
        "BLANCO NEGRO",
        "39"
      ],
      [
        1644485,
        "BLANCO NEGRO",
        "40"
      ],
      [
        1644486,
        "BLANCO VERDE",
        "35"
      ],
      [
        1644488,
        "BLANCO VERDE",
        "37"
      ],
      [
        1644490,
        "BLANCO VERDE",
        "39"
      ],
      [
        1644483,
        "BLANCO NEGRO",
        "38"
      ],
      [
        1644478,
        "NEGRO",
        "39"
      ],
      [
        1644479,
        "NEGRO",
        "40"
      ],
      [
        1644491,
        "BLANCO VERDE",
        "40"
      ]
    ]
  },
  {
    "id": 1217357,
    "n": "Tenis Street 113 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 62,
    "sold": 252,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1217357/1726696484WhatsApp%20Image%202024-09-17%20at%207.35.51%20PM%20(1).jpeg",
    "v": [
      [
        898322,
        "",
        "38"
      ],
      [
        898323,
        "",
        "39"
      ],
      [
        898324,
        "",
        "40"
      ],
      [
        898325,
        "",
        "41"
      ],
      [
        898326,
        "",
        "42"
      ],
      [
        898327,
        "",
        "43"
      ],
      [
        898321,
        "",
        "37"
      ]
    ]
  },
  {
    "id": 1899617,
    "n": "Tenis Sport 114",
    "g": "u",
    "p": 139900,
    "o": 199900,
    "rate": 4.8,
    "rev": 122,
    "sold": 132,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1899617/175513200034.jpg",
    "v": [
      [
        1672093,
        "BLANCO",
        "38"
      ],
      [
        1672105,
        "BLANCO",
        "41"
      ],
      [
        1672090,
        "NEGRO",
        "37"
      ],
      [
        1672094,
        "NEGRO",
        "38"
      ],
      [
        2065385,
        "AZUL",
        "40"
      ],
      [
        2065383,
        "AZUL",
        "38"
      ],
      [
        1859937,
        "NEGRO",
        "35"
      ],
      [
        1672087,
        "BLANCO/NEGRO",
        "36"
      ],
      [
        1672085,
        "BLANCO",
        "36"
      ],
      [
        1672089,
        "BLANCO",
        "37"
      ],
      [
        1672100,
        "BEIGE",
        "39"
      ],
      [
        1672091,
        "BLANCO/NEGRO",
        "37"
      ],
      [
        1672095,
        "BLANCO/NEGRO",
        "38"
      ],
      [
        2065372,
        "VERDE",
        "35"
      ],
      [
        2065373,
        "VERDE",
        "36"
      ],
      [
        2065378,
        "VERDE",
        "41"
      ],
      [
        1672114,
        "NEGRO",
        "43"
      ],
      [
        1672115,
        "BLANCO/NEGRO",
        "43"
      ],
      [
        2065382,
        "AZUL",
        "37"
      ],
      [
        1672113,
        "BLANCO",
        "43"
      ],
      [
        2065387,
        "AZUL",
        "42"
      ],
      [
        1859938,
        "BLANCO",
        "35"
      ],
      [
        1672096,
        "BEIGE",
        "38"
      ],
      [
        1672111,
        "BLANCO/NEGRO",
        "42"
      ],
      [
        1672102,
        "NEGRO",
        "40"
      ],
      [
        1672097,
        "BLANCO",
        "39"
      ],
      [
        1672104,
        "BEIGE",
        "40"
      ],
      [
        1672099,
        "BLANCO/NEGRO",
        "39"
      ],
      [
        1672109,
        "BLANCO",
        "42"
      ],
      [
        1672110,
        "NEGRO",
        "42"
      ],
      [
        1672098,
        "NEGRO",
        "39"
      ],
      [
        1672106,
        "NEGRO",
        "41"
      ],
      [
        1859936,
        "BLANCO/NEGRO",
        "35"
      ],
      [
        1672117,
        "BLANCO",
        "44"
      ],
      [
        2065386,
        "AZUL",
        "41"
      ],
      [
        1672092,
        "BEIGE",
        "37"
      ],
      [
        2065384,
        "AZUL",
        "39"
      ],
      [
        2065374,
        "VERDE",
        "37"
      ],
      [
        2065381,
        "AZUL",
        "36"
      ],
      [
        1672103,
        "BLANCO/NEGRO",
        "40"
      ],
      [
        2144455,
        "AZUL",
        "43"
      ],
      [
        2065375,
        "VERDE",
        "38"
      ],
      [
        1672116,
        "BEIGE",
        "43"
      ],
      [
        1672086,
        "NEGRO",
        "36"
      ],
      [
        1672107,
        "BLANCO/NEGRO",
        "41"
      ],
      [
        2065379,
        "VERDE",
        "42"
      ]
    ]
  },
  {
    "id": 1885880,
    "n": "Bota Retro 115",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 65,
    "sold": 335,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885880/17535562521726157841WhatsApp%20Image%202024-09-12%20at%209.23.51%20AM.jpeg",
    "v": [
      [
        1639445,
        "BLANCO",
        "35"
      ],
      [
        1639433,
        "ROJO",
        "35"
      ],
      [
        1639434,
        "ROJO",
        "36"
      ],
      [
        1639435,
        "ROJO",
        "37"
      ],
      [
        1639436,
        "ROJO",
        "38"
      ],
      [
        1639437,
        "ROJO",
        "39"
      ],
      [
        1639438,
        "ROJO",
        "40"
      ],
      [
        1639439,
        "NEGRO",
        "35"
      ],
      [
        1639440,
        "NEGRO",
        "36"
      ],
      [
        1639443,
        "NEGRO",
        "39"
      ],
      [
        1639444,
        "NEGRO",
        "40"
      ],
      [
        1639446,
        "BLANCO",
        "36"
      ],
      [
        1639447,
        "BLANCO",
        "37"
      ],
      [
        1639448,
        "BLANCO",
        "38"
      ],
      [
        1639449,
        "BLANCO",
        "39"
      ],
      [
        1639450,
        "BLANCO",
        "40"
      ],
      [
        1639442,
        "NEGRO",
        "38"
      ],
      [
        1639441,
        "NEGRO",
        "37"
      ]
    ]
  },
  {
    "id": 2103645,
    "n": "Bota Flex 116",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 210,
    "sold": 160,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2103645/1779041293171690.jpg",
    "v": [
      [
        2041780,
        "Negro Verde Oliva",
        "37"
      ],
      [
        2041779,
        "Negro Gris",
        "43"
      ],
      [
        2041787,
        "Negro Marron",
        "37"
      ],
      [
        2041778,
        "Negro Gris",
        "42"
      ],
      [
        2041766,
        "Naranja",
        "37"
      ],
      [
        2041774,
        "Negro Gris",
        "38"
      ],
      [
        2041771,
        "Naranja",
        "42"
      ],
      [
        2041772,
        "Naranja",
        "43"
      ],
      [
        2041773,
        "Negro Gris",
        "37"
      ],
      [
        2041775,
        "Negro Gris",
        "39"
      ],
      [
        2041776,
        "Negro Gris",
        "40"
      ],
      [
        2041777,
        "Negro Gris",
        "41"
      ],
      [
        2041770,
        "Naranja",
        "41"
      ],
      [
        2041782,
        "Negro Verde Oliva",
        "39"
      ],
      [
        2041783,
        "Negro Verde Oliva",
        "40"
      ],
      [
        2041784,
        "Negro Verde Oliva",
        "41"
      ],
      [
        2041785,
        "Negro Verde Oliva",
        "42"
      ],
      [
        2041786,
        "Negro Verde Oliva",
        "43"
      ],
      [
        2041789,
        "Negro Marron",
        "39"
      ],
      [
        2041790,
        "Negro Marron",
        "40"
      ],
      [
        2041791,
        "Negro Marron",
        "41"
      ],
      [
        2041767,
        "Naranja",
        "38"
      ],
      [
        2041768,
        "Naranja",
        "39"
      ],
      [
        2041769,
        "Naranja",
        "40"
      ],
      [
        2041781,
        "Negro Verde Oliva",
        "38"
      ],
      [
        2041788,
        "Negro Marron",
        "38"
      ],
      [
        2041792,
        "Negro Marron",
        "42"
      ],
      [
        2041793,
        "Negro Marron",
        "43"
      ],
      [
        2354347,
        "Negro",
        "37"
      ],
      [
        2354348,
        "Negro",
        "38"
      ],
      [
        2354349,
        "Negro",
        "39"
      ],
      [
        2354350,
        "Negro",
        "40"
      ],
      [
        2354351,
        "Negro",
        "41"
      ],
      [
        2354352,
        "Negro",
        "42"
      ],
      [
        2354353,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 2162038,
    "n": "Tenis Runner 117 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 103,
    "sold": 413,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2162038/dac80525-801a-4922-9227-f1f743ad6a53.png",
    "v": [
      [
        2177109,
        "Negro",
        "38"
      ],
      [
        2177110,
        "Negro",
        "39"
      ],
      [
        2177127,
        "Azul Marino",
        "42"
      ],
      [
        2177131,
        "Crema Naranja",
        "39"
      ],
      [
        2177132,
        "Crema Naranja",
        "40"
      ],
      [
        2177133,
        "Crema Naranja",
        "41"
      ],
      [
        2177134,
        "Crema Naranja",
        "42"
      ],
      [
        2177135,
        "Crema Naranja",
        "43"
      ],
      [
        2177108,
        "Negro",
        "37"
      ],
      [
        2177111,
        "Negro",
        "40"
      ],
      [
        2177112,
        "Negro",
        "41"
      ],
      [
        2177113,
        "Negro",
        "42"
      ],
      [
        2177114,
        "Negro",
        "43"
      ],
      [
        2177115,
        "Blanco",
        "37"
      ],
      [
        2177116,
        "Blanco",
        "38"
      ],
      [
        2177117,
        "Blanco",
        "39"
      ],
      [
        2177118,
        "Blanco",
        "40"
      ],
      [
        2177119,
        "Blanco",
        "41"
      ],
      [
        2177120,
        "Blanco",
        "42"
      ],
      [
        2177121,
        "Blanco",
        "43"
      ],
      [
        2177122,
        "Azul Marino",
        "37"
      ],
      [
        2177123,
        "Azul Marino",
        "38"
      ],
      [
        2177124,
        "Azul Marino",
        "39"
      ],
      [
        2177125,
        "Azul Marino",
        "40"
      ],
      [
        2177128,
        "Azul Marino",
        "43"
      ],
      [
        2177129,
        "Crema Naranja",
        "37"
      ],
      [
        2177130,
        "Crema Naranja",
        "38"
      ],
      [
        2177126,
        "Azul Marino",
        "41"
      ]
    ]
  },
  {
    "id": 2074465,
    "n": "Tenis Casual 118",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 190,
    "sold": 220,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2074465/bbf643e8-f43f-4293-9483-4a60973e4390.png",
    "v": [
      [
        1971387,
        "Blanco Azul",
        "40"
      ],
      [
        1971394,
        "Blanco Verde",
        "38"
      ],
      [
        1971388,
        "Blanco Azul",
        "41"
      ],
      [
        1971392,
        "Blanco Verde",
        "36"
      ],
      [
        1971393,
        "Blanco Verde",
        "37"
      ],
      [
        1971395,
        "Blanco Verde",
        "39"
      ],
      [
        1971396,
        "Blanco Verde",
        "40"
      ],
      [
        1971403,
        "Blanco Amarillo Naranja",
        "38"
      ],
      [
        1971404,
        "Blanco Amarillo Naranja",
        "39"
      ],
      [
        1971405,
        "Blanco Amarillo Naranja",
        "40"
      ],
      [
        1971406,
        "Blanco Amarillo Naranja",
        "41"
      ],
      [
        1971407,
        "Blanco Amarillo Naranja",
        "42"
      ],
      [
        1971408,
        "Blanco Amarillo Naranja",
        "43"
      ],
      [
        1971373,
        "Negro",
        "35"
      ],
      [
        1971374,
        "Negro",
        "36"
      ],
      [
        1971375,
        "Negro",
        "37"
      ],
      [
        1971376,
        "Negro",
        "38"
      ],
      [
        1971377,
        "Negro",
        "39"
      ],
      [
        1971378,
        "Negro",
        "40"
      ],
      [
        1971379,
        "Negro",
        "41"
      ],
      [
        1971382,
        "Blanco Azul",
        "35"
      ],
      [
        1971384,
        "Blanco Azul",
        "37"
      ],
      [
        1971385,
        "Blanco Azul",
        "38"
      ],
      [
        1971386,
        "Blanco Azul",
        "39"
      ],
      [
        1971389,
        "Blanco Azul",
        "42"
      ],
      [
        1971390,
        "Blanco Azul",
        "43"
      ],
      [
        1971391,
        "Blanco Verde",
        "35"
      ],
      [
        1971383,
        "Blanco Azul",
        "36"
      ],
      [
        1971380,
        "Negro",
        "42"
      ],
      [
        1971381,
        "Negro",
        "43"
      ],
      [
        1971397,
        "Blanco Verde",
        "41"
      ],
      [
        1971398,
        "Blanco Verde",
        "42"
      ],
      [
        1971399,
        "Blanco Verde",
        "43"
      ],
      [
        1971400,
        "Blanco Amarillo Naranja",
        "35"
      ],
      [
        1971401,
        "Blanco Amarillo Naranja",
        "36"
      ],
      [
        1971402,
        "Blanco Amarillo Naranja",
        "37"
      ]
    ]
  },
  {
    "id": 2160742,
    "n": "Tenis Prime 119 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 67,
    "sold": 137,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2160742/1779844711WhatsApp%20Image%202026-05-26%20at%208.07.15%20PM%20(11).jpeg",
    "v": [
      [
        2173028,
        "Negro",
        "42"
      ],
      [
        2173029,
        "Negro",
        "43"
      ],
      [
        2173023,
        "Negro",
        "37"
      ],
      [
        2173024,
        "Negro",
        "38"
      ],
      [
        2173025,
        "Negro",
        "39"
      ],
      [
        2173026,
        "Negro",
        "40"
      ],
      [
        2173027,
        "Negro",
        "41"
      ]
    ]
  },
  {
    "id": 1217285,
    "n": "Tenis Active 120 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 170,
    "sold": 180,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1217285/1726695977WhatsApp%20Image%202024-09-17%20at%207.35.51%20PM%20(3).jpeg",
    "v": [
      [
        898294,
        "",
        "38"
      ],
      [
        898293,
        "",
        "37"
      ],
      [
        898295,
        "",
        "39"
      ],
      [
        898296,
        "",
        "40"
      ],
      [
        898297,
        "",
        "41"
      ],
      [
        898298,
        "",
        "42"
      ],
      [
        898299,
        "",
        "43"
      ]
    ]
  },
  {
    "id": 2180905,
    "n": "Tenis Urban 121 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 70,
    "sold": 240,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2180905/1781836123WhatsApp%20Image%202026-06-18%20at%202.43.10%20PM%20(2).jpeg",
    "v": [
      [
        2216872,
        "Negro",
        "41"
      ],
      [
        2216873,
        "Negro",
        "42"
      ],
      [
        2216874,
        "Negro",
        "43"
      ],
      [
        2216868,
        "Negro",
        "37"
      ],
      [
        2216869,
        "Negro",
        "38"
      ],
      [
        2216870,
        "Negro",
        "39"
      ],
      [
        2216871,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 1804685,
    "n": "Tenis Classic 122 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 50,
    "sold": 400,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1804685/1746249817WhatsApp%20Image%202025-05-02%20at%203.48.44%20PM%20(2).jpeg",
    "v": [
      [
        1477617,
        "",
        "41"
      ],
      [
        1477619,
        "",
        "43"
      ],
      [
        1477618,
        "",
        "42"
      ],
      [
        1477616,
        "",
        "40"
      ],
      [
        1477615,
        "",
        "39"
      ],
      [
        1477614,
        "",
        "38"
      ],
      [
        1477613,
        "",
        "37"
      ]
    ]
  },
  {
    "id": 2031795,
    "n": "Tenis Street 123",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 180,
    "sold": 390,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2031795/1767754710WhatsApp%20Image%202026-01-06%20at%209.25.03%20PM%20(2).jpeg",
    "v": [
      [
        1896639,
        "",
        "37"
      ],
      [
        1896640,
        "",
        "38"
      ],
      [
        1896641,
        "",
        "39"
      ],
      [
        1896642,
        "",
        "40"
      ],
      [
        1896643,
        "",
        "41"
      ],
      [
        1896644,
        "",
        "42"
      ],
      [
        1896645,
        "",
        "43"
      ]
    ]
  },
  {
    "id": 2029242,
    "n": "Tenis Sport 124 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 147,
    "sold": 217,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2029242/17793098171772160377WhatsApp%20Image%202026-02-26%20at%2020.03.26%20(2).jpeg",
    "v": [
      [
        1892441,
        "DORADO",
        "37"
      ],
      [
        1892442,
        "DORADO",
        "38"
      ],
      [
        1892443,
        "DORADO",
        "39"
      ],
      [
        1892433,
        "NEGRO",
        "35"
      ],
      [
        1892436,
        "NEGRO",
        "38"
      ],
      [
        1892444,
        "DORADO",
        "40"
      ],
      [
        1892427,
        "BLANCO",
        "35"
      ],
      [
        1892428,
        "BLANCO",
        "36"
      ],
      [
        1892429,
        "BLANCO",
        "37"
      ],
      [
        1892430,
        "BLANCO",
        "38"
      ],
      [
        1892431,
        "BLANCO",
        "39"
      ],
      [
        1892432,
        "BLANCO",
        "40"
      ],
      [
        1892434,
        "NEGRO",
        "36"
      ],
      [
        1892435,
        "NEGRO",
        "37"
      ],
      [
        1892437,
        "NEGRO",
        "39"
      ],
      [
        1892438,
        "NEGRO",
        "40"
      ],
      [
        1892439,
        "DORADO",
        "35"
      ],
      [
        1892440,
        "DORADO",
        "36"
      ]
    ]
  },
  {
    "id": 2140674,
    "n": "Tenis Retro 125 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 159,
    "sold": 129,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2140674/1777409826WhatsApp%20Image%202026-04-27%20at%203.47.18%20PM%20(2).jpeg",
    "v": [
      [
        2130150,
        "Blanco Rojo",
        "40"
      ],
      [
        2130151,
        "Blanco Plateado",
        "35"
      ],
      [
        2130155,
        "Blanco Plateado",
        "39"
      ],
      [
        2130157,
        "Blanco Negro",
        "35"
      ],
      [
        2130158,
        "Blanco Negro",
        "36"
      ],
      [
        2130159,
        "Blanco Negro",
        "37"
      ],
      [
        2130160,
        "Blanco Negro",
        "38"
      ],
      [
        2130161,
        "Blanco Negro",
        "39"
      ],
      [
        2130162,
        "Blanco Negro",
        "40"
      ],
      [
        2130142,
        "Negro",
        "38"
      ],
      [
        2130143,
        "Negro",
        "39"
      ],
      [
        2130144,
        "Negro",
        "40"
      ],
      [
        2130145,
        "Blanco Rojo",
        "35"
      ],
      [
        2130146,
        "Blanco Rojo",
        "36"
      ],
      [
        2130147,
        "Blanco Rojo",
        "37"
      ],
      [
        2130148,
        "Blanco Rojo",
        "38"
      ],
      [
        2130149,
        "Blanco Rojo",
        "39"
      ],
      [
        2130152,
        "Blanco Plateado",
        "36"
      ],
      [
        2130153,
        "Blanco Plateado",
        "37"
      ],
      [
        2130154,
        "Blanco Plateado",
        "38"
      ],
      [
        2130156,
        "Blanco Plateado",
        "40"
      ],
      [
        2130139,
        "Negro",
        "35"
      ],
      [
        2130140,
        "Negro",
        "36"
      ],
      [
        2130141,
        "Negro",
        "37"
      ]
    ]
  },
  {
    "id": 1922608,
    "n": "Tenis Flex 126 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 73,
    "sold": 343,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1922608/1757566596WhatsApp%20Image%202025-09-08%20at%203.52.35%20PM%20(2).jpeg",
    "v": [
      [
        1721408,
        "",
        "38"
      ],
      [
        1721409,
        "",
        "39"
      ],
      [
        1721407,
        "",
        "37"
      ],
      [
        1721410,
        "",
        "40"
      ],
      [
        1721411,
        "",
        "41"
      ],
      [
        1721412,
        "",
        "42"
      ],
      [
        1721413,
        "",
        "43"
      ]
    ]
  },
  {
    "id": 2149946,
    "n": "Tenis Runner 127 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 71,
    "sold": 221,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2149946/1778643996WhatsApp%20Image%202026-05-10%20at%207.56.07%20PM.jpeg",
    "v": [
      [
        2151557,
        "GRIS",
        "37"
      ],
      [
        2151558,
        "GRIS",
        "38"
      ],
      [
        2151559,
        "GRIS",
        "39"
      ],
      [
        2151560,
        "GRIS",
        "40"
      ],
      [
        2151561,
        "GRIS",
        "41"
      ],
      [
        2151562,
        "GRIS",
        "42"
      ],
      [
        2151563,
        "GRIS",
        "43"
      ]
    ]
  },
  {
    "id": 2133872,
    "n": "Tenis Casual 128",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 197,
    "sold": 127,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2133872/1776747462WhatsApp%20Image%202026-04-20%20at%206.53.21%20PM%20(7).jpeg",
    "v": [
      [
        2115943,
        "Rojo",
        "37"
      ],
      [
        2115944,
        "Rojo",
        "38"
      ],
      [
        2115945,
        "Rojo",
        "39"
      ],
      [
        2115946,
        "Rojo",
        "40"
      ],
      [
        2115947,
        "Rojo",
        "41"
      ],
      [
        2115948,
        "Rojo",
        "42"
      ],
      [
        2115949,
        "Rojo",
        "43"
      ]
    ]
  },
  {
    "id": 1844425,
    "n": "Tenis Prime 129",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 190,
    "sold": 360,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1844425/172360c3-0c32-45c6-805c-6e94e587ff90.png",
    "v": [
      [
        1549225,
        "Negro Suela Blanca",
        "41"
      ],
      [
        1549224,
        "Negro Suela Blanca",
        "40"
      ],
      [
        1549223,
        "Negro Suela Blanca",
        "39"
      ],
      [
        1549222,
        "Negro Suela Blanca",
        "38"
      ],
      [
        1549221,
        "Negro Suela Blanca",
        "37"
      ],
      [
        1549220,
        "Negro Suela Blanca",
        "36"
      ],
      [
        1549219,
        "Negro Suela Blanca",
        "35"
      ],
      [
        1549218,
        "Blanco Línea Negra",
        "43"
      ],
      [
        1549217,
        "Blanco Línea Negra",
        "42"
      ],
      [
        1549216,
        "Blanco Línea Negra",
        "41"
      ],
      [
        1549215,
        "Blanco Línea Negra",
        "40"
      ],
      [
        1549214,
        "Blanco Línea Negra",
        "39"
      ],
      [
        1549213,
        "Blanco Línea Negra",
        "38"
      ],
      [
        1549212,
        "Blanco Línea Negra",
        "37"
      ],
      [
        1549211,
        "Blanco Línea Negra",
        "36"
      ],
      [
        1549210,
        "Blanco Línea Negra",
        "35"
      ],
      [
        1549200,
        "Todo Negro",
        "43"
      ],
      [
        1549199,
        "Todo Negro",
        "42"
      ],
      [
        1549198,
        "Todo Negro",
        "41"
      ],
      [
        1549197,
        "Todo Negro",
        "40"
      ],
      [
        1549196,
        "Todo Negro",
        "39"
      ],
      [
        1549195,
        "Todo Negro",
        "38"
      ],
      [
        1549194,
        "Todo Negro",
        "37"
      ],
      [
        1549192,
        "Todo Negro",
        "35"
      ],
      [
        1549191,
        "Todo Blanco",
        "43"
      ],
      [
        1549190,
        "Todo Blanco",
        "42"
      ],
      [
        1549189,
        "Todo Blanco",
        "41"
      ],
      [
        1549188,
        "Todo Blanco",
        "40"
      ],
      [
        1549187,
        "Todo Blanco",
        "39"
      ],
      [
        1549186,
        "Todo Blanco",
        "38"
      ],
      [
        1549185,
        "Todo Blanco",
        "37"
      ],
      [
        1549183,
        "Todo Blanco",
        "35"
      ],
      [
        1549226,
        "Negro Suela Blanca",
        "42"
      ],
      [
        1549193,
        "Todo Negro",
        "36"
      ],
      [
        1549184,
        "Todo Blanco",
        "36"
      ],
      [
        1549227,
        "Negro Suela Blanca",
        "43"
      ]
    ]
  },
  {
    "id": 2149943,
    "n": "Tenis Active 130 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 68,
    "sold": 218,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2149943/1778643590WhatsApp%20Image%202026-05-10%20at%207.56.07%20PM%20(1).jpeg",
    "v": [
      [
        2151550,
        "NEGRO GRIS",
        "37"
      ],
      [
        2151551,
        "NEGRO GRIS",
        "38"
      ],
      [
        2151552,
        "NEGRO GRIS",
        "39"
      ],
      [
        2151553,
        "NEGRO GRIS",
        "40"
      ],
      [
        2151554,
        "NEGRO GRIS",
        "41"
      ],
      [
        2151555,
        "NEGRO GRIS",
        "42"
      ],
      [
        2151556,
        "NEGRO GRIS",
        "43"
      ]
    ]
  },
  {
    "id": 888502,
    "n": "Tenis Urban 131 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 67,
    "sold": 177,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/888502/1716661355WhatsApp%20Image%202024-05-24%20at%206.33.13%20PM%20(2).jpeg",
    "v": [
      [
        615348,
        "Negro/Gris",
        "40"
      ],
      [
        615345,
        "Negro/Gris",
        "37"
      ],
      [
        615346,
        "Negro/Gris",
        "38"
      ],
      [
        615349,
        "Negro/Gris",
        "41"
      ],
      [
        615347,
        "Negro/Gris",
        "39"
      ],
      [
        615350,
        "Negro/Gris",
        "42"
      ],
      [
        615351,
        "Negro/Gris",
        "43"
      ]
    ]
  },
  {
    "id": 2132249,
    "n": "Tenis Classic 132 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 194,
    "sold": 204,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2132249/1776481403WhatsApp%20Image%202026-04-14%20at%201.22.25%20PM%20(2).jpeg",
    "v": [
      [
        2111053,
        "Azul",
        "42"
      ],
      [
        2111054,
        "Azul",
        "43"
      ],
      [
        2111048,
        "Azul",
        "37"
      ],
      [
        2111049,
        "Azul",
        "38"
      ],
      [
        2111051,
        "Azul",
        "40"
      ],
      [
        2111052,
        "Azul",
        "41"
      ],
      [
        2111050,
        "Azul",
        "39"
      ]
    ]
  },
  {
    "id": 2282695,
    "n": "Tenis Street 133 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 160,
    "sold": 370,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2282695/7ebe5be7-09ae-4014-8393-c3fc0d374e8e.png",
    "v": [
      [
        2390599,
        "Negro Blanco",
        "38"
      ],
      [
        2390600,
        "Negro Blanco",
        "39"
      ],
      [
        2390601,
        "Negro Blanco",
        "40"
      ],
      [
        2390602,
        "Negro Blanco",
        "41"
      ],
      [
        2390603,
        "Negro Blanco",
        "42"
      ],
      [
        2390604,
        "Negro Blanco",
        "43"
      ],
      [
        2390605,
        "Negro Rojo",
        "37"
      ],
      [
        2390606,
        "Negro Rojo",
        "38"
      ],
      [
        2390607,
        "Negro Rojo",
        "39"
      ],
      [
        2390608,
        "Negro Rojo",
        "40"
      ],
      [
        2390609,
        "Negro Rojo",
        "41"
      ],
      [
        2390610,
        "Negro Rojo",
        "42"
      ],
      [
        2390611,
        "Negro Rojo",
        "43"
      ],
      [
        2390591,
        "Azul Marino",
        "37"
      ],
      [
        2390592,
        "Azul Marino",
        "38"
      ],
      [
        2390593,
        "Azul Marino",
        "39"
      ],
      [
        2390594,
        "Azul Marino",
        "40"
      ],
      [
        2390595,
        "Azul Marino",
        "41"
      ],
      [
        2390596,
        "Azul Marino",
        "42"
      ],
      [
        2390597,
        "Azul Marino",
        "43"
      ],
      [
        2390598,
        "Negro Blanco",
        "37"
      ]
    ]
  },
  {
    "id": 1890662,
    "n": "Tenis Sport 134 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 167,
    "sold": 357,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1890662/935d9d65-38ed-485d-a62b-fc8965acf6c8.gif",
    "v": [
      [
        1650303,
        "ROJO",
        "39"
      ],
      [
        1650299,
        "ROJO",
        "35"
      ],
      [
        1650298,
        "NEGRO",
        "40"
      ],
      [
        1650300,
        "ROJO",
        "36"
      ],
      [
        1650295,
        "NEGRO",
        "37"
      ],
      [
        1650294,
        "NEGRO",
        "36"
      ],
      [
        1650293,
        "NEGRO",
        "35"
      ],
      [
        1650292,
        "NEGRO BLANCO",
        "40"
      ],
      [
        1650291,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1650290,
        "NEGRO BLANCO",
        "38"
      ],
      [
        1650289,
        "NEGRO BLANCO",
        "37"
      ],
      [
        1650309,
        "AZUL",
        "39"
      ],
      [
        1650308,
        "AZUL",
        "38"
      ],
      [
        1650307,
        "AZUL",
        "37"
      ],
      [
        1650305,
        "AZUL",
        "35"
      ],
      [
        1650304,
        "ROJO",
        "40"
      ],
      [
        1650302,
        "ROJO",
        "38"
      ],
      [
        1650310,
        "AZUL",
        "40"
      ],
      [
        1650297,
        "NEGRO",
        "39"
      ],
      [
        1650288,
        "NEGRO BLANCO",
        "36"
      ],
      [
        1650287,
        "NEGRO BLANCO",
        "35"
      ],
      [
        1650306,
        "AZUL",
        "36"
      ],
      [
        1650301,
        "ROJO",
        "37"
      ],
      [
        1650296,
        "NEGRO",
        "38"
      ]
    ]
  },
  {
    "id": 2134972,
    "n": "Tenis Retro 135",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 217,
    "sold": 207,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2134972/1776826599WhatsApp%20Image%202026-04-21%20at%208.14.15%20PM%20(11).jpeg",
    "v": [
      [
        2118016,
        "Azul Amarillo",
        "40"
      ],
      [
        2118017,
        "Azul Amarillo",
        "41"
      ],
      [
        2118018,
        "Azul Amarillo",
        "42"
      ],
      [
        2118019,
        "Azul Amarillo",
        "43"
      ],
      [
        2118013,
        "Azul Amarillo",
        "37"
      ],
      [
        2118014,
        "Azul Amarillo",
        "38"
      ],
      [
        2118015,
        "Azul Amarillo",
        "39"
      ]
    ]
  },
  {
    "id": 2050613,
    "n": "Bota Flex 136",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 98,
    "sold": 168,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2050613/1769228756WhatsApp%20Image%202026-01-22%20at%209.08.00%20PM%20(1).jpeg",
    "v": [
      [
        1951673,
        "",
        "37"
      ],
      [
        1951674,
        "",
        "38"
      ],
      [
        1951675,
        "",
        "39"
      ],
      [
        1951679,
        "",
        "43"
      ],
      [
        1951676,
        "",
        "40"
      ],
      [
        1951677,
        "",
        "41"
      ],
      [
        1951678,
        "",
        "42"
      ]
    ]
  },
  {
    "id": 2302640,
    "n": "Tenis Runner 137 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 125,
    "sold": 255,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2302640/edea9310-3bb1-4d55-bb30-a1a530b799fe.png",
    "v": [
      [
        2433869,
        "Negro",
        "37"
      ],
      [
        2433870,
        "Negro",
        "38"
      ],
      [
        2433871,
        "Negro",
        "39"
      ],
      [
        2433872,
        "Negro",
        "40"
      ],
      [
        2433873,
        "Negro",
        "41"
      ],
      [
        2433874,
        "Negro",
        "42"
      ],
      [
        2433875,
        "Negro",
        "43"
      ],
      [
        2433876,
        "Gris",
        "37"
      ],
      [
        2433877,
        "Gris",
        "38"
      ],
      [
        2433878,
        "Gris",
        "39"
      ],
      [
        2433879,
        "Gris",
        "40"
      ],
      [
        2433880,
        "Gris",
        "41"
      ],
      [
        2433881,
        "Gris",
        "42"
      ],
      [
        2433882,
        "Gris",
        "43"
      ],
      [
        2433883,
        "Blanco",
        "37"
      ],
      [
        2433884,
        "Blanco",
        "38"
      ],
      [
        2433885,
        "Blanco",
        "39"
      ],
      [
        2433886,
        "Blanco",
        "40"
      ],
      [
        2433887,
        "Blanco",
        "41"
      ],
      [
        2433888,
        "Blanco",
        "42"
      ],
      [
        2433889,
        "Blanco",
        "43"
      ]
    ]
  },
  {
    "id": 2135695,
    "n": "Tenis Casual 138 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 220,
    "sold": 250,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135695/1776894284WhatsApp%20Image%202026-04-22%20at%2012.11.52%20PM.jpeg",
    "v": [
      [
        2119762,
        "Arena",
        "37"
      ],
      [
        2119765,
        "Arena",
        "40"
      ],
      [
        2119766,
        "Arena",
        "41"
      ],
      [
        2119767,
        "Arena",
        "42"
      ],
      [
        2119768,
        "Arena",
        "43"
      ],
      [
        2119769,
        "Negro",
        "37"
      ],
      [
        2119770,
        "Negro",
        "38"
      ],
      [
        2119771,
        "Negro",
        "39"
      ],
      [
        2119772,
        "Negro",
        "40"
      ],
      [
        2119773,
        "Negro",
        "41"
      ],
      [
        2119774,
        "Negro",
        "42"
      ],
      [
        2119775,
        "Negro",
        "43"
      ],
      [
        2119776,
        "Cafe",
        "37"
      ],
      [
        2119777,
        "Cafe",
        "38"
      ],
      [
        2119778,
        "Cafe",
        "39"
      ],
      [
        2119779,
        "Cafe",
        "40"
      ],
      [
        2119780,
        "Cafe",
        "41"
      ],
      [
        2119781,
        "Cafe",
        "42"
      ],
      [
        2119782,
        "Cafe",
        "43"
      ],
      [
        2119763,
        "Arena",
        "38"
      ],
      [
        2119764,
        "Arena",
        "39"
      ]
    ]
  },
  {
    "id": 2289271,
    "n": "Tenis Prime 139",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 76,
    "sold": 146,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2289271/037fa90c-0208-4f11-ba81-6794cd949d54.jpg",
    "v": [
      [
        2405500,
        "BLANCO",
        "38"
      ],
      [
        2405508,
        "NEGRO",
        "40"
      ],
      [
        2405513,
        "AZUL OSCURO",
        "39"
      ],
      [
        2405514,
        "AZUL OSCURO",
        "40"
      ],
      [
        2405515,
        "AZUL OSCURO",
        "41"
      ],
      [
        2405516,
        "AZUL OSCURO",
        "42"
      ],
      [
        2405501,
        "BLANCO",
        "39"
      ],
      [
        2405502,
        "BLANCO",
        "40"
      ],
      [
        2405518,
        "NEGRO/ROJO",
        "38"
      ],
      [
        2405519,
        "NEGRO/ROJO",
        "39"
      ],
      [
        2405520,
        "NEGRO/ROJO",
        "40"
      ],
      [
        2405503,
        "BLANCO",
        "41"
      ],
      [
        2405504,
        "BLANCO",
        "42"
      ],
      [
        2405505,
        "BLANCO",
        "43"
      ],
      [
        2405506,
        "NEGRO",
        "38"
      ],
      [
        2405507,
        "NEGRO",
        "39"
      ],
      [
        2405509,
        "NEGRO",
        "41"
      ],
      [
        2405510,
        "NEGRO",
        "42"
      ],
      [
        2405511,
        "NEGRO",
        "43"
      ],
      [
        2405512,
        "AZUL OSCURO",
        "38"
      ],
      [
        2405517,
        "AZUL OSCURO",
        "43"
      ],
      [
        2405521,
        "NEGRO/ROJO",
        "41"
      ],
      [
        2405522,
        "NEGRO/ROJO",
        "42"
      ],
      [
        2405523,
        "NEGRO/ROJO",
        "43"
      ]
    ]
  },
  {
    "id": 2135921,
    "n": "Tenis Active 140 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 86,
    "sold": 136,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135921/1779042146171729.jpg",
    "v": [
      [
        2120445,
        "Blanco Lila",
        "36"
      ],
      [
        2120450,
        "Blanco Azul",
        "35"
      ],
      [
        2120446,
        "Blanco Lila",
        "37"
      ],
      [
        2120447,
        "Blanco Lila",
        "38"
      ],
      [
        2120461,
        "Blanco Fucsia",
        "40"
      ],
      [
        2120465,
        "Negro",
        "38"
      ],
      [
        2120473,
        "Azul Oscuro",
        "40"
      ],
      [
        2120444,
        "Blanco Lila",
        "35"
      ],
      [
        2120448,
        "Blanco Lila",
        "39"
      ],
      [
        2120449,
        "Blanco Lila",
        "40"
      ],
      [
        2120451,
        "Blanco Azul",
        "36"
      ],
      [
        2120452,
        "Blanco Azul",
        "37"
      ],
      [
        2120453,
        "Blanco Azul",
        "38"
      ],
      [
        2120454,
        "Blanco Azul",
        "39"
      ],
      [
        2120455,
        "Blanco Azul",
        "40"
      ],
      [
        2120456,
        "Blanco Fucsia",
        "35"
      ],
      [
        2120457,
        "Blanco Fucsia",
        "36"
      ],
      [
        2120458,
        "Blanco Fucsia",
        "37"
      ],
      [
        2120459,
        "Blanco Fucsia",
        "38"
      ],
      [
        2120460,
        "Blanco Fucsia",
        "39"
      ],
      [
        2120462,
        "Negro",
        "35"
      ],
      [
        2120463,
        "Negro",
        "36"
      ],
      [
        2120464,
        "Negro",
        "37"
      ],
      [
        2120466,
        "Negro",
        "39"
      ],
      [
        2120467,
        "Negro",
        "40"
      ],
      [
        2120468,
        "Azul Oscuro",
        "35"
      ],
      [
        2120469,
        "Azul Oscuro",
        "36"
      ],
      [
        2120470,
        "Azul Oscuro",
        "37"
      ],
      [
        2120471,
        "Azul Oscuro",
        "38"
      ],
      [
        2120472,
        "Azul Oscuro",
        "39"
      ]
    ]
  },
  {
    "id": 2134962,
    "n": "Tenis Urban 141",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 207,
    "sold": 197,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2134962/1776825446WhatsApp%20Image%202026-04-21%20at%208.14.16%20PM%20(3).jpeg",
    "v": [
      [
        2117939,
        "Rojo Negro",
        "37"
      ],
      [
        2117940,
        "Rojo Negro",
        "38"
      ],
      [
        2117941,
        "Rojo Negro",
        "39"
      ],
      [
        2117942,
        "Rojo Negro",
        "40"
      ],
      [
        2117943,
        "Rojo Negro",
        "41"
      ],
      [
        2117944,
        "Rojo Negro",
        "42"
      ],
      [
        2117945,
        "Rojo Negro",
        "43"
      ]
    ]
  },
  {
    "id": 1839678,
    "n": "Zapato Classic 142 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 123,
    "sold": 373,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1839678/17490680691743181870WhatsApp%20Image%202025-03-28%20at%2011.10.14%20AM%20(3).jpeg",
    "v": [
      [
        1539457,
        "caramelo",
        "42"
      ],
      [
        1539458,
        "negro",
        "42"
      ],
      [
        1539454,
        "caramelo",
        "41"
      ],
      [
        1539453,
        "azul",
        "41"
      ],
      [
        1539451,
        "caramelo",
        "40"
      ],
      [
        1539447,
        "azul",
        "39"
      ],
      [
        1539442,
        "caramelo",
        "37"
      ],
      [
        1539443,
        "negro",
        "37"
      ],
      [
        1539445,
        "caramelo",
        "38"
      ],
      [
        1539460,
        "caramelo",
        "43"
      ],
      [
        1539459,
        "azul",
        "43"
      ],
      [
        1539461,
        "negro",
        "43"
      ],
      [
        1539452,
        "negro",
        "40"
      ],
      [
        1539441,
        "azul",
        "37"
      ],
      [
        1539456,
        "azul",
        "42"
      ],
      [
        1539455,
        "negro",
        "41"
      ],
      [
        1539446,
        "negro",
        "38"
      ],
      [
        1539450,
        "azul",
        "40"
      ],
      [
        1539448,
        "caramelo",
        "39"
      ],
      [
        1539449,
        "negro",
        "39"
      ],
      [
        1539444,
        "azul",
        "38"
      ]
    ]
  },
  {
    "id": 1794338,
    "n": "Tenis Street 143 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.9,
    "rev": 143,
    "sold": 253,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1794338/1748458029GIF%20AIR%20NB.gif",
    "v": [
      [
        1476691,
        "GRIS",
        "37"
      ],
      [
        1476690,
        "BEIGE",
        "37"
      ],
      [
        1476694,
        "BEIGE",
        "39"
      ],
      [
        1476695,
        "GRIS",
        "39"
      ],
      [
        1476692,
        "BEIGE",
        "38"
      ],
      [
        1476688,
        "BEIGE",
        "36"
      ],
      [
        1476689,
        "GRIS",
        "36"
      ],
      [
        1476693,
        "GRIS",
        "38"
      ],
      [
        1476696,
        "BEIGE",
        "40"
      ],
      [
        1476697,
        "GRIS",
        "40"
      ]
    ]
  },
  {
    "id": 2073440,
    "n": "Tenis Sport 144",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 65,
    "sold": 215,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2073440/50c138eb-b09e-4be8-83d1-2be9e70a308c.png",
    "v": [
      [
        1968404,
        "Gris",
        "43"
      ],
      [
        2327864,
        "Crema",
        "41"
      ],
      [
        2327865,
        "Crema",
        "42"
      ],
      [
        2327866,
        "Crema",
        "43"
      ],
      [
        1968388,
        "Blanco Verde",
        "41"
      ],
      [
        1968400,
        "Gris",
        "39"
      ],
      [
        1968401,
        "Gris",
        "40"
      ],
      [
        1968398,
        "Gris",
        "37"
      ],
      [
        1968399,
        "Gris",
        "38"
      ],
      [
        1968402,
        "Gris",
        "41"
      ],
      [
        1968403,
        "Gris",
        "42"
      ],
      [
        1968397,
        "Negro",
        "43"
      ],
      [
        1968377,
        "Blanco Azul Marino",
        "37"
      ],
      [
        1968378,
        "Blanco Azul Marino",
        "38"
      ],
      [
        1968379,
        "Blanco Azul Marino",
        "39"
      ],
      [
        1968380,
        "Blanco Azul Marino",
        "40"
      ],
      [
        1968381,
        "Blanco Azul Marino",
        "41"
      ],
      [
        1968382,
        "Blanco Azul Marino",
        "42"
      ],
      [
        1968384,
        "Blanco Verde",
        "37"
      ],
      [
        1968385,
        "Blanco Verde",
        "38"
      ],
      [
        1968386,
        "Blanco Verde",
        "39"
      ],
      [
        1968387,
        "Blanco Verde",
        "40"
      ],
      [
        1968395,
        "Negro",
        "41"
      ],
      [
        1968396,
        "Negro",
        "42"
      ],
      [
        1968383,
        "Blanco Azul Marino",
        "43"
      ],
      [
        1968389,
        "Blanco Verde",
        "42"
      ],
      [
        1968390,
        "Blanco Verde",
        "43"
      ],
      [
        1968391,
        "Negro",
        "37"
      ],
      [
        1968392,
        "Negro",
        "38"
      ],
      [
        1968393,
        "Negro",
        "39"
      ],
      [
        1968394,
        "Negro",
        "40"
      ],
      [
        2327860,
        "Crema",
        "37"
      ],
      [
        2327861,
        "Crema",
        "38"
      ],
      [
        2327862,
        "Crema",
        "39"
      ],
      [
        2327863,
        "Crema",
        "40"
      ]
    ]
  },
  {
    "id": 1832870,
    "n": "Tenis Retro 145 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.9,
    "rev": 155,
    "sold": 365,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1832870/1748459376GIF%20MOON.gif",
    "v": [
      [
        1523954,
        "GRIS",
        "40"
      ],
      [
        1523953,
        "BLANCO",
        "40"
      ],
      [
        1523952,
        "CAFE",
        "40"
      ],
      [
        1523951,
        "NEGRO",
        "40"
      ],
      [
        1523950,
        "GRIS",
        "39"
      ],
      [
        1523949,
        "BLANCO",
        "39"
      ],
      [
        1523948,
        "CAFE",
        "39"
      ],
      [
        1523947,
        "NEGRO",
        "39"
      ],
      [
        1523946,
        "GRIS",
        "38"
      ],
      [
        1523945,
        "BLANCO",
        "38"
      ],
      [
        1523944,
        "CAFE",
        "38"
      ],
      [
        1523943,
        "NEGRO",
        "38"
      ],
      [
        1523942,
        "GRIS",
        "37"
      ],
      [
        1523941,
        "BLANCO",
        "37"
      ],
      [
        1523940,
        "CAFE",
        "37"
      ],
      [
        1523939,
        "NEGRO",
        "37"
      ],
      [
        1523938,
        "GRIS",
        "36"
      ],
      [
        1523937,
        "BLANCO",
        "36"
      ],
      [
        1523936,
        "CAFE",
        "36"
      ],
      [
        1523935,
        "NEGRO",
        "36"
      ]
    ]
  },
  {
    "id": 2154520,
    "n": "Zapato Flex 146",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 145,
    "sold": 375,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2154520/1779242228157941.jpg",
    "v": [
      [
        2161733,
        "Beige Oscuro",
        "43"
      ],
      [
        2161706,
        "Naranja",
        "37"
      ],
      [
        2161707,
        "Naranja",
        "38"
      ],
      [
        2161708,
        "Naranja",
        "39"
      ],
      [
        2161709,
        "Naranja",
        "40"
      ],
      [
        2161710,
        "Naranja",
        "41"
      ],
      [
        2161711,
        "Naranja",
        "42"
      ],
      [
        2161712,
        "Naranja",
        "43"
      ],
      [
        2161713,
        "Negro",
        "37"
      ],
      [
        2161714,
        "Negro",
        "38"
      ],
      [
        2161715,
        "Negro",
        "39"
      ],
      [
        2161716,
        "Negro",
        "40"
      ],
      [
        2161717,
        "Negro",
        "41"
      ],
      [
        2161718,
        "Negro",
        "42"
      ],
      [
        2161719,
        "Negro",
        "43"
      ],
      [
        2161720,
        "Beige Claro",
        "37"
      ],
      [
        2161721,
        "Beige Claro",
        "38"
      ],
      [
        2161722,
        "Beige Claro",
        "39"
      ],
      [
        2161723,
        "Beige Claro",
        "40"
      ],
      [
        2161724,
        "Beige Claro",
        "41"
      ],
      [
        2161725,
        "Beige Claro",
        "42"
      ],
      [
        2161726,
        "Beige Claro",
        "43"
      ],
      [
        2161727,
        "Beige Oscuro",
        "37"
      ],
      [
        2161728,
        "Beige Oscuro",
        "38"
      ],
      [
        2161730,
        "Beige Oscuro",
        "40"
      ],
      [
        2161732,
        "Beige Oscuro",
        "42"
      ],
      [
        2161729,
        "Beige Oscuro",
        "39"
      ],
      [
        2161731,
        "Beige Oscuro",
        "41"
      ]
    ]
  },
  {
    "id": 2154535,
    "n": "Zapato Runner 147",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 160,
    "sold": 390,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2154535/257b11b4-b700-4549-b2b8-2b4bf5c717cc.png",
    "v": [
      [
        2161815,
        "Negro",
        "43"
      ],
      [
        2161790,
        "Marron",
        "39"
      ],
      [
        2161796,
        "Naranja",
        "38"
      ],
      [
        2161800,
        "Naranja",
        "42"
      ],
      [
        2161812,
        "Negro",
        "40"
      ],
      [
        2161797,
        "Naranja",
        "39"
      ],
      [
        2161811,
        "Negro",
        "39"
      ],
      [
        2161788,
        "Marron",
        "37"
      ],
      [
        2161789,
        "Marron",
        "38"
      ],
      [
        2161791,
        "Marron",
        "40"
      ],
      [
        2161792,
        "Marron",
        "41"
      ],
      [
        2161793,
        "Marron",
        "42"
      ],
      [
        2161794,
        "Marron",
        "43"
      ],
      [
        2161795,
        "Naranja",
        "37"
      ],
      [
        2161798,
        "Naranja",
        "40"
      ],
      [
        2161799,
        "Naranja",
        "41"
      ],
      [
        2161801,
        "Naranja",
        "43"
      ],
      [
        2161802,
        "Crema",
        "37"
      ],
      [
        2161803,
        "Crema",
        "38"
      ],
      [
        2161804,
        "Crema",
        "39"
      ],
      [
        2161805,
        "Crema",
        "40"
      ],
      [
        2161806,
        "Crema",
        "41"
      ],
      [
        2161807,
        "Crema",
        "42"
      ],
      [
        2161808,
        "Crema",
        "43"
      ],
      [
        2161809,
        "Negro",
        "37"
      ],
      [
        2161810,
        "Negro",
        "38"
      ],
      [
        2161813,
        "Negro",
        "41"
      ],
      [
        2161814,
        "Negro",
        "42"
      ]
    ]
  },
  {
    "id": 2162448,
    "n": "Zapato Casual 148 Hombre",
    "g": "h",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 153,
    "sold": 143,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2162448/43371f90-5f6b-4010-b739-32991fbe57d1.png",
    "v": [
      [
        2178264,
        "Negro",
        "40"
      ],
      [
        2178265,
        "Negro",
        "41"
      ],
      [
        2178279,
        "Beige",
        "41"
      ],
      [
        2178261,
        "Negro",
        "37"
      ],
      [
        2178262,
        "Negro",
        "38"
      ],
      [
        2178263,
        "Negro",
        "39"
      ],
      [
        2178266,
        "Negro",
        "42"
      ],
      [
        2178267,
        "Negro",
        "43"
      ],
      [
        2178268,
        "Marron",
        "37"
      ],
      [
        2178269,
        "Marron",
        "38"
      ],
      [
        2178270,
        "Marron",
        "39"
      ],
      [
        2178271,
        "Marron",
        "40"
      ],
      [
        2178272,
        "Marron",
        "41"
      ],
      [
        2178273,
        "Marron",
        "42"
      ],
      [
        2178274,
        "Marron",
        "43"
      ],
      [
        2178275,
        "Beige",
        "37"
      ],
      [
        2178276,
        "Beige",
        "38"
      ],
      [
        2178277,
        "Beige",
        "39"
      ],
      [
        2178278,
        "Beige",
        "40"
      ],
      [
        2178280,
        "Beige",
        "42"
      ],
      [
        2178281,
        "Beige",
        "43"
      ],
      [
        2178282,
        "Azul Marino",
        "37"
      ],
      [
        2178283,
        "Azul Marino",
        "38"
      ],
      [
        2178284,
        "Azul Marino",
        "39"
      ],
      [
        2178285,
        "Azul Marino",
        "40"
      ],
      [
        2178286,
        "Azul Marino",
        "41"
      ],
      [
        2178287,
        "Azul Marino",
        "42"
      ],
      [
        2178288,
        "Azul Marino",
        "43"
      ]
    ]
  },
  {
    "id": 2154525,
    "n": "Zapato Prime 149",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 150,
    "sold": 380,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2154525/bf5a0b54-b92f-4051-8de4-159304d79f37.png",
    "v": [
      [
        2161753,
        "Marron",
        "38"
      ],
      [
        2161765,
        "Negro",
        "43"
      ],
      [
        2161778,
        "Naranja",
        "42"
      ],
      [
        2161766,
        "Crema",
        "37"
      ],
      [
        2161752,
        "Marron",
        "37"
      ],
      [
        2161754,
        "Marron",
        "39"
      ],
      [
        2161755,
        "Marron",
        "40"
      ],
      [
        2161757,
        "Marron",
        "42"
      ],
      [
        2161758,
        "Marron",
        "43"
      ],
      [
        2161759,
        "Negro",
        "37"
      ],
      [
        2161760,
        "Negro",
        "38"
      ],
      [
        2161761,
        "Negro",
        "39"
      ],
      [
        2161762,
        "Negro",
        "40"
      ],
      [
        2161763,
        "Negro",
        "41"
      ],
      [
        2161764,
        "Negro",
        "42"
      ],
      [
        2161767,
        "Crema",
        "38"
      ],
      [
        2161768,
        "Crema",
        "39"
      ],
      [
        2161769,
        "Crema",
        "40"
      ],
      [
        2161770,
        "Crema",
        "41"
      ],
      [
        2161771,
        "Crema",
        "42"
      ],
      [
        2161772,
        "Crema",
        "43"
      ],
      [
        2161773,
        "Naranja",
        "37"
      ],
      [
        2161774,
        "Naranja",
        "38"
      ],
      [
        2161775,
        "Naranja",
        "39"
      ],
      [
        2161776,
        "Naranja",
        "40"
      ],
      [
        2161777,
        "Naranja",
        "41"
      ],
      [
        2161779,
        "Naranja",
        "43"
      ],
      [
        2161756,
        "Marron",
        "41"
      ]
    ]
  },
  {
    "id": 1888420,
    "n": "Tenis Active 150 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 85,
    "sold": 155,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1888420/1763229193175958930617538927671749063284WhatsApp%20Image%202025-06-04%20at%2013.58.39.jpeg",
    "v": [
      [
        1645596,
        "NEGRO",
        "37"
      ],
      [
        1645594,
        "BEIGE",
        "42"
      ],
      [
        1645591,
        "BEIGE",
        "39"
      ],
      [
        1645589,
        "BEIGE",
        "37"
      ],
      [
        1645600,
        "NEGRO",
        "41"
      ],
      [
        1645601,
        "NEGRO",
        "42"
      ],
      [
        1645597,
        "NEGRO",
        "38"
      ],
      [
        1645599,
        "NEGRO",
        "40"
      ],
      [
        1645592,
        "BEIGE",
        "40"
      ],
      [
        1645590,
        "BEIGE",
        "38"
      ],
      [
        1645595,
        "BEIGE",
        "43"
      ],
      [
        1645609,
        "BLANCO",
        "43"
      ],
      [
        1645598,
        "NEGRO",
        "39"
      ],
      [
        1645593,
        "BEIGE",
        "41"
      ],
      [
        1645603,
        "BLANCO",
        "37"
      ],
      [
        1645602,
        "NEGRO",
        "43"
      ],
      [
        1645604,
        "BLANCO",
        "38"
      ]
    ]
  },
  {
    "id": 2083167,
    "n": "Tenis Urban 151 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 72,
    "sold": 422,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2083167/76e68f4a-8c88-4f34-a17c-40ff92aeac6c.png",
    "v": [
      [
        1992361,
        "Negro Blanco",
        "40"
      ],
      [
        1992364,
        "Negro Blanco",
        "43"
      ],
      [
        1992359,
        "Negro Blanco",
        "38"
      ],
      [
        1992342,
        "Blanco Azul Marino",
        "42"
      ],
      [
        1992360,
        "Negro Blanco",
        "39"
      ],
      [
        1992345,
        "Blanco Coral",
        "38"
      ],
      [
        1992346,
        "Blanco Coral",
        "39"
      ],
      [
        1992347,
        "Blanco Coral",
        "40"
      ],
      [
        1992348,
        "Blanco Coral",
        "41"
      ],
      [
        1992350,
        "Blanco Coral",
        "43"
      ],
      [
        1992351,
        "Negro",
        "37"
      ],
      [
        1992352,
        "Negro",
        "38"
      ],
      [
        1992353,
        "Negro",
        "39"
      ],
      [
        1992363,
        "Negro Blanco",
        "42"
      ],
      [
        1992337,
        "Blanco Azul Marino",
        "37"
      ],
      [
        1992338,
        "Blanco Azul Marino",
        "38"
      ],
      [
        1992339,
        "Blanco Azul Marino",
        "39"
      ],
      [
        1992340,
        "Blanco Azul Marino",
        "40"
      ],
      [
        1992341,
        "Blanco Azul Marino",
        "41"
      ],
      [
        1992357,
        "Negro",
        "43"
      ],
      [
        1992358,
        "Negro Blanco",
        "37"
      ],
      [
        1992349,
        "Blanco Coral",
        "42"
      ],
      [
        1992362,
        "Negro Blanco",
        "41"
      ],
      [
        1992343,
        "Blanco Azul Marino",
        "43"
      ],
      [
        1992344,
        "Blanco Coral",
        "37"
      ],
      [
        1992355,
        "Negro",
        "41"
      ],
      [
        1992356,
        "Negro",
        "42"
      ],
      [
        1992354,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2134978,
    "n": "Tenis Classic 152",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 223,
    "sold": 213,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2134978/1776826971WhatsApp%20Image%202026-04-21%20at%208.14.15%20PM%20(9).jpeg",
    "v": [
      [
        2118048,
        "Blanco Negro",
        "37"
      ],
      [
        2118052,
        "Blanco Negro",
        "41"
      ],
      [
        2118053,
        "Blanco Negro",
        "42"
      ],
      [
        2118049,
        "Blanco Negro",
        "38"
      ],
      [
        2118050,
        "Blanco Negro",
        "39"
      ],
      [
        2118051,
        "Blanco Negro",
        "40"
      ],
      [
        2118054,
        "Blanco Negro",
        "43"
      ]
    ]
  },
  {
    "id": 2130349,
    "n": "Tenis Street 153",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 94,
    "sold": 344,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2130349/1776304444WhatsApp%20Image%202026-04-13%20at%207.31.15%20PM%20(1).jpeg",
    "v": [
      [
        2106048,
        "Naranja Azul",
        "37"
      ],
      [
        2106051,
        "Naranja Azul",
        "40"
      ],
      [
        2106046,
        "Naranja Azul",
        "35"
      ],
      [
        2106047,
        "Naranja Azul",
        "36"
      ],
      [
        2106049,
        "Naranja Azul",
        "38"
      ],
      [
        2106050,
        "Naranja Azul",
        "39"
      ]
    ]
  },
  {
    "id": 2126507,
    "n": "Tenis Sport 154",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 5,
    "rev": 212,
    "sold": 242,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2126507/1775795370WhatsApp%20Image%202026-04-09%20at%207.24.36%20PM%20(2).jpeg",
    "v": [
      [
        2090810,
        "Blanco Rosado",
        "35"
      ],
      [
        2090811,
        "Blanco Rosado",
        "36"
      ],
      [
        2090812,
        "Blanco Rosado",
        "37"
      ],
      [
        2090813,
        "Blanco Rosado",
        "38"
      ],
      [
        2090814,
        "Blanco Rosado",
        "39"
      ],
      [
        2090815,
        "Blanco Rosado",
        "40"
      ]
    ]
  },
  {
    "id": 2174333,
    "n": "Tenis Retro 155 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 158,
    "sold": 128,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2174333/1783923937WhatsApp%20Image%202026-07-10%20at%2012.07.02%20PM%20(1).jpeg",
    "v": [
      [
        2204132,
        "Blanco Rosa",
        "38"
      ],
      [
        2204129,
        "Blanco Rosa",
        "35"
      ],
      [
        2204130,
        "Blanco Rosa",
        "36"
      ],
      [
        2204131,
        "Blanco Rosa",
        "37"
      ],
      [
        2204133,
        "Blanco Rosa",
        "39"
      ],
      [
        2204134,
        "Blanco Rosa",
        "40"
      ]
    ]
  },
  {
    "id": 1902468,
    "n": "Tenis Flex 156 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 93,
    "sold": 263,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1902468/1755578332WhatsApp%20Image%202025-08-18%20at%2011.27.20%20PM%20(4).jpeg",
    "v": [
      [
        1678866,
        "",
        "36"
      ],
      [
        1678867,
        "",
        "37"
      ],
      [
        1678868,
        "",
        "38"
      ],
      [
        1678869,
        "",
        "39"
      ],
      [
        1678870,
        "",
        "40"
      ],
      [
        1678865,
        "",
        "35"
      ]
    ]
  },
  {
    "id": 2139928,
    "n": "Tenis Runner 157",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 133,
    "sold": 403,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2139928/1777347605WhatsApp%20Image%202026-04-26%20at%209.44.46%20PM%20(3).jpeg",
    "v": [
      [
        2128931,
        "Blanco Marron Chulo Rosa",
        "40"
      ],
      [
        2128926,
        "Blanco Marron Chulo Rosa",
        "35"
      ],
      [
        2128927,
        "Blanco Marron Chulo Rosa",
        "36"
      ],
      [
        2128928,
        "Blanco Marron Chulo Rosa",
        "37"
      ],
      [
        2128929,
        "Blanco Marron Chulo Rosa",
        "38"
      ],
      [
        2128930,
        "Blanco Marron Chulo Rosa",
        "39"
      ]
    ]
  },
  {
    "id": 2127298,
    "n": "Tenis Casual 158 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 103,
    "sold": 353,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2127298/1775883710WhatsApp%20Image%202026-04-10%20at%207.53.42%20PM%20(6).jpeg",
    "v": [
      [
        2093020,
        "Beige Marron",
        "35"
      ],
      [
        2093021,
        "Beige Marron",
        "36"
      ],
      [
        2093022,
        "Beige Marron",
        "37"
      ],
      [
        2093023,
        "Beige Marron",
        "38"
      ],
      [
        2093024,
        "Beige Marron",
        "39"
      ],
      [
        2093025,
        "Beige Marron",
        "40"
      ]
    ]
  },
  {
    "id": 2135911,
    "n": "Tenis Prime 159",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 76,
    "sold": 126,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135911/1776924222WhatsApp%20Image%202026-04-22%20at%207.41.33%20PM.jpeg",
    "v": [
      [
        2120401,
        "Negro",
        "36"
      ],
      [
        2120402,
        "Negro",
        "37"
      ],
      [
        2120403,
        "Negro",
        "38"
      ],
      [
        2120404,
        "Negro",
        "39"
      ],
      [
        2120405,
        "Negro",
        "40"
      ],
      [
        2120400,
        "Negro",
        "35"
      ]
    ]
  },
  {
    "id": 2127294,
    "n": "Tenis Active 160 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 99,
    "sold": 349,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2127294/1775882905WhatsApp%20Image%202026-04-10%20at%207.53.42%20PM%20(3).jpeg",
    "v": [
      [
        2093009,
        "Blanco Chulo Rojo",
        "37"
      ],
      [
        2093008,
        "Blanco Chulo Rojo",
        "36"
      ],
      [
        2093012,
        "Blanco Chulo Rojo",
        "40"
      ],
      [
        2093010,
        "Blanco Chulo Rojo",
        "38"
      ],
      [
        2093011,
        "Blanco Chulo Rojo",
        "39"
      ],
      [
        2093007,
        "Blanco Chulo Rojo",
        "35"
      ]
    ]
  },
  {
    "id": 2135910,
    "n": "Tenis Urban 161",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 75,
    "sold": 125,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135910/1776923990WhatsApp%20Image%202026-04-22%20at%207.41.32%20PM.jpeg",
    "v": [
      [
        2120394,
        "Blanco Violeta",
        "35"
      ],
      [
        2120395,
        "Blanco Violeta",
        "36"
      ],
      [
        2120396,
        "Blanco Violeta",
        "37"
      ],
      [
        2120397,
        "Blanco Violeta",
        "38"
      ],
      [
        2120398,
        "Blanco Violeta",
        "39"
      ],
      [
        2120399,
        "Blanco Violeta",
        "40"
      ]
    ]
  },
  {
    "id": 1662430,
    "n": "Tenis Classic 162 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 175,
    "sold": 265,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1662430/1738985013WhatsApp%20Image%202025-02-07%20at%208.40.24%20PM.jpeg",
    "v": [
      [
        1205997,
        "",
        "40"
      ],
      [
        1205996,
        "",
        "39"
      ],
      [
        1205995,
        "",
        "38"
      ],
      [
        1205994,
        "",
        "37"
      ],
      [
        1205993,
        "",
        "36"
      ],
      [
        1205992,
        "",
        "35"
      ]
    ]
  },
  {
    "id": 2135892,
    "n": "Tenis Street 163",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 57,
    "sold": 107,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135892/1776919102WhatsApp%20Image%202026-04-22%20at%209.46.57%20PM.jpeg",
    "v": [
      [
        2120312,
        "Blanco Gris",
        "35"
      ],
      [
        2120313,
        "Blanco Gris",
        "36"
      ],
      [
        2120314,
        "Blanco Gris",
        "37"
      ],
      [
        2120315,
        "Blanco Gris",
        "38"
      ],
      [
        2120316,
        "Blanco Gris",
        "39"
      ],
      [
        2120317,
        "Blanco Gris",
        "40"
      ]
    ]
  },
  {
    "id": 2169156,
    "n": "Tenis Sport 164",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 201,
    "sold": 391,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2169156/1780590928descarga%20(12).jpg",
    "v": [
      [
        2194942,
        "Azul",
        "35"
      ],
      [
        2194943,
        "Azul",
        "36"
      ],
      [
        2194944,
        "Azul",
        "37"
      ],
      [
        2194945,
        "Azul",
        "38"
      ],
      [
        2194946,
        "Azul",
        "39"
      ],
      [
        2194947,
        "Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2138596,
    "n": "Tenis Retro 165 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 61,
    "sold": 431,
    "stock": 7,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2138596/1777176512descarga%20(21).jpg",
    "v": [
      [
        2126685,
        "Blanco Azul",
        "37"
      ],
      [
        2126683,
        "Blanco Azul",
        "35"
      ],
      [
        2126684,
        "Blanco Azul",
        "36"
      ],
      [
        2126686,
        "Blanco Azul",
        "38"
      ],
      [
        2126687,
        "Blanco Azul",
        "39"
      ],
      [
        2126688,
        "Blanco Azul",
        "40"
      ]
    ]
  },
  {
    "id": 79932,
    "n": "Tenis Flex 166",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 57,
    "sold": 127,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/79932/17030196931703019693IMG_20220823_232157.jpg",
    "v": [
      [
        48007,
        "",
        "39"
      ],
      [
        48008,
        "",
        "40"
      ],
      [
        48003,
        "",
        "35"
      ],
      [
        48004,
        "",
        "36"
      ],
      [
        48005,
        "",
        "37"
      ],
      [
        48006,
        "",
        "38"
      ]
    ]
  },
  {
    "id": 2148292,
    "n": "Tenis Runner 167 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 217,
    "sold": 267,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2148292/1778470902WhatsApp%20Image%202026-05-10%20at%208.03.22%20PM.jpeg",
    "v": [
      [
        2146645,
        "Blanco Violeta",
        "39"
      ],
      [
        2146646,
        "Blanco Violeta",
        "40"
      ],
      [
        2146641,
        "Blanco Violeta",
        "35"
      ],
      [
        2146642,
        "Blanco Violeta",
        "36"
      ],
      [
        2146643,
        "Blanco Violeta",
        "37"
      ],
      [
        2146644,
        "Blanco Violeta",
        "38"
      ]
    ]
  },
  {
    "id": 1308515,
    "n": "Tenis Casual 168 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 140,
    "sold": 290,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1308515/1728075976WhatsApp%20Image%202024-10-04%20at%2012.23.33%20PM%20(1).jpeg",
    "v": [
      [
        939303,
        "Rosa",
        "36"
      ],
      [
        939302,
        "Rosa",
        "35"
      ],
      [
        939304,
        "Rosa",
        "37"
      ],
      [
        939305,
        "Rosa",
        "38"
      ],
      [
        939306,
        "Rosa",
        "39"
      ],
      [
        939307,
        "Rosa",
        "40"
      ]
    ]
  },
  {
    "id": 2132231,
    "n": "Tenis Prime 169",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 176,
    "sold": 186,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2132231/1776477932WhatsApp%20Image%202026-04-13%20at%209.15.46%20PM%20(2).jpeg",
    "v": [
      [
        2110992,
        "Blanco Plata",
        "35"
      ],
      [
        2110993,
        "Blanco Plata",
        "36"
      ],
      [
        2110994,
        "Blanco Plata",
        "37"
      ],
      [
        2110995,
        "Blanco Plata",
        "38"
      ],
      [
        2110996,
        "Blanco Plata",
        "39"
      ],
      [
        2110997,
        "Blanco Plata",
        "40"
      ]
    ]
  },
  {
    "id": 1424395,
    "n": "Tenis Active 170 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 100,
    "sold": 230,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1424395/1730935780WhatsApp%20Image%202024-10-31%20at%204.05.29%20PM.jpeg",
    "v": [
      [
        1001780,
        "Negro",
        "40"
      ],
      [
        1001779,
        "Negro",
        "39"
      ],
      [
        1001778,
        "Negro",
        "38"
      ],
      [
        1001777,
        "Negro",
        "37"
      ],
      [
        1001776,
        "Negro",
        "36"
      ],
      [
        1001775,
        "Negro",
        "35"
      ]
    ]
  },
  {
    "id": 2148296,
    "n": "Tenis Urban 171 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 221,
    "sold": 271,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2148296/1778471664WhatsApp%20Image%202026-05-10%20at%207.57.27%20PM%20(1).jpeg",
    "v": [
      [
        2146654,
        "Negro",
        "36"
      ],
      [
        2146655,
        "Negro",
        "37"
      ],
      [
        2146656,
        "Negro",
        "38"
      ],
      [
        2146657,
        "Negro",
        "39"
      ],
      [
        2146658,
        "Negro",
        "40"
      ],
      [
        2146653,
        "Negro",
        "35"
      ]
    ]
  },
  {
    "id": 2158214,
    "n": "Tenis Classic 172 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 59,
    "sold": 329,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2158214/1779572153WhatsApp%20Image%202026-05-23%20at%203.31.21%20PM%20(1).jpeg",
    "v": [
      [
        2168863,
        "Gris Azul",
        "35"
      ],
      [
        2168864,
        "Gris Azul",
        "36"
      ],
      [
        2168865,
        "Gris Azul",
        "37"
      ],
      [
        2168866,
        "Gris Azul",
        "38"
      ],
      [
        2168867,
        "Gris Azul",
        "39"
      ],
      [
        2168868,
        "Gris Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2114449,
    "n": "Baleta Street 173 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 214,
    "sold": 424,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2114449/1774317815WhatsApp%20Image%202026-03-23%20at%208.47.38%20PM%20(3).jpeg",
    "v": [
      [
        2063968,
        "",
        "35"
      ],
      [
        2063969,
        "",
        "36"
      ],
      [
        2063970,
        "",
        "37"
      ],
      [
        2063971,
        "",
        "38"
      ],
      [
        2063972,
        "",
        "39"
      ],
      [
        2063973,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 2146047,
    "n": "Baleta Sport 174",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 132,
    "sold": 402,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2146047/1778104037mafalda%20elastico%20s009.jpg",
    "v": [
      [
        2141371,
        "Negro",
        "40"
      ],
      [
        2141357,
        "Azul",
        "38"
      ],
      [
        2141358,
        "Azul",
        "39"
      ],
      [
        2141359,
        "Azul",
        "40"
      ],
      [
        2141360,
        "Gris",
        "35"
      ],
      [
        2141361,
        "Gris",
        "36"
      ],
      [
        2141362,
        "Gris",
        "37"
      ],
      [
        2141363,
        "Gris",
        "38"
      ],
      [
        2141364,
        "Gris",
        "39"
      ],
      [
        2141365,
        "Gris",
        "40"
      ],
      [
        2141366,
        "Negro",
        "35"
      ],
      [
        2141367,
        "Negro",
        "36"
      ],
      [
        2141368,
        "Negro",
        "37"
      ],
      [
        2141369,
        "Negro",
        "38"
      ],
      [
        2141370,
        "Negro",
        "39"
      ],
      [
        2141354,
        "Azul",
        "35"
      ],
      [
        2141355,
        "Azul",
        "36"
      ],
      [
        2141356,
        "Azul",
        "37"
      ]
    ]
  },
  {
    "id": 2199325,
    "n": "Tenis Retro 175 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 130,
    "sold": 300,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2199325/1783713694WhatsApp%20Image%202026-07-09%20at%204.44.44%20PM.jpeg",
    "v": [
      [
        2256514,
        "Dorado",
        "38"
      ],
      [
        2256528,
        "Negro",
        "40"
      ],
      [
        2256517,
        "Blanco",
        "35"
      ],
      [
        2256525,
        "Negro",
        "37"
      ],
      [
        2256519,
        "Blanco",
        "37"
      ],
      [
        2256520,
        "Blanco",
        "38"
      ],
      [
        2256521,
        "Blanco",
        "39"
      ],
      [
        2256522,
        "Blanco",
        "40"
      ],
      [
        2256523,
        "Negro",
        "35"
      ],
      [
        2256511,
        "Dorado",
        "35"
      ],
      [
        2256512,
        "Dorado",
        "36"
      ],
      [
        2256513,
        "Dorado",
        "37"
      ],
      [
        2256515,
        "Dorado",
        "39"
      ],
      [
        2256516,
        "Dorado",
        "40"
      ],
      [
        2256518,
        "Blanco",
        "36"
      ],
      [
        2256524,
        "Negro",
        "36"
      ],
      [
        2256526,
        "Negro",
        "38"
      ],
      [
        2256527,
        "Negro",
        "39"
      ]
    ]
  },
  {
    "id": 2189815,
    "n": "Tenis Flex 176",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 160,
    "sold": 310,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2189815/1782877416WhatsApp%20Image%202026-06-29%20at%209.49.26%20PM%20(7).jpeg",
    "v": [
      [
        2235542,
        "Negro Blanco",
        "43"
      ],
      [
        2235534,
        "Negro Blanco",
        "35"
      ],
      [
        2235535,
        "Negro Blanco",
        "36"
      ],
      [
        2235536,
        "Negro Blanco",
        "37"
      ],
      [
        2235537,
        "Negro Blanco",
        "38"
      ],
      [
        2235538,
        "Negro Blanco",
        "39"
      ],
      [
        2235539,
        "Negro Blanco",
        "40"
      ],
      [
        2235540,
        "Negro Blanco",
        "41"
      ],
      [
        2235541,
        "Negro Blanco",
        "42"
      ]
    ]
  },
  {
    "id": 2031813,
    "n": "Tenis Runner 177 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 198,
    "sold": 408,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2031813/1767757390WhatsApp%20Image%202026-01-06%20at%2010.38.23%20PM.jpeg",
    "v": [
      [
        1896741,
        "",
        "35"
      ],
      [
        1896742,
        "",
        "36"
      ],
      [
        1896743,
        "",
        "37"
      ],
      [
        1896744,
        "",
        "38"
      ],
      [
        1896745,
        "",
        "39"
      ],
      [
        1896746,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 2164188,
    "n": "Tenis Casual 178",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 93,
    "sold": 183,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2164188/1780256409WhatsApp%20Image%202026-05-29%20at%207.53.30%20AM%20(2).jpeg",
    "v": [
      [
        2181414,
        "Blanco Rosado",
        "40"
      ],
      [
        2181409,
        "Blanco Rosado",
        "35"
      ],
      [
        2181410,
        "Blanco Rosado",
        "36"
      ],
      [
        2181411,
        "Blanco Rosado",
        "37"
      ],
      [
        2181412,
        "Blanco Rosado",
        "38"
      ],
      [
        2181413,
        "Blanco Rosado",
        "39"
      ]
    ]
  },
  {
    "id": 2290889,
    "n": "Tenis Prime 179 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 74,
    "sold": 404,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2290889/09ece139-e885-44c2-92e3-a3321ce313c1.gif",
    "v": [
      [
        2408104,
        "CAFE",
        "38"
      ],
      [
        2408107,
        "BEIGE",
        "35"
      ],
      [
        2408101,
        "CAFE",
        "35"
      ],
      [
        2408102,
        "CAFE",
        "36"
      ],
      [
        2408103,
        "CAFE",
        "37"
      ],
      [
        2408105,
        "CAFE",
        "39"
      ],
      [
        2408106,
        "CAFE",
        "40"
      ],
      [
        2408108,
        "BEIGE",
        "36"
      ],
      [
        2408109,
        "BEIGE",
        "37"
      ],
      [
        2408110,
        "BEIGE",
        "38"
      ],
      [
        2408111,
        "BEIGE",
        "39"
      ],
      [
        2408112,
        "BEIGE",
        "40"
      ],
      [
        2408113,
        "NEGRO",
        "35"
      ],
      [
        2408114,
        "NEGRO",
        "36"
      ],
      [
        2408115,
        "NEGRO",
        "37"
      ],
      [
        2408116,
        "NEGRO",
        "38"
      ],
      [
        2408117,
        "NEGRO",
        "39"
      ],
      [
        2408118,
        "NEGRO",
        "40"
      ]
    ]
  },
  {
    "id": 2010444,
    "n": "Tenis Active 180 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 69,
    "sold": 119,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2010444/1764281062WhatsApp%20Image%202025-11-27%20at%209.46.18%20AM.jpeg",
    "v": [
      [
        1869314,
        "Oro Rosa",
        "40"
      ],
      [
        1869315,
        "Blanco Rosa",
        "35"
      ],
      [
        1869316,
        "Blanco Rosa",
        "36"
      ],
      [
        1869317,
        "Blanco Rosa",
        "37"
      ],
      [
        1869318,
        "Blanco Rosa",
        "38"
      ],
      [
        1869319,
        "Blanco Rosa",
        "39"
      ],
      [
        1869320,
        "Blanco Rosa",
        "40"
      ],
      [
        1869304,
        "Blanco Azul",
        "36"
      ],
      [
        1869305,
        "Blanco Azul",
        "37"
      ],
      [
        1869306,
        "Blanco Azul",
        "38"
      ],
      [
        1869307,
        "Blanco Azul",
        "39"
      ],
      [
        1869308,
        "Blanco Azul",
        "40"
      ],
      [
        1869309,
        "Oro Rosa",
        "35"
      ],
      [
        1869310,
        "Oro Rosa",
        "36"
      ],
      [
        1869311,
        "Oro Rosa",
        "37"
      ],
      [
        1869312,
        "Oro Rosa",
        "38"
      ],
      [
        1869313,
        "Oro Rosa",
        "39"
      ],
      [
        1869303,
        "Blanco Azul",
        "35"
      ]
    ]
  },
  {
    "id": 2258015,
    "n": "Tenis Urban 181",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 140,
    "sold": 170,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2258015/280891a7-acd1-4c33-bbe2-71a20438021e.png",
    "v": [
      [
        2355960,
        "Blanco",
        "38"
      ],
      [
        2355961,
        "Blanco",
        "39"
      ],
      [
        2355962,
        "Blanco",
        "40"
      ],
      [
        2355963,
        "Blanco",
        "41"
      ],
      [
        2355964,
        "Blanco",
        "42"
      ],
      [
        2355965,
        "Blanco",
        "43"
      ],
      [
        2355966,
        "Negro",
        "38"
      ],
      [
        2355967,
        "Negro",
        "39"
      ],
      [
        2355968,
        "Negro",
        "40"
      ],
      [
        2355969,
        "Negro",
        "41"
      ],
      [
        2355970,
        "Negro",
        "42"
      ],
      [
        2355971,
        "Negro",
        "43"
      ],
      [
        2355972,
        "Azul Marino",
        "38"
      ],
      [
        2355973,
        "Azul Marino",
        "39"
      ],
      [
        2355974,
        "Azul Marino",
        "40"
      ],
      [
        2355975,
        "Azul Marino",
        "41"
      ],
      [
        2355976,
        "Azul Marino",
        "42"
      ],
      [
        2355977,
        "Azul Marino",
        "43"
      ]
    ]
  },
  {
    "id": 2164191,
    "n": "Tenis Classic 182",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 96,
    "sold": 186,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2164191/1780256729WhatsApp%20Image%202026-05-29%20at%207.53.31%20AM%20(3).jpeg",
    "v": [
      [
        2181415,
        "Blanco Negro",
        "35"
      ],
      [
        2181416,
        "Blanco Negro",
        "36"
      ],
      [
        2181417,
        "Blanco Negro",
        "37"
      ],
      [
        2181418,
        "Blanco Negro",
        "38"
      ],
      [
        2181419,
        "Blanco Negro",
        "39"
      ],
      [
        2181420,
        "Blanco Negro",
        "40"
      ]
    ]
  },
  {
    "id": 1925511,
    "n": "Tenis Street 183",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 96,
    "sold": 186,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1925511/1757916919WhatsApp%20Image%202025-09-15%20at%2012.08.17%20AM.jpeg",
    "v": [
      [
        1727739,
        "",
        "40"
      ],
      [
        1727734,
        "",
        "35"
      ],
      [
        1727735,
        "",
        "36"
      ],
      [
        1727736,
        "",
        "37"
      ],
      [
        1727737,
        "",
        "38"
      ],
      [
        1727738,
        "",
        "39"
      ]
    ]
  },
  {
    "id": 2123409,
    "n": "Bota Sport 184",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 174,
    "sold": 204,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2123409/1775444907WhatsApp%20Image%202026-04-05%20at%208.09.45%20PM%20(2).jpeg",
    "v": [
      [
        2082653,
        "Beige",
        "35"
      ],
      [
        2082654,
        "Beige",
        "36"
      ],
      [
        2082655,
        "Beige",
        "37"
      ],
      [
        2082656,
        "Beige",
        "38"
      ],
      [
        2082657,
        "Beige",
        "39"
      ],
      [
        2082658,
        "Beige",
        "40"
      ],
      [
        2082659,
        "Beige",
        "41"
      ],
      [
        2082660,
        "Beige",
        "42"
      ],
      [
        2082661,
        "Beige",
        "43"
      ]
    ]
  },
  {
    "id": 2031816,
    "n": "Tenis Retro 185 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 201,
    "sold": 411,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2031816/1767757787WhatsApp%20Image%202026-01-06%20at%2010.38.22%20PM%20(1).jpeg",
    "v": [
      [
        1896781,
        "",
        "35"
      ],
      [
        1896782,
        "",
        "36"
      ],
      [
        1896783,
        "",
        "37"
      ],
      [
        1896784,
        "",
        "38"
      ],
      [
        1896785,
        "",
        "39"
      ],
      [
        1896786,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 339037,
    "n": "Tenis Flex 186 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 142,
    "sold": 152,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/339037/17018797471701879747WhatsApp%20Image%202023-08-01%20at%208.01.09%20PM.jpeg",
    "v": [
      [
        199974,
        "",
        "36"
      ],
      [
        199973,
        "",
        "35"
      ],
      [
        199976,
        "",
        "38"
      ],
      [
        199975,
        "",
        "37"
      ],
      [
        199978,
        "",
        "40"
      ],
      [
        199977,
        "",
        "39"
      ]
    ]
  },
  {
    "id": 2140152,
    "n": "Tenis Runner 187 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 177,
    "sold": 287,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2140152/17773910111768518398lifestyle-shot-cd022197-cdfa-4112-bfb3-9b782629d0ac.jpeg",
    "v": [
      [
        2129231,
        "Beige",
        "38"
      ],
      [
        2129232,
        "Beige",
        "39"
      ],
      [
        2129233,
        "Beige",
        "40"
      ],
      [
        2129234,
        "Blanco",
        "35"
      ],
      [
        2129235,
        "Blanco",
        "36"
      ],
      [
        2129236,
        "Blanco",
        "37"
      ],
      [
        2129237,
        "Blanco",
        "38"
      ],
      [
        2129238,
        "Blanco",
        "39"
      ],
      [
        2129239,
        "Blanco",
        "40"
      ],
      [
        2129240,
        "Negro",
        "35"
      ],
      [
        2129241,
        "Negro",
        "36"
      ],
      [
        2129242,
        "Negro",
        "37"
      ],
      [
        2129243,
        "Negro",
        "38"
      ],
      [
        2129244,
        "Negro",
        "39"
      ],
      [
        2129245,
        "Negro",
        "40"
      ],
      [
        2129228,
        "Beige",
        "35"
      ],
      [
        2129229,
        "Beige",
        "36"
      ],
      [
        2129230,
        "Beige",
        "37"
      ]
    ]
  },
  {
    "id": 2196231,
    "n": "Tenis Casual 188 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 96,
    "sold": 266,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2196231/4009fe70-2cfd-414d-a3bb-80d119c47b07.png",
    "v": [
      [
        2252769,
        "Crema",
        "35"
      ],
      [
        2252770,
        "Crema",
        "36"
      ],
      [
        2252771,
        "Crema",
        "37"
      ],
      [
        2252772,
        "Crema",
        "38"
      ],
      [
        2252773,
        "Crema",
        "39"
      ],
      [
        2252774,
        "Crema",
        "40"
      ],
      [
        2252775,
        "Rosado Crema",
        "35"
      ],
      [
        2252776,
        "Rosado Crema",
        "36"
      ],
      [
        2252777,
        "Rosado Crema",
        "37"
      ],
      [
        2252778,
        "Rosado Crema",
        "38"
      ],
      [
        2252779,
        "Rosado Crema",
        "39"
      ],
      [
        2252780,
        "Rosado Crema",
        "40"
      ],
      [
        2252781,
        "Crema Café Negro",
        "35"
      ],
      [
        2252782,
        "Crema Café Negro",
        "36"
      ],
      [
        2252783,
        "Crema Café Negro",
        "37"
      ],
      [
        2252784,
        "Crema Café Negro",
        "38"
      ],
      [
        2252785,
        "Crema Café Negro",
        "39"
      ],
      [
        2252786,
        "Crema Café Negro",
        "40"
      ]
    ]
  },
  {
    "id": 1844502,
    "n": "Tenis Prime 189 Hombre",
    "g": "h",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 87,
    "sold": 97,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1844502/3590a007-aea7-48c6-9a11-24fe93bc565c.png",
    "v": [
      [
        1549574,
        "Negro Blanco",
        "39"
      ],
      [
        1549578,
        "Negro Blanco",
        "43"
      ],
      [
        1549571,
        "Negro",
        "43"
      ],
      [
        1549585,
        "Blanco",
        "43"
      ],
      [
        1549576,
        "Negro Blanco",
        "41"
      ],
      [
        1549570,
        "Negro",
        "42"
      ],
      [
        1549575,
        "Negro Blanco",
        "40"
      ],
      [
        1549577,
        "Negro Blanco",
        "42"
      ],
      [
        1549591,
        "Gris",
        "42"
      ],
      [
        1549590,
        "Gris",
        "41"
      ],
      [
        1549592,
        "Gris",
        "43"
      ],
      [
        1549572,
        "Negro Blanco",
        "37"
      ],
      [
        1549579,
        "Blanco",
        "37"
      ],
      [
        1549580,
        "Blanco",
        "38"
      ],
      [
        1549581,
        "Blanco",
        "39"
      ],
      [
        1549582,
        "Blanco",
        "40"
      ],
      [
        1549583,
        "Blanco",
        "41"
      ],
      [
        1549584,
        "Blanco",
        "42"
      ],
      [
        1549586,
        "Gris",
        "37"
      ],
      [
        1549587,
        "Gris",
        "38"
      ],
      [
        1549588,
        "Gris",
        "39"
      ],
      [
        1549589,
        "Gris",
        "40"
      ],
      [
        1549573,
        "Negro Blanco",
        "38"
      ],
      [
        1549566,
        "Negro",
        "38"
      ],
      [
        1549565,
        "Negro",
        "37"
      ],
      [
        1549568,
        "Negro",
        "40"
      ],
      [
        1549569,
        "Negro",
        "41"
      ],
      [
        1549567,
        "Negro",
        "39"
      ]
    ]
  },
  {
    "id": 2123369,
    "n": "Bota Active 190",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 134,
    "sold": 164,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2123369/1775438662WhatsApp%20Image%202026-04-04%20at%2010.08.45%20PM%20(8).jpeg",
    "v": [
      [
        2082469,
        "Negro",
        "35"
      ],
      [
        2082470,
        "Negro",
        "36"
      ],
      [
        2082471,
        "Negro",
        "37"
      ],
      [
        2082472,
        "Negro",
        "38"
      ],
      [
        2082473,
        "Negro",
        "39"
      ],
      [
        2082474,
        "Negro",
        "40"
      ],
      [
        2082475,
        "Negro",
        "41"
      ],
      [
        2082476,
        "Negro",
        "42"
      ],
      [
        2082477,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 1424412,
    "n": "Tenis Urban 191 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 117,
    "sold": 247,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1424412/1730935660WhatsApp%20Image%202024-10-31%20at%204.05.29%20PM%20(1).jpeg",
    "v": [
      [
        1001785,
        "Beige",
        "35"
      ],
      [
        1001786,
        "Beige",
        "36"
      ],
      [
        1001787,
        "Beige",
        "37"
      ],
      [
        1001788,
        "Beige",
        "38"
      ],
      [
        1001789,
        "Beige",
        "39"
      ],
      [
        1001790,
        "Beige",
        "40"
      ]
    ]
  },
  {
    "id": 2036938,
    "n": "Tenis Classic 192",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.9,
    "rev": 103,
    "sold": 433,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2036938/1768431491WhatsApp%20Image%202026-01-14%20at%204.22.07%20PM%20(1).jpeg",
    "v": [
      [
        1906154,
        "Beige",
        "41"
      ],
      [
        1906153,
        "Beige",
        "40"
      ],
      [
        1906155,
        "Beige",
        "42"
      ],
      [
        1906156,
        "Beige",
        "43"
      ],
      [
        1906157,
        "Negro",
        "37"
      ],
      [
        1906162,
        "Negro",
        "42"
      ],
      [
        1906163,
        "Negro",
        "43"
      ],
      [
        1906165,
        "Caramelo",
        "38"
      ],
      [
        1906166,
        "Caramelo",
        "39"
      ],
      [
        1906167,
        "Caramelo",
        "40"
      ],
      [
        1906168,
        "Caramelo",
        "41"
      ],
      [
        1906169,
        "Caramelo",
        "42"
      ],
      [
        1906152,
        "Beige",
        "39"
      ],
      [
        1906170,
        "Caramelo",
        "43"
      ],
      [
        1906150,
        "Beige",
        "37"
      ],
      [
        1906151,
        "Beige",
        "38"
      ],
      [
        1906161,
        "Negro",
        "41"
      ],
      [
        1906164,
        "Caramelo",
        "37"
      ],
      [
        1906158,
        "Negro",
        "38"
      ],
      [
        1906159,
        "Negro",
        "39"
      ],
      [
        1906160,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2096666,
    "n": "Bota Street 193",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 71,
    "sold": 321,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2096666/1772232281WhatsApp%20Image%202026-02-27%20at%2017.13.24.jpeg",
    "v": [
      [
        2024715,
        "Cafe",
        "40"
      ],
      [
        2024716,
        "Cafe",
        "41"
      ],
      [
        2024723,
        "Azul",
        "41"
      ],
      [
        2024732,
        "Beige",
        "43"
      ],
      [
        2024717,
        "Cafe",
        "42"
      ],
      [
        2024707,
        "Negro",
        "39"
      ],
      [
        2024708,
        "Negro",
        "40"
      ],
      [
        2024709,
        "Negro",
        "41"
      ],
      [
        2024710,
        "Negro",
        "42"
      ],
      [
        2024711,
        "Negro",
        "43"
      ],
      [
        2024712,
        "Cafe",
        "37"
      ],
      [
        2024713,
        "Cafe",
        "38"
      ],
      [
        2024714,
        "Cafe",
        "39"
      ],
      [
        2024719,
        "Azul",
        "37"
      ],
      [
        2024720,
        "Azul",
        "38"
      ],
      [
        2024718,
        "Cafe",
        "43"
      ],
      [
        2024724,
        "Azul",
        "42"
      ],
      [
        2024725,
        "Azul",
        "43"
      ],
      [
        2024726,
        "Beige",
        "37"
      ],
      [
        2024727,
        "Beige",
        "38"
      ],
      [
        2024728,
        "Beige",
        "39"
      ],
      [
        2024729,
        "Beige",
        "40"
      ],
      [
        2024731,
        "Beige",
        "42"
      ],
      [
        2024705,
        "Negro",
        "37"
      ],
      [
        2024706,
        "Negro",
        "38"
      ],
      [
        2024730,
        "Beige",
        "41"
      ],
      [
        2024721,
        "Azul",
        "39"
      ],
      [
        2024722,
        "Azul",
        "40"
      ]
    ]
  },
  {
    "id": 2245427,
    "n": "Tenis Sport 194",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 152,
    "sold": 162,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2245427/bde65b74-45a8-4372-a855-3ede24a76fbb.png",
    "v": [
      [
        2338919,
        "Negro",
        "35"
      ],
      [
        2338920,
        "Negro",
        "36"
      ],
      [
        2338921,
        "Negro",
        "37"
      ],
      [
        2338922,
        "Negro",
        "38"
      ],
      [
        2338923,
        "Negro",
        "39"
      ],
      [
        2338924,
        "Negro",
        "40"
      ],
      [
        2338925,
        "Blanco",
        "35"
      ],
      [
        2338926,
        "Blanco",
        "36"
      ],
      [
        2338927,
        "Blanco",
        "37"
      ],
      [
        2338928,
        "Blanco",
        "38"
      ],
      [
        2338929,
        "Blanco",
        "39"
      ],
      [
        2338930,
        "Blanco",
        "40"
      ],
      [
        2338931,
        "Beige",
        "35"
      ],
      [
        2338932,
        "Beige",
        "36"
      ],
      [
        2338933,
        "Beige",
        "37"
      ],
      [
        2338934,
        "Beige",
        "38"
      ],
      [
        2338935,
        "Beige",
        "39"
      ],
      [
        2338936,
        "Beige",
        "40"
      ]
    ]
  },
  {
    "id": 1915897,
    "n": "Tenis Retro 195",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 202,
    "sold": 432,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1915897/175692199330.jpg",
    "v": [
      [
        1706874,
        "BEIGE",
        "36"
      ],
      [
        1706876,
        "BEIGE",
        "38"
      ],
      [
        1706877,
        "BEIGE",
        "39"
      ],
      [
        1706878,
        "BEIGE",
        "40"
      ],
      [
        1706879,
        "BEIGE",
        "41"
      ],
      [
        1706880,
        "BEIGE",
        "42"
      ],
      [
        1706881,
        "BEIGE",
        "43"
      ],
      [
        1706882,
        "BLANCO",
        "35"
      ],
      [
        1706885,
        "BLANCO",
        "38"
      ],
      [
        1706886,
        "BLANCO",
        "39"
      ],
      [
        1706887,
        "BLANCO",
        "40"
      ],
      [
        1706888,
        "BLANCO",
        "41"
      ],
      [
        1706889,
        "BLANCO",
        "42"
      ],
      [
        1706890,
        "BLANCO",
        "43"
      ],
      [
        1706891,
        "GRIS",
        "35"
      ],
      [
        1706892,
        "GRIS",
        "36"
      ],
      [
        1706893,
        "GRIS",
        "37"
      ],
      [
        1706894,
        "GRIS",
        "38"
      ],
      [
        1706895,
        "GRIS",
        "39"
      ],
      [
        1706896,
        "GRIS",
        "40"
      ],
      [
        1706897,
        "GRIS",
        "41"
      ],
      [
        1706898,
        "GRIS",
        "42"
      ],
      [
        1706899,
        "GRIS",
        "43"
      ],
      [
        1706900,
        "NEGRO",
        "35"
      ],
      [
        1706901,
        "NEGRO",
        "36"
      ],
      [
        1706902,
        "NEGRO",
        "37"
      ],
      [
        1706903,
        "NEGRO",
        "38"
      ],
      [
        1706904,
        "NEGRO",
        "39"
      ],
      [
        1706905,
        "NEGRO",
        "40"
      ],
      [
        1706906,
        "NEGRO",
        "41"
      ],
      [
        1706907,
        "NEGRO",
        "42"
      ],
      [
        1706873,
        "BEIGE",
        "35"
      ],
      [
        1706875,
        "BEIGE",
        "37"
      ],
      [
        1706908,
        "NEGRO",
        "43"
      ]
    ]
  },
  {
    "id": 2134903,
    "n": "Tenis Flex 196 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 148,
    "sold": 138,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2134903/70d8032f-927a-45f8-affd-a3272e66597f.png",
    "v": [
      [
        2117630,
        "Cafe",
        "38"
      ],
      [
        2117646,
        "Negro Blanco",
        "36"
      ],
      [
        2117647,
        "Negro Blanco",
        "37"
      ],
      [
        2117638,
        "Gris",
        "40"
      ],
      [
        2117631,
        "Cafe",
        "39"
      ],
      [
        2117632,
        "Cafe",
        "40"
      ],
      [
        2117627,
        "Cafe",
        "35"
      ],
      [
        2117633,
        "Gris",
        "35"
      ],
      [
        2117634,
        "Gris",
        "36"
      ],
      [
        2117636,
        "Gris",
        "38"
      ],
      [
        2117637,
        "Gris",
        "39"
      ],
      [
        2117650,
        "Negro Blanco",
        "40"
      ],
      [
        2117628,
        "Cafe",
        "36"
      ],
      [
        2117639,
        "Negro Negro",
        "35"
      ],
      [
        2117640,
        "Negro Negro",
        "36"
      ],
      [
        2117641,
        "Negro Negro",
        "37"
      ],
      [
        2117643,
        "Negro Negro",
        "39"
      ],
      [
        2117644,
        "Negro Negro",
        "40"
      ],
      [
        2117635,
        "Gris",
        "37"
      ],
      [
        2117642,
        "Negro Negro",
        "38"
      ],
      [
        2117648,
        "Negro Blanco",
        "38"
      ],
      [
        2117649,
        "Negro Blanco",
        "39"
      ],
      [
        2117629,
        "Cafe",
        "37"
      ],
      [
        2117645,
        "Negro Blanco",
        "35"
      ]
    ]
  },
  {
    "id": 2088306,
    "n": "Zapato Runner 197",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 171,
    "sold": 121,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2088306/ca79ee4f-2665-4c94-88d3-5cab824a9197.png",
    "v": [
      [
        2004778,
        "Naranja",
        "38"
      ],
      [
        2004786,
        "Negro",
        "39"
      ],
      [
        2004787,
        "Negro",
        "40"
      ],
      [
        2004804,
        "Marron",
        "43"
      ],
      [
        2004777,
        "Naranja",
        "37"
      ],
      [
        2004802,
        "Marron",
        "41"
      ],
      [
        2004803,
        "Marron",
        "42"
      ],
      [
        2004782,
        "Naranja",
        "42"
      ],
      [
        2004779,
        "Naranja",
        "39"
      ],
      [
        2004780,
        "Naranja",
        "40"
      ],
      [
        2004781,
        "Naranja",
        "41"
      ],
      [
        2004783,
        "Naranja",
        "43"
      ],
      [
        2004784,
        "Negro",
        "37"
      ],
      [
        2004785,
        "Negro",
        "38"
      ],
      [
        2004788,
        "Negro",
        "41"
      ],
      [
        2004789,
        "Negro",
        "42"
      ],
      [
        2004790,
        "Negro",
        "43"
      ],
      [
        2004791,
        "Azul Marino",
        "37"
      ],
      [
        2004793,
        "Azul Marino",
        "39"
      ],
      [
        2004794,
        "Azul Marino",
        "40"
      ],
      [
        2004795,
        "Azul Marino",
        "41"
      ],
      [
        2004796,
        "Azul Marino",
        "42"
      ],
      [
        2004801,
        "Marron",
        "40"
      ],
      [
        2004797,
        "Azul Marino",
        "43"
      ],
      [
        2004798,
        "Marron",
        "37"
      ],
      [
        2004799,
        "Marron",
        "38"
      ],
      [
        2004800,
        "Marron",
        "39"
      ],
      [
        2004792,
        "Azul Marino",
        "38"
      ]
    ]
  },
  {
    "id": 1895352,
    "n": "Tenis Casual 198 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 177,
    "sold": 287,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1895352/17792228951768518017lifestyle-shot-5f18e64b-ed00-4dbf-8053-7349ce94f05d.jpeg",
    "v": [
      [
        1662023,
        "AZUL",
        "35"
      ],
      [
        1662022,
        "NEGRO",
        "40"
      ],
      [
        1662026,
        "AZUL",
        "38"
      ],
      [
        1662027,
        "AZUL",
        "39"
      ],
      [
        1662029,
        "GRIS",
        "35"
      ],
      [
        1662017,
        "NEGRO",
        "35"
      ],
      [
        1662018,
        "NEGRO",
        "36"
      ],
      [
        1662024,
        "AZUL",
        "36"
      ],
      [
        1662030,
        "GRIS",
        "36"
      ],
      [
        1662032,
        "GRIS",
        "38"
      ],
      [
        1662033,
        "GRIS",
        "39"
      ],
      [
        1662034,
        "GRIS",
        "40"
      ],
      [
        1662019,
        "NEGRO",
        "37"
      ],
      [
        1662020,
        "NEGRO",
        "38"
      ],
      [
        1662028,
        "AZUL",
        "40"
      ],
      [
        1662021,
        "NEGRO",
        "39"
      ],
      [
        1662025,
        "AZUL",
        "37"
      ],
      [
        1662031,
        "GRIS",
        "37"
      ]
    ]
  },
  {
    "id": 2083180,
    "n": "Zapato Prime 199",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 85,
    "sold": 95,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2083180/8f3812fc-39b2-4f9b-a092-a5c456424653.png",
    "v": [
      [
        1992368,
        "Negro",
        "38"
      ],
      [
        1992379,
        "Marrón",
        "42"
      ],
      [
        1992380,
        "Marrón",
        "43"
      ],
      [
        1992384,
        "Beige",
        "40"
      ],
      [
        1992385,
        "Beige",
        "41"
      ],
      [
        1992387,
        "Beige",
        "43"
      ],
      [
        1992386,
        "Beige",
        "42"
      ],
      [
        1992378,
        "Marrón",
        "41"
      ],
      [
        1992376,
        "Marrón",
        "39"
      ],
      [
        1992377,
        "Marrón",
        "40"
      ],
      [
        1992382,
        "Beige",
        "38"
      ],
      [
        1992367,
        "Negro",
        "37"
      ],
      [
        1992369,
        "Negro",
        "39"
      ],
      [
        1992370,
        "Negro",
        "40"
      ],
      [
        1992371,
        "Negro",
        "41"
      ],
      [
        1992372,
        "Negro",
        "42"
      ],
      [
        1992373,
        "Negro",
        "43"
      ],
      [
        1992381,
        "Beige",
        "37"
      ],
      [
        1992383,
        "Beige",
        "39"
      ],
      [
        1992374,
        "Marrón",
        "37"
      ],
      [
        1992375,
        "Marrón",
        "38"
      ]
    ]
  },
  {
    "id": 2187287,
    "n": "Tenis Active 200 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 5,
    "rev": 152,
    "sold": 162,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2187287/1782489621Tenis%20Yuan%20Dama%20extra%20Confort%202026%2009.png",
    "v": [
      [
        2228759,
        "Blanco Rojo",
        "35"
      ],
      [
        2228760,
        "Blanco Rojo",
        "36"
      ],
      [
        2228765,
        "Blanco Gris",
        "35"
      ],
      [
        2228766,
        "Blanco Gris",
        "36"
      ],
      [
        2228767,
        "Blanco Gris",
        "37"
      ],
      [
        2228768,
        "Blanco Gris",
        "38"
      ],
      [
        2228769,
        "Blanco Gris",
        "39"
      ],
      [
        2228770,
        "Blanco Gris",
        "40"
      ],
      [
        2228753,
        "Blanco Negro",
        "35"
      ],
      [
        2228754,
        "Blanco Negro",
        "36"
      ],
      [
        2228755,
        "Blanco Negro",
        "37"
      ],
      [
        2228756,
        "Blanco Negro",
        "38"
      ],
      [
        2228757,
        "Blanco Negro",
        "39"
      ],
      [
        2228758,
        "Blanco Negro",
        "40"
      ],
      [
        2228761,
        "Blanco Rojo",
        "37"
      ],
      [
        2228762,
        "Blanco Rojo",
        "38"
      ],
      [
        2228763,
        "Blanco Rojo",
        "39"
      ],
      [
        2228764,
        "Blanco Rojo",
        "40"
      ]
    ]
  },
  {
    "id": 1890829,
    "n": "Tenis Urban 201 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 154,
    "sold": 184,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1890829/1779308546175408877117023037461702303746WhatsApp%20Image%202023-03-09%20at%2011.55.29%20AM%20(2)-dropicup.png",
    "v": [
      [
        1650665,
        "NEGRO",
        "43"
      ],
      [
        1650650,
        "CARAMELO",
        "42"
      ],
      [
        1650652,
        "AZUL OSCURO",
        "37"
      ],
      [
        1650641,
        "MARRON",
        "40"
      ],
      [
        1650642,
        "MARRON",
        "41"
      ],
      [
        1650643,
        "MARRON",
        "42"
      ],
      [
        1650638,
        "MARRON",
        "37"
      ],
      [
        1650655,
        "AZUL OSCURO",
        "40"
      ],
      [
        1650654,
        "AZUL OSCURO",
        "39"
      ],
      [
        1650639,
        "MARRON",
        "38"
      ],
      [
        1650645,
        "CARAMELO",
        "37"
      ],
      [
        1650651,
        "CARAMELO",
        "43"
      ],
      [
        1650653,
        "AZUL OSCURO",
        "38"
      ],
      [
        1650662,
        "NEGRO",
        "40"
      ],
      [
        1650661,
        "NEGRO",
        "39"
      ],
      [
        1650640,
        "MARRON",
        "39"
      ],
      [
        1650648,
        "CARAMELO",
        "40"
      ],
      [
        1650644,
        "MARRON",
        "43"
      ],
      [
        1650649,
        "CARAMELO",
        "41"
      ],
      [
        1650658,
        "AZUL OSCURO",
        "43"
      ],
      [
        1650664,
        "NEGRO",
        "42"
      ],
      [
        1650647,
        "CARAMELO",
        "39"
      ],
      [
        1650646,
        "CARAMELO",
        "38"
      ],
      [
        1650660,
        "NEGRO",
        "38"
      ],
      [
        1650663,
        "NEGRO",
        "41"
      ],
      [
        1650659,
        "NEGRO",
        "37"
      ],
      [
        1650657,
        "AZUL OSCURO",
        "42"
      ],
      [
        1650656,
        "AZUL OSCURO",
        "41"
      ]
    ]
  },
  {
    "id": 1741257,
    "n": "Tenis Classic 202",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 162,
    "sold": 212,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1741257/1748460511GIF%20LOJA%20SPORT.gif",
    "v": [
      [
        1412024,
        "BEIGE",
        "36"
      ],
      [
        1412025,
        "NEGRO",
        "36"
      ],
      [
        1412026,
        "VIOLETA",
        "37"
      ],
      [
        1412027,
        "BEIGE",
        "37"
      ],
      [
        1412028,
        "NEGRO",
        "37"
      ],
      [
        1412029,
        "VIOLETA",
        "38"
      ],
      [
        1412030,
        "BEIGE",
        "38"
      ],
      [
        1412031,
        "NEGRO",
        "38"
      ],
      [
        1412032,
        "VIOLETA",
        "39"
      ],
      [
        1412033,
        "BEIGE",
        "39"
      ],
      [
        1412034,
        "NEGRO",
        "39"
      ],
      [
        1412035,
        "VIOLETA",
        "40"
      ],
      [
        1412036,
        "BEIGE",
        "40"
      ],
      [
        1412037,
        "NEGRO",
        "40"
      ],
      [
        1412023,
        "VIOLETA",
        "36"
      ]
    ]
  },
  {
    "id": 2154497,
    "n": "Zapato Street 203",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 122,
    "sold": 352,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2154497/15d0c922-b1ef-4d53-a22d-65a658a87541.png",
    "v": [
      [
        2161634,
        "Negro",
        "39"
      ],
      [
        2161642,
        "Beige",
        "40"
      ],
      [
        2161644,
        "Beige",
        "42"
      ],
      [
        2161649,
        "Marron",
        "40"
      ],
      [
        2161650,
        "Marron",
        "41"
      ],
      [
        2161652,
        "Marron",
        "43"
      ],
      [
        2161632,
        "Negro",
        "37"
      ],
      [
        2161633,
        "Negro",
        "38"
      ],
      [
        2161636,
        "Negro",
        "41"
      ],
      [
        2161637,
        "Negro",
        "42"
      ],
      [
        2161638,
        "Negro",
        "43"
      ],
      [
        2161639,
        "Beige",
        "37"
      ],
      [
        2161640,
        "Beige",
        "38"
      ],
      [
        2161643,
        "Beige",
        "41"
      ],
      [
        2161645,
        "Beige",
        "43"
      ],
      [
        2161646,
        "Marron",
        "37"
      ],
      [
        2161647,
        "Marron",
        "38"
      ],
      [
        2161648,
        "Marron",
        "39"
      ],
      [
        2161641,
        "Beige",
        "39"
      ],
      [
        2161651,
        "Marron",
        "42"
      ],
      [
        2161635,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2161680,
    "n": "Bota Sport 204",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.7,
    "rev": 105,
    "sold": 395,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2161680/1779938871203768.jpg",
    "v": [
      [
        2175908,
        "Azul",
        "41"
      ],
      [
        2175909,
        "Azul",
        "42"
      ],
      [
        2175910,
        "Azul",
        "43"
      ],
      [
        2175890,
        "Rojo",
        "37"
      ],
      [
        2175891,
        "Rojo",
        "38"
      ],
      [
        2175892,
        "Rojo",
        "39"
      ],
      [
        2175893,
        "Rojo",
        "40"
      ],
      [
        2175894,
        "Rojo",
        "41"
      ],
      [
        2175895,
        "Rojo",
        "42"
      ],
      [
        2175896,
        "Rojo",
        "43"
      ],
      [
        2175897,
        "Negro",
        "37"
      ],
      [
        2175898,
        "Negro",
        "38"
      ],
      [
        2175899,
        "Negro",
        "39"
      ],
      [
        2175900,
        "Negro",
        "40"
      ],
      [
        2175901,
        "Negro",
        "41"
      ],
      [
        2175902,
        "Negro",
        "42"
      ],
      [
        2175903,
        "Negro",
        "43"
      ],
      [
        2175904,
        "Azul",
        "37"
      ],
      [
        2175905,
        "Azul",
        "38"
      ],
      [
        2175906,
        "Azul",
        "39"
      ],
      [
        2175907,
        "Azul",
        "40"
      ]
    ]
  },
  {
    "id": 1026220,
    "n": "Tenis Retro 205 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 85,
    "sold": 195,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1026220/1748463291GIF%20WF.gif",
    "v": [
      [
        778532,
        "CAFE",
        "37"
      ],
      [
        778531,
        "CAFE",
        "36"
      ],
      [
        778530,
        "ROSADO",
        "40"
      ],
      [
        778529,
        "ROSADO",
        "39"
      ],
      [
        778528,
        "ROSADO",
        "38"
      ],
      [
        778527,
        "ROSADO",
        "37"
      ],
      [
        778526,
        "ROSADO",
        "36"
      ],
      [
        778525,
        "NEGRO",
        "40"
      ],
      [
        778524,
        "NEGRO",
        "39"
      ],
      [
        778523,
        "NEGRO",
        "38"
      ],
      [
        778522,
        "NEGRO",
        "37"
      ],
      [
        778521,
        "NEGRO",
        "36"
      ],
      [
        778533,
        "CAFE",
        "38"
      ],
      [
        778534,
        "CAFE",
        "39"
      ],
      [
        778535,
        "CAFE",
        "40"
      ]
    ]
  },
  {
    "id": 2073552,
    "n": "Tenis Flex 206",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 177,
    "sold": 327,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2073552/a23d4545-5591-427b-923d-8705506b540e.png",
    "v": [
      [
        1968931,
        "Negro Blanco",
        "42"
      ],
      [
        1968923,
        "Todo Negro",
        "41"
      ],
      [
        1968921,
        "Todo Negro",
        "39"
      ],
      [
        1968922,
        "Todo Negro",
        "40"
      ],
      [
        1968924,
        "Todo Negro",
        "42"
      ],
      [
        1968925,
        "Todo Negro",
        "43"
      ],
      [
        1968927,
        "Negro Blanco",
        "38"
      ],
      [
        1968928,
        "Negro Blanco",
        "39"
      ],
      [
        1968929,
        "Negro Blanco",
        "40"
      ],
      [
        1968932,
        "Negro Blanco",
        "43"
      ],
      [
        1968933,
        "Azul Marino",
        "37"
      ],
      [
        1968937,
        "Azul Marino",
        "41"
      ],
      [
        1968938,
        "Azul Marino",
        "42"
      ],
      [
        1968920,
        "Todo Negro",
        "38"
      ],
      [
        1968939,
        "Azul Marino",
        "43"
      ],
      [
        1968934,
        "Azul Marino",
        "38"
      ],
      [
        1968935,
        "Azul Marino",
        "39"
      ],
      [
        1968936,
        "Azul Marino",
        "40"
      ],
      [
        1968926,
        "Negro Blanco",
        "37"
      ],
      [
        1968930,
        "Negro Blanco",
        "41"
      ],
      [
        1968919,
        "Todo Negro",
        "37"
      ]
    ]
  },
  {
    "id": 1844571,
    "n": "Tenis Runner 207",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 156,
    "sold": 166,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1844571/1779043289171788.jpg",
    "v": [
      [
        1550135,
        "Rosa",
        "35"
      ],
      [
        1550156,
        "Blanco Nike Turquesa",
        "38"
      ],
      [
        1550149,
        "Blanco Nike Negro",
        "37"
      ],
      [
        1550158,
        "Blanco Nike Turquesa",
        "40"
      ],
      [
        1550157,
        "Blanco Nike Turquesa",
        "39"
      ],
      [
        1550155,
        "Blanco Nike Turquesa",
        "37"
      ],
      [
        1550154,
        "Blanco Nike Turquesa",
        "36"
      ],
      [
        1550153,
        "Blanco Nike Turquesa",
        "35"
      ],
      [
        1550152,
        "Blanco Nike Negro",
        "40"
      ],
      [
        1550151,
        "Blanco Nike Negro",
        "39"
      ],
      [
        1550150,
        "Blanco Nike Negro",
        "38"
      ],
      [
        1550148,
        "Blanco Nike Negro",
        "36"
      ],
      [
        1550147,
        "Blanco Nike Negro",
        "35"
      ],
      [
        1550146,
        "Blanco Nike gris",
        "40"
      ],
      [
        1550145,
        "Blanco Nike gris",
        "39"
      ],
      [
        1550144,
        "Blanco Nike gris",
        "38"
      ],
      [
        1550143,
        "Blanco Nike gris",
        "37"
      ],
      [
        1550142,
        "Blanco Nike gris",
        "36"
      ],
      [
        1550141,
        "Blanco Nike gris",
        "35"
      ],
      [
        1550140,
        "Rosa",
        "40"
      ],
      [
        1550139,
        "Rosa",
        "39"
      ],
      [
        1550138,
        "Rosa",
        "38"
      ],
      [
        1550137,
        "Rosa",
        "37"
      ],
      [
        1550136,
        "Rosa",
        "36"
      ]
    ]
  },
  {
    "id": 2167944,
    "n": "Tenis Casual 208",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 69,
    "sold": 199,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2167944/1780508411Producto..png",
    "v": [
      [
        2192972,
        "BLANCO/NEGRO",
        "42"
      ],
      [
        2192958,
        "NEGRO/ROJO",
        "38"
      ],
      [
        2192959,
        "NEGRO/ROJO",
        "39"
      ],
      [
        2192960,
        "NEGRO/ROJO",
        "40"
      ],
      [
        2192961,
        "NEGRO/ROJO",
        "41"
      ],
      [
        2192962,
        "NEGRO/ROJO",
        "42"
      ],
      [
        2192963,
        "BEIGE",
        "38"
      ],
      [
        2192964,
        "BEIGE",
        "39"
      ],
      [
        2192965,
        "BEIGE",
        "40"
      ],
      [
        2192966,
        "BEIGE",
        "41"
      ],
      [
        2192967,
        "BEIGE",
        "42"
      ],
      [
        2192968,
        "BLANCO/NEGRO",
        "38"
      ],
      [
        2192969,
        "BLANCO/NEGRO",
        "39"
      ],
      [
        2192970,
        "BLANCO/NEGRO",
        "40"
      ],
      [
        2192971,
        "BLANCO/NEGRO",
        "41"
      ]
    ]
  },
  {
    "id": 2162016,
    "n": "Tenis Prime 209 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 81,
    "sold": 391,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2162016/c0e43e94-a732-4bce-9342-0fcfcbc2be81.png",
    "v": [
      [
        2177062,
        "Rosa Oscuro",
        "39"
      ],
      [
        2177064,
        "Blanco",
        "35"
      ],
      [
        2177061,
        "Rosa Oscuro",
        "38"
      ],
      [
        2177065,
        "Blanco",
        "36"
      ],
      [
        2177066,
        "Blanco",
        "37"
      ],
      [
        2177067,
        "Blanco",
        "38"
      ],
      [
        2177068,
        "Blanco",
        "39"
      ],
      [
        2177069,
        "Blanco",
        "40"
      ],
      [
        2177070,
        "Blanco Plateado Fucsia",
        "35"
      ],
      [
        2177071,
        "Blanco Plateado Fucsia",
        "36"
      ],
      [
        2177072,
        "Blanco Plateado Fucsia",
        "37"
      ],
      [
        2177073,
        "Blanco Plateado Fucsia",
        "38"
      ],
      [
        2177074,
        "Blanco Plateado Fucsia",
        "39"
      ],
      [
        2177075,
        "Blanco Plateado Fucsia",
        "40"
      ],
      [
        2177059,
        "Rosa Oscuro",
        "36"
      ],
      [
        2177060,
        "Rosa Oscuro",
        "37"
      ],
      [
        2177063,
        "Rosa Oscuro",
        "40"
      ],
      [
        2177058,
        "Rosa Oscuro",
        "35"
      ]
    ]
  },
  {
    "id": 1895412,
    "n": "Tenis Active 210 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 57,
    "sold": 347,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1895412/17546833171743181330WhatsApp%20Image%202025-03-28%20at%2011.10.12%20AM%20(1).jpeg",
    "v": [
      [
        1662124,
        "NEGRO",
        "38"
      ],
      [
        1662125,
        "NEGRO",
        "39"
      ],
      [
        1662126,
        "NEGRO",
        "40"
      ],
      [
        1662127,
        "ROSA",
        "35"
      ],
      [
        1662131,
        "ROSA",
        "39"
      ],
      [
        1662130,
        "ROSA",
        "38"
      ],
      [
        1662137,
        "GRIS",
        "39"
      ],
      [
        1662122,
        "NEGRO",
        "36"
      ],
      [
        1662128,
        "ROSA",
        "36"
      ],
      [
        1662138,
        "GRIS",
        "40"
      ],
      [
        1662129,
        "ROSA",
        "37"
      ],
      [
        1662135,
        "GRIS",
        "37"
      ],
      [
        1662136,
        "GRIS",
        "38"
      ],
      [
        1662134,
        "GRIS",
        "36"
      ],
      [
        1662133,
        "GRIS",
        "35"
      ],
      [
        1662132,
        "ROSA",
        "40"
      ]
    ]
  },
  {
    "id": 2082375,
    "n": "Tenis Urban 211",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 180,
    "sold": 310,
    "stock": 6,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2082375/1cb6a783-3efe-4275-b840-95ba7784372c.png",
    "v": [
      [
        1990309,
        "Gris",
        "39"
      ],
      [
        1990310,
        "Gris",
        "40"
      ],
      [
        1990311,
        "Gris",
        "41"
      ],
      [
        1990306,
        "Negro",
        "43"
      ],
      [
        1990307,
        "Gris",
        "37"
      ],
      [
        1990308,
        "Gris",
        "38"
      ],
      [
        1990312,
        "Gris",
        "42"
      ],
      [
        1990313,
        "Gris",
        "43"
      ],
      [
        1990293,
        "Blanco",
        "37"
      ],
      [
        1990294,
        "Blanco",
        "38"
      ],
      [
        1990295,
        "Blanco",
        "39"
      ],
      [
        1990296,
        "Blanco",
        "40"
      ],
      [
        1990297,
        "Blanco",
        "41"
      ],
      [
        1990298,
        "Blanco",
        "42"
      ],
      [
        1990299,
        "Blanco",
        "43"
      ],
      [
        1990300,
        "Negro",
        "37"
      ],
      [
        1990301,
        "Negro",
        "38"
      ],
      [
        1990302,
        "Negro",
        "39"
      ],
      [
        1990303,
        "Negro",
        "40"
      ],
      [
        1990304,
        "Negro",
        "41"
      ],
      [
        1990305,
        "Negro",
        "42"
      ]
    ]
  },
  {
    "id": 2148111,
    "n": "Tenis Classic 212",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 216,
    "sold": 426,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2148111/0c79ff0c-a5ff-4701-a086-10cf30875534.png",
    "v": [
      [
        2146099,
        "Blanco Azul",
        "37"
      ],
      [
        2146097,
        "Blanco Azul",
        "35"
      ],
      [
        2146098,
        "Blanco Azul",
        "36"
      ],
      [
        2146112,
        "Blanco Plateado",
        "38"
      ],
      [
        2146114,
        "Blanco Plateado",
        "40"
      ],
      [
        2146106,
        "Blanco Lila",
        "38"
      ],
      [
        2146107,
        "Blanco Lila",
        "39"
      ],
      [
        2146108,
        "Blanco Lila",
        "40"
      ],
      [
        2146100,
        "Blanco Azul",
        "38"
      ],
      [
        2146101,
        "Blanco Azul",
        "39"
      ],
      [
        2146102,
        "Blanco Azul",
        "40"
      ],
      [
        2146103,
        "Blanco Lila",
        "35"
      ],
      [
        2146104,
        "Blanco Lila",
        "36"
      ],
      [
        2146105,
        "Blanco Lila",
        "37"
      ],
      [
        2146109,
        "Blanco Plateado",
        "35"
      ],
      [
        2146110,
        "Blanco Plateado",
        "36"
      ],
      [
        2146111,
        "Blanco Plateado",
        "37"
      ],
      [
        2146113,
        "Blanco Plateado",
        "39"
      ],
      [
        2146091,
        "Negro",
        "35"
      ],
      [
        2146092,
        "Negro",
        "36"
      ],
      [
        2146093,
        "Negro",
        "37"
      ],
      [
        2146094,
        "Negro",
        "38"
      ],
      [
        2146095,
        "Negro",
        "39"
      ],
      [
        2146096,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2245429,
    "n": "Tenis Street 213",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 154,
    "sold": 164,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2245429/3ee8b7f0-2cd8-4e02-89a0-b447c01e35a5.jpeg",
    "v": [
      [
        2338959,
        "BLANCO AZUL",
        "40"
      ],
      [
        2338956,
        "BLANCO AZUL",
        "37"
      ],
      [
        2338957,
        "BLANCO AZUL",
        "38"
      ],
      [
        2338958,
        "BLANCO AZUL",
        "39"
      ],
      [
        2338960,
        "BLANCO AZUL",
        "41"
      ],
      [
        2338961,
        "BLANCO AZUL",
        "42"
      ],
      [
        2338962,
        "BLANCO AZUL",
        "43"
      ]
    ]
  },
  {
    "id": 2241132,
    "n": "Tenis Sport 214",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 177,
    "sold": 287,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2241132/c067f49f-6729-4345-a146-86542c371cf1.jpeg",
    "v": [
      [
        2332627,
        "NEGRO BLANCO",
        "43"
      ],
      [
        2332621,
        "NEGRO BLANCO",
        "37"
      ],
      [
        2332622,
        "NEGRO BLANCO",
        "38"
      ],
      [
        2332623,
        "NEGRO BLANCO",
        "39"
      ],
      [
        2332624,
        "NEGRO BLANCO",
        "40"
      ],
      [
        2332625,
        "NEGRO BLANCO",
        "41"
      ],
      [
        2332626,
        "NEGRO BLANCO",
        "42"
      ]
    ]
  },
  {
    "id": 2166083,
    "n": "Tenis Retro 215",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 188,
    "sold": 378,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2166083/17804501131772426421bba2ea5f-6d6a-43c7-8b50-ab479f51d830%20(2).jpg",
    "v": [
      [
        2185208,
        "Beige vino",
        "37"
      ],
      [
        2185209,
        "Beige vino",
        "38"
      ],
      [
        2185210,
        "Beige vino",
        "39"
      ],
      [
        2185211,
        "Beige vino",
        "40"
      ],
      [
        2185212,
        "Beige vino",
        "41"
      ],
      [
        2185213,
        "Beige vino",
        "42"
      ],
      [
        2185214,
        "Beige vino",
        "43"
      ]
    ]
  },
  {
    "id": 1846629,
    "n": "Tenis Flex 216 Dama",
    "g": "m",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 54,
    "sold": 184,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1846629/1749678857GIF%20AQUA.gif",
    "v": [
      [
        1554884,
        "NEGRO",
        "40"
      ],
      [
        1554883,
        "BLANCO",
        "40"
      ],
      [
        1554882,
        "BEIGE",
        "40"
      ],
      [
        1554881,
        "NEGRO",
        "39"
      ],
      [
        1554880,
        "BLANCO",
        "39"
      ],
      [
        1554879,
        "BEIGE",
        "39"
      ],
      [
        1554878,
        "NEGRO",
        "38"
      ],
      [
        1554877,
        "BLANCO",
        "38"
      ],
      [
        1554876,
        "BEIGE",
        "38"
      ],
      [
        1554875,
        "NEGRO",
        "37"
      ],
      [
        1554874,
        "BLANCO",
        "37"
      ],
      [
        1554873,
        "BEIGE",
        "37"
      ],
      [
        1554872,
        "NEGRO",
        "36"
      ],
      [
        1554871,
        "BLANCO",
        "36"
      ],
      [
        1554870,
        "BEIGE",
        "36"
      ]
    ]
  },
  {
    "id": 1308524,
    "n": "Tenis Runner 217 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 149,
    "sold": 299,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1308524/1728076156WhatsApp%20Image%202024-10-04%20at%2012.23.34%20PM.jpeg",
    "v": [
      [
        939334,
        "Beige",
        "37"
      ],
      [
        939333,
        "Beige",
        "36"
      ],
      [
        939332,
        "Beige",
        "35"
      ],
      [
        939336,
        "Beige",
        "39"
      ],
      [
        939337,
        "Beige",
        "40"
      ],
      [
        939335,
        "Beige",
        "38"
      ]
    ]
  },
  {
    "id": 1374563,
    "n": "Tenis Casual 218 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 128,
    "sold": 378,
    "stock": 8,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1374563/1748462192GIF%20ADM.gif",
    "v": [
      [
        980743,
        "ROSADO",
        "40"
      ],
      [
        980742,
        "AZUL",
        "40"
      ],
      [
        980741,
        "NEGRO",
        "40"
      ],
      [
        980740,
        "ROSADO",
        "39"
      ],
      [
        980739,
        "AZUL",
        "39"
      ],
      [
        980738,
        "NEGRO",
        "39"
      ],
      [
        980737,
        "ROSADO",
        "38"
      ],
      [
        980736,
        "AZUL",
        "38"
      ],
      [
        980735,
        "NEGRO",
        "38"
      ],
      [
        980734,
        "ROSADO",
        "37"
      ],
      [
        980733,
        "AZUL",
        "37"
      ],
      [
        980732,
        "NEGRO",
        "37"
      ],
      [
        980731,
        "ROSADO",
        "36"
      ],
      [
        980730,
        "AZUL",
        "36"
      ],
      [
        980729,
        "NEGRO",
        "36"
      ]
    ]
  },
  {
    "id": 1282918,
    "n": "Tenis Prime 219 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 103,
    "sold": 193,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1282918/1748462011GIF%20AMX.gif",
    "v": [
      [
        927668,
        "CAFE",
        "42"
      ],
      [
        927667,
        "CAFE",
        "41"
      ],
      [
        927666,
        "CAFE",
        "40"
      ],
      [
        927665,
        "GRIS",
        "44"
      ],
      [
        927664,
        "GRIS",
        "43"
      ],
      [
        927663,
        "GRIS",
        "42"
      ],
      [
        927662,
        "GRIS",
        "41"
      ],
      [
        927670,
        "CAFE",
        "44"
      ],
      [
        927656,
        "NEGRO",
        "40"
      ],
      [
        927657,
        "NEGRO",
        "41"
      ],
      [
        927658,
        "NEGRO",
        "42"
      ],
      [
        927659,
        "NEGRO",
        "43"
      ],
      [
        927661,
        "GRIS",
        "40"
      ],
      [
        927669,
        "CAFE",
        "43"
      ],
      [
        927660,
        "NEGRO",
        "44"
      ]
    ]
  },
  {
    "id": 2063130,
    "n": "Tenis Active 220 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 195,
    "sold": 105,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2063130/886fe8fc-7f29-4991-ac62-5be1a8c3c5fe.png",
    "v": [
      [
        1963621,
        "Negro Marron",
        "38"
      ],
      [
        1963636,
        "Azul Marino",
        "39"
      ],
      [
        1963626,
        "Negro Marron",
        "43"
      ],
      [
        1963635,
        "Azul Marino",
        "38"
      ],
      [
        1963637,
        "Azul Marino",
        "40"
      ],
      [
        1963640,
        "Azul Marino",
        "43"
      ],
      [
        1963622,
        "Negro Marron",
        "39"
      ],
      [
        1963633,
        "Blanco",
        "43"
      ],
      [
        1963614,
        "Negro Blanco",
        "38"
      ],
      [
        1963615,
        "Negro Blanco",
        "39"
      ],
      [
        1963616,
        "Negro Blanco",
        "40"
      ],
      [
        1963617,
        "Negro Blanco",
        "41"
      ],
      [
        1963618,
        "Negro Blanco",
        "42"
      ],
      [
        1963620,
        "Negro Marron",
        "37"
      ],
      [
        1963623,
        "Negro Marron",
        "40"
      ],
      [
        1963624,
        "Negro Marron",
        "41"
      ],
      [
        1963625,
        "Negro Marron",
        "42"
      ],
      [
        1963638,
        "Azul Marino",
        "41"
      ],
      [
        1963627,
        "Blanco",
        "37"
      ],
      [
        1963628,
        "Blanco",
        "38"
      ],
      [
        1963629,
        "Blanco",
        "39"
      ],
      [
        1963630,
        "Blanco",
        "40"
      ],
      [
        1963631,
        "Blanco",
        "41"
      ],
      [
        1963632,
        "Blanco",
        "42"
      ],
      [
        1963619,
        "Negro Blanco",
        "43"
      ],
      [
        1963639,
        "Azul Marino",
        "42"
      ],
      [
        1963634,
        "Azul Marino",
        "37"
      ],
      [
        1963613,
        "Negro Blanco",
        "37"
      ]
    ]
  },
  {
    "id": 2211636,
    "n": "Tenis Urban 221",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 201,
    "sold": 371,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2211636/1784927615390058.png",
    "v": [
      [
        2281325,
        "Negro",
        "41"
      ],
      [
        2281326,
        "Negro",
        "42"
      ],
      [
        2281327,
        "Negro",
        "43"
      ],
      [
        2281310,
        "Blanco",
        "35"
      ],
      [
        2281311,
        "Blanco",
        "36"
      ],
      [
        2281312,
        "Blanco",
        "37"
      ],
      [
        2281313,
        "Blanco",
        "38"
      ],
      [
        2281314,
        "Blanco",
        "39"
      ],
      [
        2281315,
        "Blanco",
        "40"
      ],
      [
        2281316,
        "Blanco",
        "41"
      ],
      [
        2281317,
        "Blanco",
        "42"
      ],
      [
        2281318,
        "Blanco",
        "43"
      ],
      [
        2281319,
        "Negro",
        "35"
      ],
      [
        2281320,
        "Negro",
        "36"
      ],
      [
        2281321,
        "Negro",
        "37"
      ],
      [
        2281322,
        "Negro",
        "38"
      ],
      [
        2281323,
        "Negro",
        "39"
      ],
      [
        2281324,
        "Negro",
        "40"
      ]
    ]
  },
  {
    "id": 2088301,
    "n": "Zapato Classic 222",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 166,
    "sold": 116,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2088301/7b7edc66-afa1-4c28-ad5e-16eb2bf0ad8a.png",
    "v": [
      [
        2004759,
        "Negro",
        "42"
      ],
      [
        2004756,
        "Negro",
        "39"
      ],
      [
        2004757,
        "Negro",
        "40"
      ],
      [
        2004758,
        "Negro",
        "41"
      ],
      [
        2004760,
        "Negro",
        "43"
      ],
      [
        2004765,
        "Marron",
        "41"
      ],
      [
        2004769,
        "Blanco",
        "38"
      ],
      [
        2004772,
        "Blanco",
        "41"
      ],
      [
        2004773,
        "Blanco",
        "42"
      ],
      [
        2004763,
        "Marron",
        "39"
      ],
      [
        2004764,
        "Marron",
        "40"
      ],
      [
        2004755,
        "Negro",
        "38"
      ],
      [
        2004762,
        "Marron",
        "38"
      ],
      [
        2004766,
        "Marron",
        "42"
      ],
      [
        2004767,
        "Marron",
        "43"
      ],
      [
        2004768,
        "Blanco",
        "37"
      ],
      [
        2004770,
        "Blanco",
        "39"
      ],
      [
        2004771,
        "Blanco",
        "40"
      ],
      [
        2004774,
        "Blanco",
        "43"
      ],
      [
        2004754,
        "Negro",
        "37"
      ],
      [
        2004761,
        "Marron",
        "37"
      ]
    ]
  },
  {
    "id": 70851,
    "n": "Tenis Street 223",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 156,
    "sold": 226,
    "stock": 6,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/70851/17023897621702389762O2ZDaPMz1XSQxnydA7yDibXus28JcUst9aw1H3Lv.jpeg",
    "v": [
      [
        40828,
        "",
        "38"
      ],
      [
        40833,
        "",
        "43"
      ],
      [
        40827,
        "",
        "37"
      ],
      [
        40829,
        "",
        "39"
      ]
    ]
  },
  {
    "id": 2199369,
    "n": "Tenis Sport 224 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 174,
    "sold": 344,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2199369/1783715781WhatsApp%20Image%202026-07-09%20at%204.44.49%20PM.jpeg",
    "v": [
      [
        2256673,
        "TALCO",
        "39"
      ],
      [
        2256680,
        "NEGRO",
        "40"
      ],
      [
        2256669,
        "TALCO",
        "35"
      ],
      [
        2256670,
        "TALCO",
        "36"
      ],
      [
        2256671,
        "TALCO",
        "37"
      ],
      [
        2256672,
        "TALCO",
        "38"
      ],
      [
        2256674,
        "TALCO",
        "40"
      ],
      [
        2256675,
        "NEGRO",
        "35"
      ],
      [
        2256676,
        "NEGRO",
        "36"
      ],
      [
        2256677,
        "NEGRO",
        "37"
      ],
      [
        2256678,
        "NEGRO",
        "38"
      ],
      [
        2256679,
        "NEGRO",
        "39"
      ]
    ]
  },
  {
    "id": 2189066,
    "n": "Tenis Retro 225",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 131,
    "sold": 241,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2189066/1782794133WhatsApp%20Image%202026-06-29%20at%209.42.52%20PM.jpeg",
    "v": [
      [
        2232694,
        "Negro Blanco Chulo Azul",
        "40"
      ],
      [
        2232689,
        "Negro Blanco Chulo Azul",
        "35"
      ],
      [
        2232690,
        "Negro Blanco Chulo Azul",
        "36"
      ],
      [
        2232691,
        "Negro Blanco Chulo Azul",
        "37"
      ],
      [
        2232692,
        "Negro Blanco Chulo Azul",
        "38"
      ],
      [
        2232693,
        "Negro Blanco Chulo Azul",
        "39"
      ]
    ]
  },
  {
    "id": 2240251,
    "n": "Tenis Flex 226",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 5,
    "rev": 196,
    "sold": 426,
    "stock": 4,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2240251/ca4f38a9-4bec-424b-a916-d08a48df0d47.jpeg",
    "v": [
      [
        2331433,
        "BLANCO AZUL",
        "35"
      ],
      [
        2331434,
        "BLANCO AZUL",
        "36"
      ],
      [
        2331435,
        "BLANCO AZUL",
        "37"
      ],
      [
        2331436,
        "BLANCO AZUL",
        "38"
      ],
      [
        2331437,
        "BLANCO AZUL",
        "39"
      ],
      [
        2331438,
        "BLANCO AZUL",
        "40"
      ]
    ]
  },
  {
    "id": 2184446,
    "n": "Tenis Runner 227",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 191,
    "sold": 381,
    "stock": 5,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2184446/1782278213WhatsApp%20Image%202026-06-23%20at%2010.48.45%20PM%20(3).jpeg",
    "v": [
      [
        2224406,
        "NEGRO BLANCO",
        "35"
      ],
      [
        2224407,
        "NEGRO BLANCO",
        "36"
      ],
      [
        2224408,
        "NEGRO BLANCO",
        "37"
      ],
      [
        2224409,
        "NEGRO BLANCO",
        "38"
      ],
      [
        2224410,
        "NEGRO BLANCO",
        "39"
      ],
      [
        2224411,
        "NEGRO BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 2288215,
    "n": "Tenis Casual 228 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 100,
    "sold": 110,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2288215/198e277c-5ca7-4483-b48e-b68cca6fff58.jpeg",
    "v": [
      [
        2403656,
        "",
        "35"
      ],
      [
        2403657,
        "",
        "36"
      ],
      [
        2403658,
        "",
        "37"
      ],
      [
        2403659,
        "",
        "38"
      ],
      [
        2403660,
        "",
        "39"
      ],
      [
        2403661,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 2145804,
    "n": "Zapato Prime 229 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 69,
    "sold": 159,
    "stock": 3,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2145804/1778094817mocasin%20p007.jpg",
    "v": [
      [
        2140898,
        "Negro",
        "37"
      ],
      [
        2140901,
        "Negro",
        "40"
      ],
      [
        2140890,
        "Azul",
        "35"
      ],
      [
        2140891,
        "Azul",
        "36"
      ],
      [
        2140892,
        "Azul",
        "37"
      ],
      [
        2140900,
        "Negro",
        "39"
      ],
      [
        2140893,
        "Azul",
        "38"
      ],
      [
        2140894,
        "Azul",
        "39"
      ],
      [
        2140895,
        "Azul",
        "40"
      ],
      [
        2140896,
        "Negro",
        "35"
      ],
      [
        2140897,
        "Negro",
        "36"
      ],
      [
        2140899,
        "Negro",
        "38"
      ]
    ]
  },
  {
    "id": 2241123,
    "n": "Tenis Active 230 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 168,
    "sold": 278,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2241123/15094355-e839-408b-bc9d-39fabf0fbebb.jpeg",
    "v": [
      [
        2332574,
        "BLANCO",
        "35"
      ],
      [
        2332575,
        "BLANCO",
        "36"
      ],
      [
        2332576,
        "BLANCO",
        "37"
      ],
      [
        2332577,
        "BLANCO",
        "38"
      ],
      [
        2332578,
        "BLANCO",
        "39"
      ],
      [
        2332579,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 2262780,
    "n": "Tenis Urban 231 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 45,
    "sold": 175,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2262780/30d5d6ae-0ddd-4a40-8126-b19f7a129a3f.jpeg",
    "v": [
      [
        2362491,
        "",
        "36"
      ],
      [
        2362492,
        "",
        "37"
      ],
      [
        2362493,
        "",
        "38"
      ],
      [
        2362494,
        "",
        "39"
      ],
      [
        2362495,
        "",
        "40"
      ],
      [
        2362490,
        "",
        "35"
      ]
    ]
  },
  {
    "id": 2129404,
    "n": "Sandalia Classic 232",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 49,
    "sold": 419,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2129404/1776199434WhatsApp%20Image%202026-04-10%20at%2010.58.53%20AM%20(2).jpeg",
    "v": [
      [
        2103803,
        "NEGRO",
        "39"
      ],
      [
        2103804,
        "NEGRO",
        "40"
      ],
      [
        2103793,
        "MIEL",
        "35"
      ],
      [
        2103794,
        "MIEL",
        "36"
      ],
      [
        2103795,
        "MIEL",
        "37"
      ],
      [
        2103796,
        "MIEL",
        "38"
      ],
      [
        2103797,
        "MIEL",
        "39"
      ],
      [
        2103798,
        "MIEL",
        "40"
      ],
      [
        2103799,
        "NEGRO",
        "35"
      ],
      [
        2103800,
        "NEGRO",
        "36"
      ],
      [
        2103801,
        "NEGRO",
        "37"
      ],
      [
        2103802,
        "NEGRO",
        "38"
      ]
    ]
  },
  {
    "id": 2262778,
    "n": "Tenis Street 233 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 223,
    "sold": 173,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2262778/39dd2540-4ea6-4d32-865b-19f159487fc3.jpeg",
    "v": [
      [
        2362484,
        "",
        "35"
      ],
      [
        2362485,
        "",
        "36"
      ],
      [
        2362486,
        "",
        "37"
      ],
      [
        2362487,
        "",
        "38"
      ],
      [
        2362488,
        "",
        "39"
      ],
      [
        2362489,
        "",
        "40"
      ]
    ]
  },
  {
    "id": 2083208,
    "n": "Tenis Sport 234 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.7,
    "rev": 113,
    "sold": 123,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2083208/6964c352-a952-4408-9aa3-73255e7344a9.png",
    "v": [
      [
        1992474,
        "Blanco Lila",
        "37"
      ],
      [
        1992472,
        "Blanco Lila",
        "35"
      ],
      [
        1992473,
        "Blanco Lila",
        "36"
      ],
      [
        1992471,
        "Negro",
        "40"
      ],
      [
        1992481,
        "Blanco Azul",
        "38"
      ],
      [
        1992482,
        "Blanco Azul",
        "39"
      ],
      [
        1992483,
        "Blanco Azul",
        "40"
      ],
      [
        1992479,
        "Blanco Azul",
        "36"
      ],
      [
        1992470,
        "Negro",
        "39"
      ],
      [
        1992467,
        "Negro",
        "36"
      ],
      [
        1992468,
        "Negro",
        "37"
      ],
      [
        1992469,
        "Negro",
        "38"
      ],
      [
        1992478,
        "Blanco Azul",
        "35"
      ],
      [
        1992480,
        "Blanco Azul",
        "37"
      ],
      [
        1992475,
        "Blanco Lila",
        "38"
      ],
      [
        1992466,
        "Negro",
        "35"
      ],
      [
        1992476,
        "Blanco Lila",
        "39"
      ],
      [
        1992477,
        "Blanco Lila",
        "40"
      ]
    ]
  },
  {
    "id": 2130821,
    "n": "Tenis Retro 235",
    "g": "u",
    "p": 139900,
    "o": 199900,
    "rate": 4.8,
    "rev": 206,
    "sold": 136,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2130821/17763638767.jpg",
    "v": [
      [
        2107145,
        "Negro",
        "41"
      ],
      [
        2107159,
        "Blanco",
        "39"
      ],
      [
        2107132,
        "Blanco/Negro",
        "36"
      ],
      [
        2107133,
        "Blanco/Negro",
        "37"
      ],
      [
        2107134,
        "Blanco/Negro",
        "38"
      ],
      [
        2107135,
        "Blanco/Negro",
        "39"
      ],
      [
        2107136,
        "Blanco/Negro",
        "40"
      ],
      [
        2107137,
        "Blanco/Negro",
        "41"
      ],
      [
        2107138,
        "Blanco/Negro",
        "42"
      ],
      [
        2107139,
        "Blanco/Negro",
        "43"
      ],
      [
        2107140,
        "Negro",
        "36"
      ],
      [
        2107141,
        "Negro",
        "37"
      ],
      [
        2107142,
        "Negro",
        "38"
      ],
      [
        2107143,
        "Negro",
        "39"
      ],
      [
        2107144,
        "Negro",
        "40"
      ],
      [
        2107146,
        "Negro",
        "42"
      ],
      [
        2107147,
        "Negro",
        "43"
      ],
      [
        2107148,
        "Gris Claro",
        "36"
      ],
      [
        2107149,
        "Gris Claro",
        "37"
      ],
      [
        2107150,
        "Gris Claro",
        "38"
      ],
      [
        2107151,
        "Gris Claro",
        "39"
      ],
      [
        2107152,
        "Gris Claro",
        "40"
      ],
      [
        2107153,
        "Gris Claro",
        "41"
      ],
      [
        2107154,
        "Gris Claro",
        "42"
      ],
      [
        2107155,
        "Gris Claro",
        "43"
      ],
      [
        2107156,
        "Blanco",
        "36"
      ],
      [
        2107157,
        "Blanco",
        "37"
      ],
      [
        2107158,
        "Blanco",
        "38"
      ],
      [
        2107160,
        "Blanco",
        "40"
      ],
      [
        2107161,
        "Blanco",
        "41"
      ],
      [
        2107162,
        "Blanco",
        "42"
      ],
      [
        2107163,
        "Blanco",
        "43"
      ]
    ]
  },
  {
    "id": 1915390,
    "n": "Tenis Flex 236",
    "g": "u",
    "p": 139900,
    "o": 199900,
    "rate": 4.9,
    "rev": 55,
    "sold": 265,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1915390/1757394541PRODUCTO%20EXCLUSIVO%20RXR.jpg",
    "v": [
      [
        1705846,
        "NEGRO",
        "40"
      ],
      [
        1705844,
        "NEGRO",
        "38"
      ],
      [
        1705843,
        "NEGRO",
        "37"
      ],
      [
        1705832,
        "BLANCO",
        "35"
      ],
      [
        1705833,
        "BLANCO",
        "36"
      ],
      [
        1705840,
        "BLANCO",
        "43"
      ],
      [
        1705842,
        "NEGRO",
        "36"
      ],
      [
        1705854,
        "BLANCO/NEGRO",
        "39"
      ],
      [
        1705836,
        "BLANCO",
        "39"
      ],
      [
        1705841,
        "NEGRO",
        "35"
      ],
      [
        1705858,
        "BLANCO/NEGRO",
        "43"
      ],
      [
        1705826,
        "BEIGE",
        "38"
      ],
      [
        1705857,
        "BLANCO/NEGRO",
        "42"
      ],
      [
        1705823,
        "BEIGE",
        "35"
      ],
      [
        1718506,
        "BLANCO",
        "44"
      ],
      [
        1705837,
        "BLANCO",
        "40"
      ],
      [
        1705827,
        "BEIGE",
        "39"
      ],
      [
        1705845,
        "NEGRO",
        "39"
      ],
      [
        1705847,
        "NEGRO",
        "41"
      ],
      [
        1705850,
        "BLANCO/NEGRO",
        "35"
      ],
      [
        1705851,
        "BLANCO/NEGRO",
        "36"
      ],
      [
        1705852,
        "BLANCO/NEGRO",
        "37"
      ],
      [
        1705856,
        "BLANCO/NEGRO",
        "41"
      ],
      [
        1705838,
        "BLANCO",
        "41"
      ],
      [
        1705839,
        "BLANCO",
        "42"
      ],
      [
        1705825,
        "BEIGE",
        "37"
      ],
      [
        1705853,
        "BLANCO/NEGRO",
        "38"
      ],
      [
        1705830,
        "BEIGE",
        "42"
      ],
      [
        1705855,
        "BLANCO/NEGRO",
        "40"
      ],
      [
        1705824,
        "BEIGE",
        "36"
      ]
    ]
  },
  {
    "id": 1500815,
    "n": "Tenis Runner 237",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 200,
    "sold": 150,
    "stock": 8,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1500815/d0b385c4-8a63-4172-83f4-ea4463e31d86.png",
    "v": [
      [
        2041983,
        "Todo Negro",
        "39"
      ],
      [
        2041986,
        "Todo Negro",
        "42"
      ],
      [
        2041987,
        "Todo Negro",
        "43"
      ],
      [
        1053406,
        "Negro Suela Blanca",
        "43"
      ],
      [
        1053405,
        "Negro Suela Blanca",
        "42"
      ],
      [
        1053404,
        "Negro Suela Blanca",
        "41"
      ],
      [
        1053403,
        "Negro Suela Blanca",
        "40"
      ],
      [
        1053402,
        "Negro Suela Blanca",
        "39"
      ],
      [
        1053401,
        "Negro Suela Blanca",
        "38"
      ],
      [
        1053400,
        "Negro Suela Blanca",
        "37"
      ],
      [
        1053399,
        "Negro Suela Blanca",
        "36"
      ],
      [
        2041979,
        "Todo Negro",
        "35"
      ],
      [
        2041980,
        "Todo Negro",
        "36"
      ],
      [
        2041981,
        "Todo Negro",
        "37"
      ],
      [
        2041982,
        "Todo Negro",
        "38"
      ],
      [
        2041984,
        "Todo Negro",
        "40"
      ],
      [
        1053398,
        "Negro Suela Blanca",
        "35"
      ],
      [
        2041985,
        "Todo Negro",
        "41"
      ]
    ]
  },
  {
    "id": 1908580,
    "n": "Tenis Casual 238",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 85,
    "sold": 255,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1908580/17562681662.jpg",
    "v": [
      [
        1692999,
        "PLATA",
        "36"
      ],
      [
        1693000,
        "ROSADO",
        "36"
      ],
      [
        1693001,
        "GRIS/NEGRO",
        "36"
      ],
      [
        1693002,
        "PLATA",
        "37"
      ],
      [
        1693003,
        "ROSADO",
        "37"
      ],
      [
        1693004,
        "GRIS/NEGRO",
        "37"
      ],
      [
        1693005,
        "PLATA",
        "38"
      ],
      [
        1693006,
        "ROSADO",
        "38"
      ],
      [
        1693007,
        "GRIS/NEGRO",
        "38"
      ],
      [
        1693008,
        "PLATA",
        "39"
      ],
      [
        1693009,
        "ROSADO",
        "39"
      ],
      [
        1693010,
        "GRIS/NEGRO",
        "39"
      ],
      [
        1693011,
        "PLATA",
        "40"
      ],
      [
        1693012,
        "ROSADO",
        "40"
      ],
      [
        1693013,
        "GRIS/NEGRO",
        "40"
      ]
    ]
  },
  {
    "id": 1899677,
    "n": "Zapato Prime 239",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 182,
    "sold": 192,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1899677/e7147361-8272-4107-8a08-95ab62b9ae4a.png",
    "v": [
      [
        1672702,
        "Marrón",
        "37"
      ],
      [
        1672714,
        "Marrón Claro",
        "42"
      ],
      [
        1672699,
        "Negro",
        "41"
      ],
      [
        1672715,
        "Marrón Claro",
        "43"
      ],
      [
        1672713,
        "Marrón Claro",
        "41"
      ],
      [
        1672712,
        "Marrón Claro",
        "40"
      ],
      [
        1672711,
        "Marrón Claro",
        "39"
      ],
      [
        1672710,
        "Marrón Claro",
        "38"
      ],
      [
        1672708,
        "Marrón",
        "43"
      ],
      [
        1672704,
        "Marrón",
        "39"
      ],
      [
        1672703,
        "Marrón",
        "38"
      ],
      [
        1672700,
        "Negro",
        "42"
      ],
      [
        1672698,
        "Negro",
        "40"
      ],
      [
        1672696,
        "Negro",
        "38"
      ],
      [
        1672695,
        "Negro",
        "37"
      ],
      [
        1672709,
        "Marrón Claro",
        "37"
      ],
      [
        1672707,
        "Marrón",
        "42"
      ],
      [
        1672706,
        "Marrón",
        "41"
      ],
      [
        1672705,
        "Marrón",
        "40"
      ],
      [
        1672701,
        "Negro",
        "43"
      ],
      [
        1672697,
        "Negro",
        "39"
      ]
    ]
  },
  {
    "id": 1453080,
    "n": "Tenis Active 240 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.7,
    "rev": 165,
    "sold": 355,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1453080/1748457541GIF%20YRZ.gif",
    "v": [
      [
        1034335,
        "AZUL",
        "41"
      ],
      [
        1034330,
        "ROJO",
        "42"
      ],
      [
        1034331,
        "ROJO",
        "43"
      ],
      [
        1034333,
        "AZUL",
        "39"
      ],
      [
        1034332,
        "ROJO",
        "44"
      ],
      [
        1034327,
        "ROJO",
        "39"
      ],
      [
        1034328,
        "ROJO",
        "40"
      ],
      [
        1034329,
        "ROJO",
        "41"
      ],
      [
        1034336,
        "AZUL",
        "42"
      ],
      [
        1034334,
        "AZUL",
        "40"
      ],
      [
        1034338,
        "AZUL",
        "44"
      ],
      [
        1034337,
        "AZUL",
        "43"
      ]
    ]
  },
  {
    "id": 1356772,
    "n": "Tenis Urban 241",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.7,
    "rev": 157,
    "sold": 267,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1356772/1748461611GIF%20OKVAN.gif",
    "v": [
      [
        974567,
        "NEGRO",
        "40"
      ],
      [
        974568,
        "ROSADO",
        "40"
      ],
      [
        974569,
        "AZUL OSCURO",
        "40"
      ],
      [
        974566,
        "AZUL OSCURO",
        "39"
      ],
      [
        974555,
        "NEGRO",
        "36"
      ],
      [
        974556,
        "ROSADO",
        "36"
      ],
      [
        974557,
        "AZUL OSCURO",
        "36"
      ],
      [
        974558,
        "NEGRO",
        "37"
      ],
      [
        974559,
        "ROSADO",
        "37"
      ],
      [
        974560,
        "AZUL OSCURO",
        "37"
      ],
      [
        974561,
        "NEGRO",
        "38"
      ],
      [
        974562,
        "ROSADO",
        "38"
      ],
      [
        974563,
        "AZUL OSCURO",
        "38"
      ],
      [
        974564,
        "NEGRO",
        "39"
      ],
      [
        974565,
        "ROSADO",
        "39"
      ]
    ]
  },
  {
    "id": 2266027,
    "n": "Tenis Classic 242 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 5,
    "rev": 52,
    "sold": 362,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2266027/4038d760-2aac-4126-b9e2-9a95347b686f.jpeg",
    "v": [
      [
        2368391,
        "Miel",
        "36"
      ],
      [
        2368392,
        "Miel",
        "37"
      ],
      [
        2368393,
        "Miel",
        "38"
      ],
      [
        2368394,
        "Miel",
        "39"
      ],
      [
        2368395,
        "Miel",
        "40"
      ],
      [
        2368396,
        "Negro",
        "35"
      ],
      [
        2368397,
        "Negro",
        "36"
      ],
      [
        2368399,
        "Negro",
        "38"
      ],
      [
        2368390,
        "Miel",
        "35"
      ],
      [
        2368398,
        "Negro",
        "37"
      ],
      [
        2368400,
        "Negro",
        "39"
      ],
      [
        2368401,
        "Negro",
        "40"
      ],
      [
        2368402,
        "Beige",
        "35"
      ],
      [
        2368403,
        "Beige",
        "36"
      ],
      [
        2368404,
        "Beige",
        "37"
      ],
      [
        2368405,
        "Beige",
        "38"
      ],
      [
        2368406,
        "Beige",
        "39"
      ],
      [
        2368407,
        "Beige",
        "40"
      ]
    ]
  },
  {
    "id": 1844534,
    "n": "Tenis Street 243",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 119,
    "sold": 129,
    "stock": 5,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1844534/aee5704d-669f-4754-9961-e2b90a3a087c.png",
    "v": [
      [
        1549872,
        "Negro",
        "43"
      ],
      [
        1549869,
        "Negro",
        "40"
      ],
      [
        1549868,
        "Negro",
        "39"
      ],
      [
        1549874,
        "Naranja",
        "36"
      ],
      [
        1549877,
        "Naranja",
        "39"
      ],
      [
        1549864,
        "Negro",
        "35"
      ],
      [
        1549879,
        "Naranja",
        "41"
      ],
      [
        1549880,
        "Naranja",
        "42"
      ],
      [
        1549858,
        "Azul",
        "38"
      ],
      [
        1549878,
        "Naranja",
        "40"
      ],
      [
        1549876,
        "Naranja",
        "38"
      ],
      [
        1549873,
        "Naranja",
        "35"
      ],
      [
        1549865,
        "Negro",
        "36"
      ],
      [
        1549867,
        "Negro",
        "38"
      ],
      [
        1549859,
        "Azul",
        "39"
      ],
      [
        1549875,
        "Naranja",
        "37"
      ],
      [
        1549857,
        "Azul",
        "37"
      ],
      [
        1549862,
        "Azul",
        "42"
      ],
      [
        1549870,
        "Negro",
        "41"
      ],
      [
        1549881,
        "Naranja",
        "43"
      ],
      [
        1549856,
        "Azul",
        "36"
      ],
      [
        1549855,
        "Azul",
        "35"
      ],
      [
        1549863,
        "Azul",
        "43"
      ],
      [
        1549860,
        "Azul",
        "40"
      ],
      [
        1549866,
        "Negro",
        "37"
      ],
      [
        1549861,
        "Azul",
        "41"
      ],
      [
        1549871,
        "Negro",
        "42"
      ]
    ]
  },
  {
    "id": 1921880,
    "n": "Tenis Sport 244",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 4.7,
    "rev": 65,
    "sold": 295,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1921880/175752595512.jpg",
    "v": [
      [
        1719769,
        "NEGRO",
        "38"
      ],
      [
        1719766,
        "NEGRO",
        "35"
      ],
      [
        1719767,
        "NEGRO",
        "36"
      ],
      [
        1719768,
        "NEGRO",
        "37"
      ],
      [
        1719770,
        "NEGRO",
        "39"
      ],
      [
        1719771,
        "NEGRO",
        "40"
      ],
      [
        1719772,
        "NEGRO",
        "41"
      ],
      [
        1719773,
        "NEGRO",
        "42"
      ],
      [
        1719774,
        "NEGRO",
        "43"
      ],
      [
        1719775,
        "NEGRO",
        "44"
      ],
      [
        1719776,
        "BLANCO",
        "35"
      ],
      [
        1719777,
        "BLANCO",
        "36"
      ],
      [
        1719778,
        "BLANCO",
        "37"
      ],
      [
        1719779,
        "BLANCO",
        "38"
      ],
      [
        1719780,
        "BLANCO",
        "39"
      ],
      [
        1719781,
        "BLANCO",
        "40"
      ],
      [
        1719782,
        "BLANCO",
        "41"
      ],
      [
        1719783,
        "BLANCO",
        "42"
      ],
      [
        1719784,
        "BLANCO",
        "43"
      ],
      [
        1719785,
        "BLANCO",
        "44"
      ]
    ]
  },
  {
    "id": 2182333,
    "n": "Tenis Retro 245 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 58,
    "sold": 308,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2182333/1781987805WhatsApp%20Image%202026-06-20%20at%201.19.59%20PM%20(1).jpeg",
    "v": [
      [
        2220004,
        "Blanco Gris",
        "39"
      ],
      [
        2220005,
        "Blanco Gris",
        "40"
      ],
      [
        2219995,
        "Negro",
        "36"
      ],
      [
        2219996,
        "Negro",
        "37"
      ],
      [
        2219997,
        "Negro",
        "38"
      ],
      [
        2219998,
        "Negro",
        "39"
      ],
      [
        2219994,
        "Negro",
        "35"
      ],
      [
        2220000,
        "Blanco Gris",
        "35"
      ],
      [
        2220001,
        "Blanco Gris",
        "36"
      ],
      [
        2220008,
        "Gris",
        "37"
      ],
      [
        2220009,
        "Gris",
        "38"
      ],
      [
        2220012,
        "Beige",
        "35"
      ],
      [
        2220013,
        "Beige",
        "36"
      ],
      [
        2220016,
        "Beige",
        "39"
      ],
      [
        2220017,
        "Beige",
        "40"
      ],
      [
        2219999,
        "Negro",
        "40"
      ],
      [
        2220002,
        "Blanco Gris",
        "37"
      ],
      [
        2220003,
        "Blanco Gris",
        "38"
      ],
      [
        2220006,
        "Gris",
        "35"
      ],
      [
        2220007,
        "Gris",
        "36"
      ],
      [
        2220014,
        "Beige",
        "37"
      ],
      [
        2220015,
        "Beige",
        "38"
      ],
      [
        2220010,
        "Gris",
        "39"
      ],
      [
        2220011,
        "Gris",
        "40"
      ]
    ]
  },
  {
    "id": 2179924,
    "n": "Tenis Flex 246 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 169,
    "sold": 279,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2179924/1781809103WhatsApp%20Image%202026-06-11%20at%202.09.13%20PM.jpeg",
    "v": [
      [
        2214307,
        "Rojo",
        "36"
      ],
      [
        2214298,
        "Blanco",
        "39"
      ],
      [
        2214304,
        "Fucsia",
        "39"
      ],
      [
        2214305,
        "Fucsia",
        "40"
      ],
      [
        2214306,
        "Rojo",
        "35"
      ],
      [
        2214308,
        "Rojo",
        "37"
      ],
      [
        2214309,
        "Rojo",
        "38"
      ],
      [
        2214294,
        "Blanco",
        "35"
      ],
      [
        2214295,
        "Blanco",
        "36"
      ],
      [
        2214296,
        "Blanco",
        "37"
      ],
      [
        2214297,
        "Blanco",
        "38"
      ],
      [
        2214299,
        "Blanco",
        "40"
      ],
      [
        2214300,
        "Fucsia",
        "35"
      ],
      [
        2214301,
        "Fucsia",
        "36"
      ],
      [
        2214302,
        "Fucsia",
        "37"
      ],
      [
        2214303,
        "Fucsia",
        "38"
      ],
      [
        2214310,
        "Rojo",
        "39"
      ],
      [
        2214311,
        "Rojo",
        "40"
      ],
      [
        2214313,
        "Nego",
        "36"
      ],
      [
        2214314,
        "Nego",
        "37"
      ],
      [
        2214316,
        "Nego",
        "39"
      ],
      [
        2214317,
        "Nego",
        "40"
      ],
      [
        2214315,
        "Nego",
        "38"
      ],
      [
        2214312,
        "Nego",
        "35"
      ]
    ]
  },
  {
    "id": 2215212,
    "n": "Tenis Runner 247",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 177,
    "sold": 207,
    "stock": 3,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2215212/b4854636-2077-41dc-86e6-17391cd424b8.png",
    "v": [
      [
        2286737,
        "GRIS",
        "44"
      ],
      [
        2286714,
        "BLANCO",
        "39"
      ],
      [
        2286715,
        "NEGRO",
        "39"
      ],
      [
        2286716,
        "CAFE",
        "39"
      ],
      [
        2286717,
        "GRIS",
        "39"
      ],
      [
        2286718,
        "BLANCO",
        "40"
      ],
      [
        2286719,
        "NEGRO",
        "40"
      ],
      [
        2286720,
        "CAFE",
        "40"
      ],
      [
        2286721,
        "GRIS",
        "40"
      ],
      [
        2286722,
        "BLANCO",
        "41"
      ],
      [
        2286723,
        "NEGRO",
        "41"
      ],
      [
        2286724,
        "CAFE",
        "41"
      ],
      [
        2286725,
        "GRIS",
        "41"
      ],
      [
        2286726,
        "BLANCO",
        "42"
      ],
      [
        2286727,
        "NEGRO",
        "42"
      ],
      [
        2286728,
        "CAFE",
        "42"
      ],
      [
        2286729,
        "GRIS",
        "42"
      ],
      [
        2286730,
        "BLANCO",
        "43"
      ],
      [
        2286731,
        "NEGRO",
        "43"
      ],
      [
        2286732,
        "CAFE",
        "43"
      ],
      [
        2286733,
        "GRIS",
        "43"
      ],
      [
        2286734,
        "BLANCO",
        "44"
      ],
      [
        2286735,
        "NEGRO",
        "44"
      ],
      [
        2286736,
        "CAFE",
        "44"
      ]
    ]
  },
  {
    "id": 1083749,
    "n": "Tenis Casual 248 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 194,
    "sold": 264,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1083749/1748462253GIF%20ADY.gif",
    "v": [
      [
        817081,
        "VIOLETA",
        "36"
      ],
      [
        817082,
        "VIOLETA",
        "37"
      ],
      [
        817083,
        "VIOLETA",
        "38"
      ],
      [
        817090,
        "ROSA",
        "40"
      ],
      [
        817089,
        "ROSA",
        "39"
      ],
      [
        817088,
        "ROSA",
        "38"
      ],
      [
        817087,
        "ROSA",
        "37"
      ],
      [
        817086,
        "ROSA",
        "36"
      ],
      [
        817085,
        "VIOLETA",
        "40"
      ],
      [
        817084,
        "VIOLETA",
        "39"
      ]
    ]
  },
  {
    "id": 2263630,
    "n": "Tenis Prime 249",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 175,
    "sold": 345,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2263630/fcc4bc68-885f-4804-b0c1-2a316c8aa514.png",
    "v": [
      [
        2363982,
        "Blanco Negro Marron",
        "39"
      ],
      [
        2363983,
        "Blanco Negro Marron",
        "40"
      ],
      [
        2363972,
        "Blanco Gris",
        "35"
      ],
      [
        2363973,
        "Blanco Gris",
        "36"
      ],
      [
        2363974,
        "Blanco Gris",
        "37"
      ],
      [
        2363975,
        "Blanco Gris",
        "38"
      ],
      [
        2363976,
        "Blanco Gris",
        "39"
      ],
      [
        2363977,
        "Blanco Gris",
        "40"
      ],
      [
        2363978,
        "Blanco Negro Marron",
        "35"
      ],
      [
        2363979,
        "Blanco Negro Marron",
        "36"
      ],
      [
        2363980,
        "Blanco Negro Marron",
        "37"
      ],
      [
        2363981,
        "Blanco Negro Marron",
        "38"
      ]
    ]
  },
  {
    "id": 2042848,
    "n": "Tenis Active 250",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 73,
    "sold": 223,
    "stock": 7,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2042848/176895507343.jpg",
    "v": [
      [
        1915561,
        "WHITE",
        "35"
      ],
      [
        1915562,
        "WHITE",
        "36"
      ],
      [
        1915563,
        "WHITE",
        "37"
      ],
      [
        1915564,
        "WHITE",
        "38"
      ],
      [
        1915567,
        "WHITE",
        "41"
      ],
      [
        1915568,
        "WHITE",
        "42"
      ],
      [
        1915569,
        "WHITE",
        "43"
      ],
      [
        1915570,
        "WHITE",
        "44"
      ],
      [
        1915571,
        "BLACK",
        "35"
      ],
      [
        1915572,
        "BLACK",
        "36"
      ],
      [
        1915573,
        "BLACK",
        "37"
      ],
      [
        1915574,
        "BLACK",
        "38"
      ],
      [
        1915575,
        "BLACK",
        "39"
      ],
      [
        1915576,
        "BLACK",
        "40"
      ],
      [
        1915577,
        "BLACK",
        "41"
      ],
      [
        1915578,
        "BLACK",
        "42"
      ],
      [
        1915579,
        "BLACK",
        "43"
      ],
      [
        1915580,
        "BLACK",
        "44"
      ]
    ]
  },
  {
    "id": 1831958,
    "n": "Tenis Urban 251 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 4.9,
    "rev": 143,
    "sold": 133,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1831958/1748459692GIF%20NB%20530.gif",
    "v": [
      [
        1521907,
        "BEIGE",
        "38"
      ],
      [
        1521905,
        "BLANCO",
        "38"
      ],
      [
        1521904,
        "GRIS",
        "38"
      ],
      [
        1521909,
        "BLANCO",
        "39"
      ],
      [
        1521902,
        "NEGRO",
        "37"
      ],
      [
        1521901,
        "BLANCO",
        "37"
      ],
      [
        1521900,
        "GRIS",
        "37"
      ],
      [
        1521896,
        "GRIS",
        "36"
      ],
      [
        1521906,
        "NEGRO",
        "38"
      ]
    ]
  },
  {
    "id": 1732804,
    "n": "Tenis Classic 252",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 4.7,
    "rev": 169,
    "sold": 259,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1732804/1748465196GIF%20LION%20FASHION.gif",
    "v": [
      [
        1327725,
        "GRIS",
        "38"
      ],
      [
        1327727,
        "GRIS",
        "39"
      ],
      [
        1327728,
        "ROSADO",
        "40"
      ],
      [
        1327729,
        "GRIS",
        "40"
      ],
      [
        1327726,
        "ROSADO",
        "39"
      ],
      [
        1327724,
        "ROSADO",
        "38"
      ],
      [
        1327723,
        "GRIS",
        "37"
      ],
      [
        1327722,
        "ROSADO",
        "37"
      ],
      [
        1327721,
        "GRIS",
        "36"
      ],
      [
        1327720,
        "ROSADO",
        "36"
      ]
    ]
  },
  {
    "id": 2166010,
    "n": "Tenis Street 253",
    "g": "u",
    "p": 109900,
    "o": 154900,
    "rate": 4.9,
    "rev": 115,
    "sold": 305,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2166010/1780442275213733.jpg",
    "v": [
      [
        2185086,
        "Blanco",
        "38"
      ],
      [
        2185100,
        "Negro",
        "43"
      ],
      [
        2185083,
        "Blanco",
        "35"
      ],
      [
        2185085,
        "Blanco",
        "37"
      ],
      [
        2185096,
        "Negro",
        "39"
      ],
      [
        2185097,
        "Negro",
        "40"
      ],
      [
        2185093,
        "Negro",
        "36"
      ],
      [
        2185094,
        "Negro",
        "37"
      ],
      [
        2185095,
        "Negro",
        "38"
      ],
      [
        2185084,
        "Blanco",
        "36"
      ],
      [
        2185098,
        "Negro",
        "41"
      ],
      [
        2185099,
        "Negro",
        "42"
      ],
      [
        2185092,
        "Negro",
        "35"
      ],
      [
        2185087,
        "Blanco",
        "39"
      ],
      [
        2185088,
        "Blanco",
        "40"
      ],
      [
        2185089,
        "Blanco",
        "41"
      ],
      [
        2185090,
        "Blanco",
        "42"
      ],
      [
        2185091,
        "Blanco",
        "43"
      ]
    ]
  },
  {
    "id": 982541,
    "n": "Tenis Sport 254 Hombre",
    "g": "h",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 146,
    "sold": 376,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/982541/1748461821GIF%20AMG.gif",
    "v": [
      [
        748173,
        "NEGRO",
        "41"
      ],
      [
        748181,
        "CAFE",
        "44"
      ],
      [
        748175,
        "NEGRO",
        "43"
      ],
      [
        748174,
        "NEGRO",
        "42"
      ],
      [
        748180,
        "CAFE",
        "43"
      ],
      [
        748179,
        "CAFE",
        "42"
      ],
      [
        748178,
        "CAFE",
        "41"
      ],
      [
        748177,
        "CAFE",
        "40"
      ],
      [
        748176,
        "NEGRO",
        "44"
      ],
      [
        748172,
        "NEGRO",
        "40"
      ]
    ]
  },
  {
    "id": 2099522,
    "n": "Tenis Retro 255",
    "g": "u",
    "p": 154900,
    "o": 219900,
    "rate": 4.9,
    "rev": 47,
    "sold": 117,
    "stock": 5,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2099522/1772646458REF%20NIKE%20AIR%20FORCE%20ONE%20-%20RXR%20COMPANY%20(3).jpg",
    "v": [
      [
        2032026,
        "WHITE",
        "42"
      ],
      [
        2032027,
        "WHITE",
        "43"
      ],
      [
        2032009,
        "BLACK",
        "35"
      ],
      [
        2032010,
        "BLACK",
        "36"
      ],
      [
        2032011,
        "BLACK",
        "37"
      ],
      [
        2032012,
        "BLACK",
        "38"
      ],
      [
        2032013,
        "BLACK",
        "39"
      ],
      [
        2032014,
        "BLACK",
        "40"
      ],
      [
        2032015,
        "BLACK",
        "41"
      ],
      [
        2032016,
        "BLACK",
        "42"
      ],
      [
        2032017,
        "BLACK",
        "43"
      ],
      [
        2032018,
        "BLACK",
        "44"
      ],
      [
        2032019,
        "WHITE",
        "35"
      ],
      [
        2032020,
        "WHITE",
        "36"
      ],
      [
        2032021,
        "WHITE",
        "37"
      ],
      [
        2032022,
        "WHITE",
        "38"
      ],
      [
        2032023,
        "WHITE",
        "39"
      ],
      [
        2032024,
        "WHITE",
        "40"
      ],
      [
        2032025,
        "WHITE",
        "41"
      ],
      [
        2032028,
        "WHITE",
        "44"
      ]
    ]
  },
  {
    "id": 1053103,
    "n": "Tenis Flex 256 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 5,
    "rev": 148,
    "sold": 218,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1053103/1748462851GIF%20NB.gif",
    "v": [
      [
        795613,
        "BLANCO",
        "36"
      ],
      [
        795615,
        "BLANCO",
        "38"
      ],
      [
        795616,
        "BLANCO",
        "39"
      ],
      [
        795617,
        "BLANCO",
        "40"
      ],
      [
        795622,
        "NEGRO/BLANCO",
        "40"
      ],
      [
        795621,
        "NEGRO/BLANCO",
        "39"
      ],
      [
        795620,
        "NEGRO/BLANCO",
        "38"
      ]
    ]
  },
  {
    "id": 1885174,
    "n": "Tenis Runner 257 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.9,
    "rev": 79,
    "sold": 309,
    "stock": 7,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885174/17534745181726081883WhatsApp%20Image%202024-09-11%20at%202.59.30%20PM.jpeg",
    "v": [
      [
        1637859,
        "BLANCO",
        "39"
      ],
      [
        1637860,
        "BLANCO",
        "40"
      ],
      [
        1637855,
        "BLANCO",
        "35"
      ],
      [
        1637856,
        "BLANCO",
        "36"
      ],
      [
        1637857,
        "BLANCO",
        "37"
      ],
      [
        1637858,
        "BLANCO",
        "38"
      ]
    ]
  },
  {
    "id": 2222749,
    "n": "Tenis Casual 258 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 154,
    "sold": 264,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2222749/2bdb072d-bd20-465d-a813-d7dd48d3ea49.png",
    "v": [
      [
        2299726,
        "Blanco Azul",
        "40"
      ],
      [
        2299721,
        "Blanco Azul",
        "35"
      ],
      [
        2299722,
        "Blanco Azul",
        "36"
      ],
      [
        2299723,
        "Blanco Azul",
        "37"
      ],
      [
        2299724,
        "Blanco Azul",
        "38"
      ],
      [
        2299725,
        "Blanco Azul",
        "39"
      ]
    ]
  },
  {
    "id": 2190546,
    "n": "Tenis Prime 259",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.9,
    "rev": 171,
    "sold": 361,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2190546/1782963075imagen_2026-07-01_223029655.png",
    "v": [
      [
        2237566,
        "NEGRO",
        "37"
      ],
      [
        2237567,
        "NEGRO",
        "38"
      ],
      [
        2237568,
        "NEGRO",
        "39"
      ],
      [
        2237569,
        "NEGRO",
        "40"
      ],
      [
        2237570,
        "NEGRO",
        "41"
      ],
      [
        2237571,
        "NEGRO",
        "42"
      ],
      [
        2237572,
        "NEGRO",
        "43"
      ],
      [
        2237550,
        "BLANCO",
        "37"
      ],
      [
        2237551,
        "BLANCO",
        "38"
      ],
      [
        2237552,
        "BLANCO",
        "39"
      ],
      [
        2237553,
        "BLANCO",
        "40"
      ],
      [
        2237554,
        "BLANCO",
        "41"
      ],
      [
        2237555,
        "BLANCO",
        "42"
      ],
      [
        2237556,
        "BLANCO",
        "43"
      ],
      [
        2237557,
        "AZUL OSCURO",
        "36"
      ],
      [
        2237558,
        "AZUL OSCURO",
        "37"
      ],
      [
        2237559,
        "AZUL OSCURO",
        "38"
      ],
      [
        2237560,
        "AZUL OSCURO",
        "39"
      ],
      [
        2237561,
        "AZUL OSCURO",
        "40"
      ],
      [
        2237562,
        "AZUL OSCURO",
        "41"
      ],
      [
        2237563,
        "AZUL OSCURO",
        "42"
      ],
      [
        2237549,
        "BLANCO",
        "36"
      ],
      [
        2237564,
        "AZUL OSCURO",
        "43"
      ],
      [
        2237565,
        "NEGRO",
        "36"
      ]
    ]
  },
  {
    "id": 1675121,
    "n": "Tenis Active 260",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 4.8,
    "rev": 86,
    "sold": 376,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1675121/1748465421GIF%20NEW%20YORK.gif",
    "v": [
      [
        1228055,
        "GRIS",
        "39"
      ],
      [
        1228054,
        "MARFIL",
        "39"
      ],
      [
        1228056,
        "MARFIL",
        "40"
      ],
      [
        1228057,
        "GRIS",
        "40"
      ]
    ]
  },
  {
    "id": 916169,
    "n": "Tenis Urban 261 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 194,
    "sold": 304,
    "stock": 8,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/916169/1718423200GIF%20CORTO.gif",
    "v": [
      [
        644666,
        "BLANCO",
        "36"
      ],
      [
        644665,
        "BLANCO",
        "36"
      ],
      [
        644658,
        "NEGRO",
        "37"
      ],
      [
        644661,
        "NEGRO",
        "39"
      ],
      [
        644667,
        "BLANCO",
        "37"
      ],
      [
        644668,
        "BLANCO",
        "37"
      ],
      [
        644685,
        "AZUL CLARO",
        "36"
      ],
      [
        644686,
        "AZUL CLARO",
        "36"
      ],
      [
        644687,
        "AZUL CLARO",
        "37"
      ],
      [
        644689,
        "AZUL CLARO",
        "38"
      ],
      [
        644690,
        "AZUL CLARO",
        "38"
      ],
      [
        644691,
        "AZUL CLARO",
        "39"
      ],
      [
        644692,
        "AZUL CLARO",
        "39"
      ],
      [
        644679,
        "ROJO",
        "38"
      ],
      [
        644675,
        "ROJO",
        "36"
      ],
      [
        644673,
        "BLANCO",
        "40"
      ],
      [
        644672,
        "BLANCO",
        "39"
      ],
      [
        644671,
        "BLANCO",
        "39"
      ],
      [
        644670,
        "BLANCO",
        "38"
      ],
      [
        644669,
        "BLANCO",
        "38"
      ],
      [
        644660,
        "NEGRO",
        "38"
      ],
      [
        644659,
        "NEGRO",
        "38"
      ],
      [
        644682,
        "ROJO",
        "39"
      ],
      [
        644688,
        "AZUL CLARO",
        "37"
      ],
      [
        644656,
        "NEGRO",
        "36"
      ],
      [
        644655,
        "NEGRO",
        "36"
      ],
      [
        644681,
        "ROJO",
        "39"
      ],
      [
        644680,
        "ROJO",
        "38"
      ]
    ]
  },
  {
    "id": 587297,
    "n": "Tenis Classic 262 Dama",
    "g": "m",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 182,
    "sold": 212,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/587297/1715912467NX-6%20GIF.gif",
    "v": [
      [
        373517,
        "BEIGE",
        "36"
      ],
      [
        373518,
        "BEIGE",
        "37"
      ],
      [
        373523,
        "AZUL",
        "36"
      ],
      [
        373516,
        "BEIGE",
        "35"
      ],
      [
        373522,
        "AZUL",
        "35"
      ],
      [
        373527,
        "AZUL",
        "34"
      ],
      [
        373521,
        "BEIGE",
        "34"
      ],
      [
        373524,
        "AZUL",
        "37"
      ]
    ]
  },
  {
    "id": 2077767,
    "n": "Tenis Street 263",
    "g": "u",
    "p": 109900,
    "o": 154900,
    "rate": 5,
    "rev": 72,
    "sold": 122,
    "stock": 6,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2077767/1779227846O1CN011namLg1FyhHXWtlBO_!!6000000000556-0-1688ciroom%20-%20copia.jpg",
    "v": [
      [
        1979744,
        "Negro",
        "37"
      ],
      [
        1979769,
        "Morado",
        "38"
      ],
      [
        1979753,
        "Verde oliva",
        "40"
      ],
      [
        1979765,
        "lila",
        "40"
      ],
      [
        1979759,
        "Gris",
        "40"
      ],
      [
        1979767,
        "Morado",
        "36"
      ],
      [
        1979770,
        "Morado",
        "39"
      ],
      [
        1979743,
        "Negro",
        "36"
      ],
      [
        1979771,
        "Morado",
        "40"
      ],
      [
        1979757,
        "Gris",
        "38"
      ],
      [
        1979747,
        "Negro",
        "40"
      ],
      [
        1979749,
        "Verde oliva",
        "36"
      ],
      [
        1979745,
        "Negro",
        "38"
      ],
      [
        1979768,
        "Morado",
        "37"
      ],
      [
        1979754,
        "Gris",
        "35"
      ],
      [
        1979755,
        "Gris",
        "36"
      ]
    ]
  },
  {
    "id": 2282689,
    "n": "Tenis Sport 264 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 154,
    "sold": 364,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2282689/cd13ba4a-748d-477d-962a-c3730c032423.png",
    "v": [
      [
        2390587,
        "BLANCO",
        "37"
      ],
      [
        2390588,
        "BLANCO",
        "38"
      ],
      [
        2390589,
        "BLANCO",
        "39"
      ],
      [
        2390590,
        "BLANCO",
        "40"
      ],
      [
        2390581,
        "NEGRO",
        "37"
      ],
      [
        2390582,
        "NEGRO",
        "38"
      ],
      [
        2390583,
        "NEGRO",
        "39"
      ],
      [
        2390584,
        "NEGRO",
        "40"
      ],
      [
        2390585,
        "BLANCO",
        "35"
      ],
      [
        2390586,
        "BLANCO",
        "36"
      ],
      [
        2390573,
        "BLANCO/NEGRO",
        "35"
      ],
      [
        2390574,
        "BLANCO/NEGRO",
        "36"
      ],
      [
        2390575,
        "BLANCO/NEGRO",
        "37"
      ],
      [
        2390576,
        "BLANCO/NEGRO",
        "38"
      ],
      [
        2390577,
        "BLANCO/NEGRO",
        "39"
      ],
      [
        2390578,
        "BLANCO/NEGRO",
        "40"
      ],
      [
        2390579,
        "NEGRO",
        "35"
      ],
      [
        2390580,
        "NEGRO",
        "36"
      ]
    ]
  },
  {
    "id": 595897,
    "n": "Tenis Retro 265",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.8,
    "rev": 142,
    "sold": 312,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/595897/1705202507DESERT%20SAGE.webp",
    "v": [
      [
        381769,
        "DESERT SAGE",
        "40"
      ],
      [
        381776,
        "MARSH",
        "40"
      ],
      [
        381775,
        "MARSH",
        "39"
      ],
      [
        381761,
        "LINEN",
        "38"
      ],
      [
        381763,
        "LINEN",
        "40"
      ],
      [
        381765,
        "LINEN",
        "42"
      ],
      [
        381777,
        "MARSH",
        "41"
      ],
      [
        381764,
        "LINEN",
        "41"
      ],
      [
        381762,
        "LINEN",
        "39"
      ],
      [
        381774,
        "MARSH",
        "38"
      ]
    ]
  },
  {
    "id": 742983,
    "n": "Tenis Flex 266",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 5,
    "rev": 168,
    "sold": 178,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/742983/1715912586Chuck-Taylor-All-Star%20GIF.gif",
    "v": [
      [
        511744,
        "NEGRO",
        "38"
      ],
      [
        511743,
        "NEGRO",
        "37"
      ],
      [
        511767,
        "BLANCO",
        "41"
      ],
      [
        511751,
        "BLANCO",
        "35"
      ],
      [
        511733,
        "NEGRO",
        "37"
      ],
      [
        511746,
        "NEGRO",
        "40"
      ],
      [
        511742,
        "NEGRO",
        "36"
      ],
      [
        511762,
        "BLANCO",
        "36"
      ],
      [
        511763,
        "BLANCO",
        "37"
      ],
      [
        511732,
        "NEGRO",
        "36"
      ],
      [
        511755,
        "BLANCO",
        "39"
      ],
      [
        511731,
        "NEGRO",
        "35"
      ],
      [
        511734,
        "NEGRO",
        "38"
      ],
      [
        511766,
        "BLANCO",
        "40"
      ],
      [
        511741,
        "NEGRO",
        "35"
      ],
      [
        511761,
        "BLANCO",
        "35"
      ],
      [
        511747,
        "NEGRO",
        "41"
      ],
      [
        511768,
        "BLANCO",
        "42"
      ],
      [
        511749,
        "NEGRO",
        "43"
      ],
      [
        511769,
        "BLANCO",
        "43"
      ],
      [
        511764,
        "BLANCO",
        "38"
      ],
      [
        511765,
        "BLANCO",
        "39"
      ]
    ]
  },
  {
    "id": 1901185,
    "n": "Tenis Runner 267",
    "g": "u",
    "p": 109900,
    "o": 132000,
    "rate": 4.8,
    "rev": 70,
    "sold": 340,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1901185/17552910961718908011WhatsApp%20Image%202024-06-19%20at%204.54.45%20PM%20(2).jpeg",
    "v": [
      [
        1675958,
        "Blanco negro",
        "35"
      ],
      [
        1675896,
        "Negro lila",
        "36"
      ],
      [
        1675955,
        "Azul",
        "41"
      ],
      [
        1675953,
        "Azul",
        "39"
      ],
      [
        1675934,
        "Negro rosa",
        "38"
      ],
      [
        1675919,
        "Blanco naranja",
        "41"
      ],
      [
        1675971,
        "Gris Blanco",
        "39"
      ],
      [
        1675878,
        "Gris lila",
        "36"
      ],
      [
        1675959,
        "Blanco negro",
        "36"
      ],
      [
        1675908,
        "Gris naranja",
        "39"
      ],
      [
        1675885,
        "Gris lila",
        "43"
      ],
      [
        1675966,
        "Blanco negro",
        "43"
      ],
      [
        1675890,
        "Rosado",
        "39"
      ],
      [
        1675952,
        "Azul",
        "38"
      ],
      [
        1675921,
        "Blanco naranja",
        "43"
      ],
      [
        1675944,
        "Negro Blanco",
        "39"
      ],
      [
        1675916,
        "Blanco naranja",
        "38"
      ],
      [
        1675879,
        "Gris lila",
        "37"
      ],
      [
        1675891,
        "Rosado",
        "40"
      ],
      [
        1675877,
        "Gris lila",
        "35"
      ],
      [
        1675889,
        "Rosado",
        "38"
      ],
      [
        1675887,
        "Rosado",
        "36"
      ],
      [
        1675886,
        "Rosado",
        "35"
      ],
      [
        1675961,
        "Blanco negro",
        "38"
      ],
      [
        2108165,
        "NEGRO FUCSIA",
        "36"
      ],
      [
        2108168,
        "NEGRO FUCSIA",
        "39"
      ],
      [
        1675906,
        "Gris naranja",
        "37"
      ],
      [
        1675904,
        "Gris naranja",
        "35"
      ],
      [
        1675924,
        "Blanco lila",
        "37"
      ],
      [
        1675945,
        "Negro Blanco",
        "40"
      ],
      [
        1675898,
        "Negro lila",
        "38"
      ],
      [
        1675888,
        "Rosado",
        "37"
      ],
      [
        1675880,
        "Gris lila",
        "38"
      ],
      [
        1675915,
        "Blanco naranja",
        "37"
      ],
      [
        1675918,
        "Blanco naranja",
        "40"
      ],
      [
        1675923,
        "Blanco lila",
        "36"
      ],
      [
        1675909,
        "Gris naranja",
        "40"
      ],
      [
        1675954,
        "Azul",
        "40"
      ],
      [
        1675951,
        "Azul",
        "37"
      ],
      [
        1675964,
        "Blanco negro",
        "41"
      ],
      [
        1675956,
        "Azul",
        "42"
      ],
      [
        1675922,
        "Blanco lila",
        "35"
      ],
      [
        1675917,
        "Blanco naranja",
        "39"
      ],
      [
        1675974,
        "Gris Blanco",
        "42"
      ],
      [
        1675973,
        "Gris Blanco",
        "41"
      ],
      [
        1675970,
        "Gris Blanco",
        "38"
      ],
      [
        1675962,
        "Blanco negro",
        "39"
      ],
      [
        1675941,
        "Negro Blanco",
        "36"
      ],
      [
        1675914,
        "Blanco naranja",
        "36"
      ],
      [
        1675931,
        "Negro rosa",
        "35"
      ],
      [
        1675926,
        "Blanco lila",
        "39"
      ],
      [
        1675925,
        "Blanco lila",
        "38"
      ],
      [
        2108164,
        "NEGRO FUCSIA",
        "35"
      ],
      [
        2108167,
        "NEGRO FUCSIA",
        "38"
      ],
      [
        1675975,
        "Gris Blanco",
        "43"
      ],
      [
        1675882,
        "Gris lila",
        "40"
      ],
      [
        1675881,
        "Gris lila",
        "39"
      ],
      [
        1675948,
        "Negro Blanco",
        "43"
      ],
      [
        1675947,
        "Negro Blanco",
        "42"
      ],
      [
        1675943,
        "Negro Blanco",
        "38"
      ],
      [
        1675942,
        "Negro Blanco",
        "37"
      ],
      [
        1675933,
        "Negro rosa",
        "37"
      ],
      [
        1675932,
        "Negro rosa",
        "36"
      ],
      [
        1675913,
        "Blanco naranja",
        "35"
      ],
      [
        1675965,
        "Blanco negro",
        "42"
      ],
      [
        1675935,
        "Negro rosa",
        "39"
      ],
      [
        1675946,
        "Negro Blanco",
        "41"
      ],
      [
        2108166,
        "NEGRO FUCSIA",
        "37"
      ],
      [
        1675900,
        "Negro lila",
        "40"
      ],
      [
        1675907,
        "Gris naranja",
        "38"
      ],
      [
        1675905,
        "Gris naranja",
        "36"
      ],
      [
        1675895,
        "Negro lila",
        "35"
      ]
    ]
  },
  {
    "id": 2170813,
    "n": "Tenis Casual 268",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 58,
    "sold": 348,
    "stock": 4,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2170813/1780698757Cartelo%20Masculino-3.jpg",
    "v": [
      [
        2198530,
        "Beige",
        "40"
      ],
      [
        2198531,
        "Beige",
        "41"
      ],
      [
        2198532,
        "Beige",
        "42"
      ],
      [
        2198533,
        "Beige",
        "43"
      ],
      [
        2198513,
        "Blanco",
        "37"
      ],
      [
        2198514,
        "Blanco",
        "38"
      ],
      [
        2198515,
        "Blanco",
        "39"
      ],
      [
        2198516,
        "Blanco",
        "40"
      ],
      [
        2198517,
        "Blanco",
        "41"
      ],
      [
        2198518,
        "Blanco",
        "42"
      ],
      [
        2198519,
        "Blanco",
        "43"
      ],
      [
        2198521,
        "Negro",
        "38"
      ],
      [
        2198527,
        "Beige",
        "37"
      ],
      [
        2198528,
        "Beige",
        "38"
      ],
      [
        2198529,
        "Beige",
        "39"
      ],
      [
        2198520,
        "Negro",
        "37"
      ]
    ]
  },
  {
    "id": 2325729,
    "n": "Tenis Prime 269 Dama",
    "g": "m",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 174,
    "sold": 224,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2325729/4ac457cd-3ce0-44ae-8beb-277366078b5c.jpeg",
    "v": [
      [
        2508065,
        "NEGRO",
        "40"
      ],
      [
        2508039,
        "BEIGE NEGRO",
        "35"
      ],
      [
        2508044,
        "BEIGE NEGRO",
        "40"
      ],
      [
        2508052,
        "BLANCO",
        "34"
      ],
      [
        2508050,
        "ROJO",
        "39"
      ],
      [
        2508051,
        "ROJO",
        "40"
      ],
      [
        2508037,
        "BEIGE",
        "40"
      ],
      [
        2508064,
        "NEGRO",
        "39"
      ],
      [
        2508045,
        "ROJO",
        "34"
      ],
      [
        2508046,
        "ROJO",
        "35"
      ],
      [
        2508042,
        "BEIGE NEGRO",
        "38"
      ],
      [
        2508043,
        "BEIGE NEGRO",
        "39"
      ],
      [
        2508057,
        "BLANCO",
        "39"
      ],
      [
        2508038,
        "BEIGE NEGRO",
        "34"
      ],
      [
        2508058,
        "BLANCO",
        "40"
      ],
      [
        2508059,
        "NEGRO",
        "34"
      ],
      [
        2508061,
        "NEGRO",
        "36"
      ],
      [
        2508062,
        "NEGRO",
        "37"
      ],
      [
        2508031,
        "BEIGE",
        "34"
      ]
    ]
  },
  {
    "id": 2266249,
    "n": "Tenis Active 270 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 94,
    "sold": 244,
    "stock": 4,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2266249/918ac13f-46e3-4277-a698-46ede87a4403.png",
    "v": [
      [
        2369011,
        "BLANCO/CAFE",
        "35"
      ],
      [
        2369012,
        "BLANCO/CAFE",
        "36"
      ],
      [
        2417386,
        "BLANCO/CAFE",
        "34"
      ],
      [
        2417387,
        "BLANCO",
        "34"
      ],
      [
        2369014,
        "BLANCO/CAFE",
        "38"
      ],
      [
        2369015,
        "BLANCO/CAFE",
        "39"
      ],
      [
        2369016,
        "BLANCO/CAFE",
        "40"
      ],
      [
        2369005,
        "BLANCO",
        "35"
      ],
      [
        2369006,
        "BLANCO",
        "36"
      ],
      [
        2369007,
        "BLANCO",
        "37"
      ],
      [
        2369009,
        "BLANCO",
        "39"
      ],
      [
        2369010,
        "BLANCO",
        "40"
      ],
      [
        2369008,
        "BLANCO",
        "38"
      ],
      [
        2369013,
        "BLANCO/CAFE",
        "37"
      ]
    ]
  },
  {
    "id": 2223798,
    "n": "Zueco Urban 271",
    "g": "u",
    "p": 114900,
    "o": 164900,
    "rate": 4.9,
    "rev": 123,
    "sold": 293,
    "stock": 3,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2223798/a2a1e4e8-dcb1-432f-9c97-4af89ceb42a0.png",
    "v": [
      [
        2300880,
        "MIEL",
        "37"
      ],
      [
        2300881,
        "MIEL",
        "38"
      ],
      [
        2300882,
        "MIEL",
        "39"
      ],
      [
        2300883,
        "MIEL",
        "40"
      ],
      [
        2300884,
        "MIEL",
        "41"
      ],
      [
        2300885,
        "NEGRO",
        "37"
      ],
      [
        2300886,
        "NEGRO",
        "38"
      ],
      [
        2300887,
        "NEGRO",
        "39"
      ],
      [
        2300888,
        "NEGRO",
        "40"
      ],
      [
        2300889,
        "NEGRO",
        "41"
      ],
      [
        2300890,
        "KAKHI",
        "37"
      ],
      [
        2300891,
        "KAKHI",
        "38"
      ],
      [
        2300892,
        "KAKHI",
        "39"
      ],
      [
        2300893,
        "KAKHI",
        "40"
      ],
      [
        2300894,
        "KAKHI",
        "41"
      ]
    ]
  },
  {
    "id": 1573495,
    "n": "Tenis Classic 272",
    "g": "u",
    "p": 144900,
    "o": 204900,
    "rate": 5,
    "rev": 160,
    "sold": 410,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1573495/1748465561GIF%20TIGER%20FASHION.gif",
    "v": [
      [
        1104483,
        "GRIS",
        "36"
      ],
      [
        1104487,
        "GRIS",
        "38"
      ],
      [
        1104489,
        "GRIS",
        "39"
      ],
      [
        1104490,
        "MARFIL",
        "39"
      ],
      [
        1104491,
        "GRIS",
        "40"
      ],
      [
        1104492,
        "MARFIL",
        "40"
      ],
      [
        1104485,
        "GRIS",
        "37"
      ]
    ]
  },
  {
    "id": 965917,
    "n": "Tenis Street 273 Dama",
    "g": "m",
    "p": 124900,
    "o": 174900,
    "rate": 4.8,
    "rev": 82,
    "sold": 412,
    "stock": 4,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/965917/1720723098video%20adx%20gif%20ofi.gif",
    "v": [
      [
        743279,
        "BLANCO",
        "36"
      ],
      [
        743271,
        "NEGRO",
        "38"
      ],
      [
        743281,
        "BLANCO",
        "38"
      ],
      [
        743282,
        "BLANCO",
        "39"
      ],
      [
        743283,
        "BLANCO",
        "40"
      ]
    ]
  },
  {
    "id": 1908363,
    "n": "Tenis Sport 274",
    "g": "u",
    "p": 119900,
    "o": 169900,
    "rate": 5,
    "rev": 48,
    "sold": 378,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1908363/17562421931725053461Adidas%20unisex%20Ultraboos%20-%20(15).jpg",
    "v": [
      [
        1692329,
        "NEGRO LILA",
        "37"
      ],
      [
        1692293,
        "GRIS LILA",
        "37"
      ],
      [
        1692250,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1692305,
        "BLANCO NARANJA",
        "40"
      ],
      [
        1692285,
        "NEGRO FUCSIA",
        "38"
      ],
      [
        1692291,
        "GRIS LILA",
        "35"
      ],
      [
        1692300,
        "BLANCO NARANJA",
        "35"
      ],
      [
        1692345,
        "BLANCO LILA",
        "35"
      ],
      [
        1692304,
        "BLANCO NARANJA",
        "39"
      ],
      [
        1692306,
        "BLANCO NARANJA",
        "41"
      ],
      [
        1692262,
        "BLANCO NEGRO",
        "42"
      ],
      [
        1692263,
        "BLANCO NEGRO",
        "43"
      ],
      [
        1692349,
        "BLANCO LILA",
        "39"
      ],
      [
        1692350,
        "BLANCO LILA",
        "40"
      ],
      [
        1692336,
        "ROSADO",
        "35"
      ],
      [
        1692292,
        "GRIS LILA",
        "36"
      ],
      [
        1692309,
        "GRIS NARANJA",
        "35"
      ],
      [
        1692337,
        "ROSADO",
        "36"
      ],
      [
        1692346,
        "BLANCO LILA",
        "36"
      ],
      [
        1692347,
        "BLANCO LILA",
        "37"
      ],
      [
        1692339,
        "ROSADO",
        "38"
      ],
      [
        1692296,
        "GRIS LILA",
        "40"
      ],
      [
        1692294,
        "GRIS LILA",
        "38"
      ],
      [
        1692295,
        "GRIS LILA",
        "39"
      ],
      [
        1692311,
        "GRIS NARANJA",
        "37"
      ],
      [
        1692266,
        "AZUL BLANCO",
        "37"
      ],
      [
        1692348,
        "BLANCO LILA",
        "38"
      ],
      [
        1692301,
        "BLANCO NARANJA",
        "36"
      ],
      [
        1692286,
        "NEGRO FUCSIA",
        "39"
      ],
      [
        1692284,
        "NEGRO FUCSIA",
        "37"
      ],
      [
        1692302,
        "BLANCO NARANJA",
        "37"
      ],
      [
        1692338,
        "ROSADO",
        "37"
      ],
      [
        1692340,
        "ROSADO",
        "39"
      ],
      [
        1692341,
        "ROSADO",
        "40"
      ]
    ]
  },
  {
    "id": 1894208,
    "n": "Tenis Retro 275",
    "g": "u",
    "p": 109900,
    "o": 154900,
    "rate": 4.7,
    "rev": 113,
    "sold": 163,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1894208/17545183671725054092Adidas%20unisex%20Ultraboos%20-%20(31).jpg",
    "v": [
      [
        1658935,
        "GRIS NARANJA",
        "35"
      ],
      [
        1658918,
        "ROSADO",
        "36"
      ],
      [
        1658919,
        "ROSADO",
        "37"
      ],
      [
        1658913,
        "GRIS LILA",
        "40"
      ],
      [
        1658952,
        "BLANCO NARANJA",
        "43"
      ],
      [
        1658965,
        "NEGRO ROSA",
        "38"
      ],
      [
        1658966,
        "NEGRO ROSA",
        "39"
      ],
      [
        1658954,
        "BLANCO LILA",
        "36"
      ],
      [
        1658955,
        "BLANCO LILA",
        "37"
      ],
      [
        1658956,
        "BLANCO LILA",
        "38"
      ],
      [
        1658944,
        "BLANCO NARANJA",
        "35"
      ],
      [
        1658945,
        "BLANCO NARANJA",
        "36"
      ],
      [
        1658948,
        "BLANCO NARANJA",
        "39"
      ],
      [
        1658883,
        "AZUL",
        "37"
      ],
      [
        1658894,
        "NEGRO",
        "39"
      ],
      [
        1658920,
        "ROSADO",
        "38"
      ],
      [
        1658921,
        "ROSADO",
        "39"
      ],
      [
        1658922,
        "ROSADO",
        "40"
      ],
      [
        1658949,
        "BLANCO NARANJA",
        "40"
      ],
      [
        1658950,
        "BLANCO NARANJA",
        "41"
      ],
      [
        1658911,
        "GRIS LILA",
        "38"
      ],
      [
        1658909,
        "GRIS LILA",
        "36"
      ],
      [
        1658963,
        "NEGRO ROSA",
        "36"
      ],
      [
        1658957,
        "BLANCO LILA",
        "39"
      ],
      [
        1658917,
        "ROSADO",
        "35"
      ],
      [
        1658879,
        "BLANCO",
        "42"
      ],
      [
        1658880,
        "BLANCO",
        "43"
      ],
      [
        1658953,
        "BLANCO LILA",
        "35"
      ],
      [
        1658912,
        "GRIS LILA",
        "39"
      ],
      [
        1658929,
        "NEGRO LILA",
        "38"
      ],
      [
        1658908,
        "GRIS LILA",
        "35"
      ]
    ]
  },
  {
    "id": 1884860,
    "n": "Bota Flex 276 Hombre",
    "g": "h",
    "p": 109900,
    "o": 148900,
    "rate": 4.7,
    "rev": 125,
    "sold": 335,
    "stock": 5,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1884860/1763177983_DSC6624.jpg",
    "v": [
      [
        1637269,
        "MIEL",
        "38"
      ],
      [
        1637291,
        "BEIGE",
        "39"
      ],
      [
        1637247,
        "NEGRO",
        "37"
      ],
      [
        1637268,
        "MIEL",
        "37"
      ],
      [
        1637254,
        "AZUL",
        "37"
      ],
      [
        1637289,
        "BEIGE",
        "37"
      ],
      [
        1637290,
        "BEIGE",
        "38"
      ],
      [
        1637277,
        "CARAMELO",
        "39"
      ],
      [
        1637276,
        "CARAMELO",
        "38"
      ],
      [
        1637249,
        "NEGRO",
        "39"
      ],
      [
        1637275,
        "CARAMELO",
        "37"
      ],
      [
        1637250,
        "NEGRO",
        "40"
      ]
    ]
  },
  {
    "id": 1988321,
    "n": "Tenis Runner 277 Dama",
    "g": "m",
    "p": 109900,
    "o": 189900,
    "rate": 4.8,
    "rev": 86,
    "sold": 96,
    "stock": 8,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2148286/1778469573WhatsApp%20Image%202026-05-10%20at%208.03.23%20PM%20(2).jpeg",
    "v": [
      [
        1838378,
        "NEGRO FUCSIA",
        "38"
      ],
      [
        1838372,
        "ROSADO",
        "38"
      ],
      [
        1838390,
        "BLANCO LILA",
        "38"
      ],
      [
        1838363,
        "GRIS NARANJA",
        "35"
      ],
      [
        1838388,
        "BLANCO LILA",
        "36"
      ],
      [
        1838359,
        "GRIS LILA",
        "37"
      ],
      [
        1838389,
        "BLANCO LILA",
        "37"
      ],
      [
        1838357,
        "GRIS LILA",
        "35"
      ],
      [
        1838397,
        "BLANCO NARANJA",
        "39"
      ],
      [
        1838362,
        "GRIS LILA",
        "40"
      ],
      [
        1838371,
        "ROSADO",
        "37"
      ],
      [
        1838373,
        "ROSADO",
        "39"
      ],
      [
        1838374,
        "ROSADO",
        "40"
      ],
      [
        1838387,
        "BLANCO LILA",
        "35"
      ],
      [
        1838394,
        "BLANCO NARANJA",
        "36"
      ],
      [
        1838393,
        "BLANCO NARANJA",
        "35"
      ],
      [
        1838398,
        "BLANCO NARANJA",
        "40"
      ],
      [
        1838370,
        "ROSADO",
        "36"
      ],
      [
        1838369,
        "ROSADO",
        "35"
      ],
      [
        1838360,
        "GRIS LILA",
        "38"
      ],
      [
        1838361,
        "GRIS LILA",
        "39"
      ],
      [
        1838392,
        "BLANCO LILA",
        "40"
      ],
      [
        1838376,
        "NEGRO FUCSIA",
        "36"
      ],
      [
        1838379,
        "NEGRO FUCSIA",
        "39"
      ],
      [
        1838391,
        "BLANCO LILA",
        "39"
      ],
      [
        1838358,
        "GRIS LILA",
        "36"
      ]
    ]
  },
  {
    "id": 595898,
    "n": "Tenis Casual 278",
    "g": "u",
    "p": 134900,
    "o": 189900,
    "rate": 4.9,
    "rev": 143,
    "sold": 313,
    "stock": 5,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/595898/1705204980ZYON.jpg",
    "v": [
      [
        381784,
        "PURPLE",
        "35"
      ],
      [
        381779,
        "ZYON",
        "34"
      ],
      [
        381780,
        "ZYON",
        "35"
      ],
      [
        381781,
        "ZYON",
        "36"
      ],
      [
        381783,
        "PURPLE",
        "34"
      ],
      [
        381785,
        "PURPLE",
        "36"
      ]
    ]
  },
  {
    "id": 1519075,
    "n": "Tenis Prime 279",
    "g": "u",
    "p": 149900,
    "o": 209900,
    "rate": 5,
    "rev": 100,
    "sold": 390,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1519075/1762982630PRODUCTO%20EXCLUSIVO%20RXR.jpg",
    "v": [
      [
        1071013,
        "BLANCO",
        "42"
      ],
      [
        1071007,
        "BLANCO",
        "36"
      ],
      [
        1071011,
        "BLANCO",
        "40"
      ],
      [
        1071012,
        "BLANCO",
        "41"
      ],
      [
        1071010,
        "BLANCO",
        "39"
      ],
      [
        1071008,
        "BLANCO",
        "37"
      ],
      [
        1071014,
        "BLANCO",
        "43"
      ],
      [
        2287658,
        "BLANCO",
        "35"
      ]
    ]
  },
  {
    "id": 2225485,
    "n": "Tenis Active 280",
    "g": "u",
    "p": 129900,
    "o": 184900,
    "rate": 4.8,
    "rev": 190,
    "sold": 280,
    "stock": 4,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2225485/dc5c5c18-afc9-440b-a7ff-d972ce73fd70.jpg",
    "v": [
      [
        2303851,
        "BLANCO MOSTAZA",
        "41"
      ],
      [
        2303847,
        "BLANCO MOSTAZA",
        "37"
      ],
      [
        2303848,
        "BLANCO MOSTAZA",
        "38"
      ],
      [
        2303849,
        "BLANCO MOSTAZA",
        "39"
      ],
      [
        2303859,
        "BLANCO GRIS",
        "42"
      ],
      [
        2303854,
        "BLANCO GRIS",
        "37"
      ],
      [
        2303855,
        "BLANCO GRIS",
        "38"
      ],
      [
        2303861,
        "NEGRO MOSTAZA",
        "37"
      ],
      [
        2303862,
        "NEGRO MOSTAZA",
        "38"
      ],
      [
        2303865,
        "NEGRO MOSTAZA",
        "41"
      ],
      [
        2303866,
        "NEGRO MOSTAZA",
        "42"
      ],
      [
        2303867,
        "NEGRO MOSTAZA",
        "43"
      ]
    ]
  },
  {
    "id": 1885277,
    "n": "Tenis Urban 281 Hombre",
    "g": "h",
    "p": 119900,
    "o": 169900,
    "rate": 4.8,
    "rev": 182,
    "sold": 412,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1885277/17534778631727916079WhatsApp%20Image%202024-10-01%20at%205.57.54%20PM%20(1).jpeg",
    "v": [
      [
        1638153,
        "NEGRO ROJO",
        "37"
      ],
      [
        1638171,
        "BLANCO",
        "41"
      ],
      [
        1638169,
        "BLANCO",
        "39"
      ],
      [
        1638163,
        "AZUL",
        "40"
      ],
      [
        1638161,
        "AZUL",
        "38"
      ],
      [
        1638160,
        "AZUL",
        "37"
      ],
      [
        1638158,
        "NEGRO ROJO",
        "42"
      ],
      [
        1638157,
        "NEGRO ROJO",
        "41"
      ],
      [
        1638155,
        "NEGRO ROJO",
        "39"
      ],
      [
        1638154,
        "NEGRO ROJO",
        "38"
      ],
      [
        1638175,
        "NEGRO BLANCO",
        "38"
      ],
      [
        1638159,
        "NEGRO ROJO",
        "43"
      ],
      [
        1638162,
        "AZUL",
        "39"
      ],
      [
        1638176,
        "NEGRO BLANCO",
        "39"
      ],
      [
        1638164,
        "AZUL",
        "41"
      ],
      [
        1638168,
        "BLANCO",
        "38"
      ],
      [
        1638165,
        "AZUL",
        "42"
      ],
      [
        1638173,
        "BLANCO",
        "43"
      ],
      [
        1638172,
        "BLANCO",
        "42"
      ]
    ]
  },
  {
    "id": 1845430,
    "n": "Tenis Classic 282 Hombre",
    "g": "h",
    "p": 109900,
    "o": 154900,
    "rate": 4.9,
    "rev": 115,
    "sold": 345,
    "stock": 7,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1845430/17495887421715731645WhatsApp%20Image%202024-04-22%20at%207.08.58%20PM%20(2).jpeg",
    "v": [
      [
        1551947,
        "Beige",
        "37"
      ],
      [
        1551958,
        "Negro",
        "41"
      ],
      [
        1551954,
        "Negro",
        "37"
      ],
      [
        1551973,
        "Azul",
        "42"
      ],
      [
        1551949,
        "Beige",
        "39"
      ],
      [
        1551948,
        "Beige",
        "38"
      ],
      [
        1551955,
        "Negro",
        "38"
      ],
      [
        1551956,
        "Negro",
        "39"
      ],
      [
        1551957,
        "Negro",
        "40"
      ],
      [
        1551961,
        "Gris",
        "37"
      ],
      [
        1551965,
        "Gris",
        "41"
      ],
      [
        1551971,
        "Azul",
        "40"
      ],
      [
        1551970,
        "Azul",
        "39"
      ],
      [
        1551969,
        "Azul",
        "38"
      ],
      [
        1551968,
        "Azul",
        "37"
      ],
      [
        1551960,
        "Negro",
        "43"
      ]
    ]
  },
  {
    "id": 1812527,
    "n": "Tenis Street 283 Dama",
    "g": "m",
    "p": 144900,
    "o": 204900,
    "rate": 5,
    "rev": 152,
    "sold": 422,
    "stock": 8,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1812527/1748458236GIF%20CUSH.gif",
    "v": [
      [
        1484013,
        "GRIS",
        "39"
      ],
      [
        1484024,
        "VIOLETA",
        "40"
      ],
      [
        1484023,
        "VIOLETA",
        "39"
      ],
      [
        1484020,
        "VIOLETA",
        "36"
      ],
      [
        1484021,
        "VIOLETA",
        "37"
      ],
      [
        1484017,
        "CAFE",
        "38"
      ],
      [
        1484018,
        "CAFE",
        "39"
      ],
      [
        1484019,
        "CAFE",
        "40"
      ],
      [
        1484015,
        "CAFE",
        "36"
      ],
      [
        1484014,
        "GRIS",
        "40"
      ]
    ]
  },
  {
    "id": 2033829,
    "n": "Tenis Sport 284",
    "g": "u",
    "p": 109900,
    "o": 154900,
    "rate": 4.8,
    "rev": 54,
    "sold": 384,
    "stock": 6,
    "tag": "💎 EDICIÓN ESPECIAL",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2033829/176797320517552910971718908011WhatsApp%20Image%202024-06-19%20at%204.54.43%20PM%20(2).jpeg",
    "v": [
      [
        1899886,
        "Negro Blanco",
        "42"
      ],
      [
        1899870,
        "Blanco Naranja",
        "35"
      ],
      [
        1899872,
        "Blanco Naranja",
        "37"
      ],
      [
        1899878,
        "Blanco Naranja",
        "43"
      ],
      [
        1899887,
        "Negro Blanco",
        "43"
      ],
      [
        1899873,
        "Blanco Naranja",
        "38"
      ],
      [
        1899883,
        "Negro Blanco",
        "39"
      ],
      [
        1899875,
        "Blanco Naranja",
        "40"
      ],
      [
        1899882,
        "Negro Blanco",
        "38"
      ],
      [
        1899871,
        "Blanco Naranja",
        "36"
      ],
      [
        1899874,
        "Blanco Naranja",
        "39"
      ],
      [
        1899876,
        "Blanco Naranja",
        "41"
      ],
      [
        1899877,
        "Blanco Naranja",
        "42"
      ],
      [
        1899880,
        "Negro Blanco",
        "36"
      ],
      [
        1899881,
        "Negro Blanco",
        "37"
      ],
      [
        1899885,
        "Negro Blanco",
        "41"
      ]
    ]
  },
  {
    "id": 2013780,
    "n": "Zapato Retro 285",
    "g": "u",
    "p": 124900,
    "o": 174900,
    "rate": 4.7,
    "rev": 165,
    "sold": 395,
    "stock": 3,
    "tag": "🔥 MÁS VENDIDO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2013780/17793109421764715343WhatsApp%20Image%202025-12-02%20at%2012.41.42%20PM-dropicup.png",
    "v": [
      [
        1874507,
        "MOSTAZA",
        "38"
      ],
      [
        1874506,
        "MOSTAZA",
        "37"
      ],
      [
        1874511,
        "MOSTAZA",
        "42"
      ],
      [
        1874512,
        "MOSTAZA",
        "43"
      ],
      [
        1874520,
        "CARAMELO",
        "37"
      ],
      [
        1874521,
        "CARAMELO",
        "38"
      ],
      [
        1874522,
        "CARAMELO",
        "39"
      ],
      [
        1874523,
        "CARAMELO",
        "40"
      ],
      [
        1874510,
        "MOSTAZA",
        "41"
      ],
      [
        1874526,
        "CARAMELO",
        "43"
      ],
      [
        1874508,
        "MOSTAZA",
        "39"
      ],
      [
        1874509,
        "MOSTAZA",
        "40"
      ]
    ]
  },
  {
    "id": 1883946,
    "n": "Tenis Flex 286 Hombre",
    "g": "h",
    "p": 109900,
    "o": 134800,
    "rate": 4.9,
    "rev": 111,
    "sold": 101,
    "stock": 3,
    "tag": "⚡ OFERTA FLASH",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1883946/09758b5a-24da-4f3a-a40a-4843e3c4a3db.jpg",
    "v": [
      [
        1633973,
        "AZUL",
        "37"
      ],
      [
        1633968,
        "NEGRO",
        "39"
      ],
      [
        1633986,
        "BLANCO",
        "43"
      ],
      [
        1633985,
        "BLANCO",
        "42"
      ],
      [
        2388190,
        "BLANCO NARANJA",
        "39"
      ],
      [
        2388191,
        "BLANCO NARANJA",
        "40"
      ],
      [
        2388192,
        "BLANCO NARANJA",
        "41"
      ]
    ]
  },
  {
    "id": 1883973,
    "n": "Tenis Runner 287 Dama",
    "g": "m",
    "p": 109900,
    "o": 134800,
    "rate": 4.8,
    "rev": 138,
    "sold": 128,
    "stock": 6,
    "tag": "👟 FAVORITO",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1883973/17533740471734200773Zapatilla%20baja%20adidas%20(5)%20(1).jpg",
    "v": [
      [
        1634102,
        "NEGRO",
        "40"
      ],
      [
        1634093,
        "NEGRO",
        "37"
      ],
      [
        1634085,
        "ROSA",
        "35"
      ],
      [
        1634087,
        "NEGRO",
        "35"
      ],
      [
        1634088,
        "ROSA",
        "36"
      ],
      [
        1634094,
        "ROSA",
        "38"
      ],
      [
        1634091,
        "ROSA",
        "37"
      ]
    ]
  },
  {
    "id": 1847272,
    "n": "Tenis Casual 288",
    "g": "u",
    "p": 109900,
    "o": 134900,
    "rate": 4.7,
    "rev": 157,
    "sold": 147,
    "stock": 7,
    "tag": "⭐ TOP CALIDAD",
    "img": "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1847272/17497470631747254206WhatsApp%20Image%202025-05-13%20at%208.46.37%20AM.jpeg",
    "v": [
      [
        1558049,
        "Negro",
        "37"
      ],
      [
        1558047,
        "Negro",
        "35"
      ],
      [
        1558050,
        "Negro",
        "38"
      ],
      [
        1558031,
        "Negro Blanco",
        "37"
      ],
      [
        1558041,
        "Negro Suela Blanca",
        "38"
      ]
    ]
  }
];

// Reseñas verificadas estilo ecommerce contraentrega Colombia
const REVIEWS = [
  {
    name: "Andrés Felipe G.",
    city: "Medellín, Antioquia",
    product: "Tenis TN Urban",
    stars: 5,
    text: "Llegaron en 2 días por Interrapidísimo. Pagué en efectivo cuando el mensajero me los entregó en la puerta. La suela y los acabados son brutales.",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Laura Camila R.",
    city: "Bogotá D.C.",
    product: "Tenis Válvula Dama",
    stars: 5,
    text: "Súper cómodos y livianos. Tenía miedo de pedir por internet pero me confirmaron por WhatsApp y pagué al recibir. ¡Volveré a pedir otro color!",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Juan Sebastián M.",
    city: "Cali, Valle",
    product: "Tenis Skate Chilango",
    stars: 5,
    text: "Aproveché la promo de 2 pares con mi hermano y nos salió con el 10% extra. La talla exacta según la guía de centímetros. 10/10.",
    verified: "Compra Contraentrega Verificada"
  },
  {
    name: "Valentina Torres",
    city: "Barranquilla, Atlántico",
    product: "Tenis Classic Star",
    stars: 5,
    text: "Divinos tal cual la foto. Me atendieron súper rápido por el botón de WhatsApp y el envío gratis fue real sin costos ocultos.",
    verified: "Compra Contraentrega Verificada"
  }
];

// Compras recientes simuladas para el popup de prueba social en vivo
const LIVE_SALES = [
  { buyer: "Carlos M.", city: "Bogotá", id: 2128764, ago: "hace 3 min" },
  { buyer: "Sofía V.", city: "Medellín", id: 2125711, ago: "hace 6 min" },
  { buyer: "Mateo R.", city: "Cali", id: 1627658, ago: "hace 9 min" },
  { buyer: "Daniela P.", city: "Bucaramanga", id: 2099257, ago: "hace 12 min" },
  { buyer: "Santiago L.", city: "Barranquilla", id: 1844425, ago: "hace 15 min" },
  { buyer: "Camila O.", city: "Pereira", id: 1807369, ago: "hace 18 min" }
];

// Guía de tallas estándar Colombia (EU -> cm)
const SIZE_GUIDE = [
  ["34", "22.0 cm"], ["35", "22.5 cm"], ["36", "23.0 cm"],
  ["37", "23.5 cm"], ["38", "24.5 cm"], ["39", "25.0 cm"],
  ["40", "25.5 cm"], ["41", "26.5 cm"], ["42", "27.0 cm"],
  ["43", "27.5 cm"], ["44", "28.5 cm"]
];

