export interface LocationItem {
  city: string;
  address: string;
  phone: string;
}

export interface StateLocations {
  stateName: string;
  locations: LocationItem[];
}

export const locationData: StateLocations[] = [
  {
    stateName: "Indiana",
    locations: [
      { city: "Anderson", address: "1922 E 53rd St, Anderson, IN 46013", phone: "(765) 642-7763" },
      { city: "Angola", address: "202 E Wendell Jacob Ave, Angola, IN 46703", phone: "(260) 668-3830" },
      { city: "Auburn", address: "507 Ley Dr, Auburn, IN 46706", phone: "(260) 927-9885" },
      { city: "Avon", address: "9883 E US Hwy 36, Avon, IN 46123", phone: "(317) 209-1692" },
      { city: "Bloomington", address: "2800 E 3rd St, Bloomington, IN 47401", phone: "(812) 336-9147" },
      { city: "Brownsburg", address: "2 Whittington Dr, Brownsburg, IN 46112", phone: "(317) 858-0291" },
      { city: "Camby", address: "10680 Enterprise Dr, Camby, IN 46113", phone: "(317) 821-0890" },
      { city: "Carmel", address: "14711 Thatcher Ln, Carmel, IN 46032", phone: "(317) 571-8780" },
      { city: "Clarksville", address: "721 E Lewis and Clark Pkwy, Clarksville, IN 47129", phone: "(812) 914-8760" },
      { city: "Columbus", address: "1900 25th St, Columbus, IN 47201", phone: "(812) 372-4381" },
      { city: "Crawfordsville", address: "1516 S Washington St, Crawfordsville, IN 47933", phone: "(765) 361-8711" },
      { city: "Edinburgh", address: "11860 N US Hwy 31, Edinburgh, IN 46124", phone: "(812) 526-2376" },
      { city: "Evansville", address: "5100 E Morgan Ave, Evansville, IN 47715", phone: "(812) 471-0942" },
      { city: "Evansville", address: "5727 Pearl Dr, Evansville, IN 47712", phone: "(812) 426-2006" },
      { city: "Fishers", address: "8310 E 96th St, Fishers, IN 46037", phone: "(317) 570-0803" },
      { city: "Fort Wayne", address: "4510 N Clinton St, Fort Wayne, IN 46825", phone: "(260) 484-6060" },
      { city: "Fort Wayne", address: "6525 Lima Rd, Fort Wayne, IN 46818", phone: "(260) 497-7404" },
      { city: "Frankfort", address: "2432 E Wabash St, Frankfort, IN 46041", phone: "(765) 659-2909" },
      { city: "Franklin", address: "700 N Morton St, Franklin, IN 46131", phone: "(317) 736-1991" },
      { city: "Goshen", address: "1807 Rieth Blvd, Goshen, IN 46526", phone: "(574) 875-4929" },
      { city: "Greenfield", address: "1792 N State St, Greenfield, IN 46140", phone: "(317) 462-3004" },
      { city: "Indianapolis", address: "7345 E Washington St, Indianapolis, IN 46219", phone: "(317) 375-9007" },
      { city: "Kokomo", address: "3720 S Reed Rd, Kokomo, IN 46902", phone: "(765) 455-2090" },
      { city: "Lafayette", address: "2415 Sagamore Pkwy S, Lafayette, IN 47905", phone: "(765) 448-1999" }
    ]
  },
  {
    stateName: "Michigan",
    locations: [
      { city: "Adrian", address: "1396 South Main Street, Adrian, MI 49221", phone: "(517) 263-3344" },
      { city: "Allen Park", address: "23099 Outer Drive, Allen Park, MI 48101", phone: "(313) 274-4540" },
      { city: "Alpena", address: "1468 M-32 West, Alpena, MI 49707", phone: "(989) 354-3886" },
      { city: "Ann Arbor", address: "1005 W. Eisenhower Parkway, Ann Arbor, MI 48103", phone: "(734) 741-4851" },
      { city: "Auburn Hills", address: "2105 N. Squirrel Road, Auburn Hills, MI 48326", phone: "(248) 373-4659" },
      { city: "Battle Creek", address: "5775 Beckley Road, Battle Creek, MI 49015", phone: "(269) 979-8619" },
      { city: "Bay City", address: "3500 Wilder Road, Bay City, MI 48706", phone: "(989) 671-0057" },
      { city: "Belleville", address: "10526 Belleville Road, Belleville, MI 48111", phone: "(734) 699-6660" },
      { city: "Benton Harbor", address: "2050 Pipestone Road, Benton Harbor, MI 49022", phone: "(269) 925-5353" },
      { city: "Big Rapids", address: "718 Perry Street, Big Rapids, MI 49307", phone: "(231) 796-7429" },
      { city: "Canton", address: "43500 Ford Road, Canton, MI 48187", phone: "(734) 455-7510" },
      { city: "Detroit", address: "333 E. Jefferson Ave, Detroit, MI 48226", phone: "(313) 879-5141" },
      { city: "Flint", address: "G-3129 Miller Road, Flint, MI 48507", phone: "(810) 235-1911" },
      { city: "Grand Rapids", address: "4955 28th Street SE, Grand Rapids, MI 49546", phone: "(616) 977-1900" },
      { city: "Kalamazoo", address: "5330 West Main Street, Kalamazoo, MI 49009", phone: "(269) 382-4448" },
      { city: "Lansing", address: "5400 West Saginaw, Lansing, MI 48917", phone: "(517) 321-6045" },
      { city: "Livonia", address: "13301 Middlebelt Rd, Livonia, MI 48150", phone: "(734) 245-4680" },
      { city: "Muskegon", address: "1825 East Sherman Blvd, Muskegon, MI 49444", phone: "(231) 737-0345" },
      { city: "Novi", address: "47900 Grand River Ave, Novi, MI 48374", phone: "(248) 449-1592" },
      { city: "Saginaw", address: "5940 State Street, Saginaw, MI 48603", phone: "(989) 790-1222" },
      { city: "Southfield", address: "29177 Southfield Rd, Southfield, MI 48076", phone: "(248) 849-9620" },
      { city: "Traverse City", address: "2384 U.S. 31 South, Traverse City, MI 49684", phone: "(231) 929-2929" },
      { city: "Warren", address: "2992 Cook Road, West Branch, MI 48661", phone: "(989) 343-0100" },
      { city: "Ypsilanti", address: "3819 Carpenter Road, Ypsilanti, MI 48197", phone: "(734) 973-7440" }
    ]
  },
  {
    stateName: "New York",
    locations: [
      { city: "Astoria", address: "38-01 35th Avenue, Astoria, NY 11101", phone: "(718) 943-7404" },
      { city: "Auburn", address: "221 Grant Avenue, Auburn, NY 13021", phone: "(315) 258-8398" },
      { city: "Batavia", address: "8322 Lewiston Rd., Batavia, NY 14020", phone: "(585) 344-0600" },
      { city: "Binghamton", address: "842 Upper Front Street, Binghamton, NY 13905", phone: "(607) 724-0458" },
      { city: "Bronx", address: "610 Exterior Street, Bronx, NY 10451", phone: "(347) 226-5120" },
      { city: "Brooklyn", address: "2201 Nostrand Ave, Brooklyn, NY 11210", phone: "(718) 555-0102" },
      { city: "Buffalo", address: "2656 Delaware Avenue, Buffalo, NY 14216", phone: "(716) 555-0199" },
      { city: "Dewitt", address: "3189 Erie Blvd. East, Dewitt, NY 13214", phone: "(315) 445-7000" },
      { city: "Elmhurst", address: "9015 Queens Blvd., Elmhurst, NY 11373", phone: "(718) 271-7999" },
      { city: "New York - Times Square", address: "234 W. 42nd Street, New York, NY 10036", phone: "(212) 391-7414" },
      { city: "New York - 50th & Broadway", address: "205 W. 50th Street, New York, NY 10019", phone: "(212) 262-2400" },
      { city: "Niagara Falls", address: "1608 Military Road, Niagara Falls, NY 14304", phone: "(716) 298-1085" },
      { city: "Poughkeepsie", address: "3450 North Road, Poughkeepsie, NY 12601", phone: "(845) 486-0052" },
      { city: "Rochester", address: "3360 W. Henrietta Rd, Rochester, NY 14623", phone: "(585) 427-0370" },
      { city: "Saratoga Springs", address: "3 Lowes Drive, Saratoga Springs, NY 12866", phone: "(518) 583-2606" },
      { city: "Schenectady", address: "2400 Cambridge Road, Schenectady, NY 12304", phone: "(518) 346-4455" },
      { city: "Staten Island", address: "2720 Veteran's Road West, Staten Island, NY 10309", phone: "(718) 943-1200" },
      { city: "Syracuse", address: "628 S. Main Street, North Syracuse, NY 13212", phone: "(315) 452-5670" },
      { city: "Utica", address: "300 River Road, Utica, NY 13502", phone: "(315) 735-0421" },
      { city: "Yonkers", address: "2 Executive Blvd, Yonkers, NY 10701", phone: "(914) 595-0601" }
    ]
  },
  {
    stateName: "Ohio",
    locations: [
      { city: "Akron", address: "2897 S. Arlington Road, Akron, OH 44312", phone: "(330) 644-5303" },
      { city: "Athens", address: "547 E State St, Athens, OH 45701", phone: "(740) 592-2606" },
      { city: "Avon", address: "35916 Detroit Road, Avon, OH 44011", phone: "(440) 937-3081" },
      { city: "Cleveland", address: "3401 Steelyard Drive, Cleveland, OH 44109", phone: "(216) 661-3756" },
      { city: "Columbus", address: "3894 Morse Road, Columbus, OH 43219", phone: "(614) 337-8230" },
      { city: "Dayton", address: "105 N. Springboro Pike, Dayton, OH 45449", phone: "(937) 436-3222" },
      { city: "Elyria", address: "1540 West River Road North, Elyria, OH 44035", phone: "(440) 324-1700" },
      { city: "Findlay", address: "2531 Tiffin Ave, Findlay, OH 45840", phone: "(419) 425-9955" },
      { city: "Grove City", address: "2020 Stringtown Road, Grove City, OH 43123", phone: "(614) 801-1100" },
      { city: "Hamilton", address: "700 Washington Blvd., N.W., Hamilton, OH 45013", phone: "(513) 868-9400" },
      { city: "Kent", address: "220 Tallmadge Road, Kent, OH 44240", phone: "(330) 673-2406" },
      { city: "Lima", address: "3296 Elida Road, Lima, OH 45805", phone: "(419) 331-8502" },
      { city: "Mansfield", address: "145 Stander Avenue, Mansfield, OH 44903", phone: "(419) 756-9303" },
      { city: "Marion", address: "1514 Mt. Vernon Avenue, Marion, OH 43302", phone: "(740) 389-2305" },
      { city: "Medina", address: "4115 Pearl Road, Medina, OH 44256", phone: "(330) 723-2311" },
      { city: "Mentor", address: "9174 Mentor Avenue, Mentor, OH 44060", phone: "(440) 974-3777" },
      { city: "Sandusky", address: "5503 Milan Road, Sandusky, OH 44870", phone: "(419) 627-2777" },
      { city: "Springfield", address: "1800 West 1st Street, Springfield, OH 45504", phone: "(937) 322-6700" },
      { city: "Toledo", address: "4702 Monroe Street, Toledo, OH 43623", phone: "(419) 475-2245" },
      { city: "Zanesville", address: "3181 Maple Ave., Zanesville, OH 43701", phone: "(740) 453-2900" }
    ]
  },
  {
    stateName: "California",
    locations: [
      { city: "Anaheim", address: "1351 S. Harbor Blvd., Anaheim, CA 92802", phone: "(714) 490-0706" },
      { city: "Bakersfield", address: "4000 Ming Ave, Bakersfield, CA 93309", phone: "(661) 835-1510" },
      { city: "Compton", address: "3490 East Artesia Boulevard, Compton, CA 90221", phone: "(310) 609-1736" },
      { city: "Downey", address: "12123 Lakewood Blvd, Downey, CA 90242", phone: "(562) 869-7001" },
      { city: "Fresno", address: "8095 N. Cedar Ave., Fresno, CA 93720", phone: "(559) 438-5182" },
      { city: "Hawthorne", address: "13145 Hawthorne Blvd, Hawthorne, CA 90250", phone: "(310) 644-8840" },
      { city: "Long Beach", address: "2201 E Willow St, Long Beach, CA 90806", phone: "(562) 595-5800" },
      { city: "Modesto", address: "3900 Sisk Rd, Modesto, CA 95356", phone: "(209) 545-2005" },
      { city: "Monterey Park", address: "401 N. Garfield Ave., Monterey Park, CA 91754", phone: "(626) 280-9226" },
      { city: "Northridge", address: "9312 Tampa Ave, Northridge, CA 91324", phone: "(818) 775-1033" },
      { city: "Oceanside", address: "2146 Vista Way, Oceanside, CA 92054", phone: "(760) 967-8822" },
      { city: "Palmdale", address: "1151 West Avenue P, Palmdale, CA 93551", phone: "(661) 267-2700" },
      { city: "Redding", address: "1801 Hilltop Dr, Redding, CA 96002", phone: "(530) 221-5077" },
      { city: "Riverside", address: "3560 Riverside Plaza Dr, Riverside, CA 92506", phone: "(951) 682-1270" },
      { city: "Sacramento", address: "2015 Truxel Rd, Sacramento, CA 95833", phone: "(916) 928-8686" },
      { city: "San Bernardino", address: "395 W Hospitality Ln, San Bernardino, CA 92408", phone: "(909) 388-1440" },
      { city: "San Diego", address: "7677 Balboa Ave, San Diego, CA 92111", phone: "(858) 576-9040" },
      { city: "San Jose", address: "1041 Blossom Hill Rd, San Jose, CA 95123", phone: "(408) 224-8777" },
      { city: "Stockton", address: "2633 W March Ln, Stockton, CA 95207", phone: "(209) 955-0810" },
      { city: "Visalia", address: "3400 S Mooney Blvd, Visalia, CA 93277", phone: "(559) 636-6202" }
    ]
  },
  {
    stateName: "Texas",
    locations: [
      { city: "Abilene", address: "3134 S Clack St, Abilene, TX 79606", phone: "(325) 692-7472" },
      { city: "Amarillo", address: "2800 I-40 West, Amarillo, TX 79102", phone: "(806) 352-0545" },
      { city: "Austin", address: "12316 N Interstate Hwy 35, Austin, TX 78753", phone: "(512) 835-2337" },
      { city: "Beaumont", address: "4080 Dowlen Rd, Beaumont, TX 77706", phone: "(409) 898-7500" },
      { city: "Corpus Christi", address: "6617 S Padre Island Dr, Corpus Christi, TX 78412", phone: "(361) 980-0447" },
      { city: "Dallas", address: "2926 N Henderson Ave, Dallas, TX 75206", phone: "(214) 826-3023" },
      { city: "El Paso", address: "6124 N Mesa St, El Paso, TX 79912", phone: "(915) 581-2292" },
      { city: "El Paso", address: "1723 N Zaragoza Rd, El Paso, TX 79936", phone: "(915) 857-8141" },
      { city: "Fort Worth", address: "4600 SW Loop 820, Fort Worth, TX 76109", phone: "(817) 732-2252" },
      { city: "Houston", address: "9790 Katy Fwy, Houston, TX 77055", phone: "(713) 464-9665" },
      { city: "Houston", address: "550 E Little York Rd, Houston, TX 77076", phone: "(713) 694-8176" },
      { city: "Laredo", address: "10719 McPherson Rd, Laredo, TX 78045", phone: "(956) 712-4217" },
      { city: "Lubbock", address: "4025 S Loop 289, Lubbock, TX 79423", phone: "(806) 794-5551" },
      { city: "McAllen", address: "1600 W Expressway 83, McAllen, TX 78501", phone: "(956) 664-9989" },
      { city: "Midland", address: "110 E Loop 250 N, Midland, TX 79705", phone: "(432) 683-1188" },
      { city: "San Antonio", address: "6011 NW Loop 410, San Antonio, TX 78238", phone: "(210) 680-2800" },
      { city: "San Antonio", address: "3142 SE Military Dr, San Antonio, TX 78223", phone: "(210) 333-3111" },
      { city: "Tyler", address: "5822 S Broadway Ave, Tyler, TX 75703", phone: "(903) 534-1906" },
      { city: "Waco", address: "614 N Valley Mills Dr, Waco, TX 76710", phone: "(254) 751-9084" },
      { city: "Wichita Falls", address: "4210 Kell Blvd, Wichita Falls, TX 76309", phone: "(940) 692-0692" }
    ]
  }
];
