interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    sizes: ValidSizes[];
    slug?: string;
    tags?: string[];
    title: string;
    gender: 'M'|'F';
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'2XL'|'3XL';

interface SeedData {
    products: SeedProduct[];
}


export const initialData: SeedData = {
    products: [
      {
        "title": "posuere nonummy integer",
        "price": 36.33,
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "gender": "M",
        "stock": 20,
        "sizes": [
          "2XL",
          "M",
          "3XL"
        ],
        "images": [
          "http://dummyimage.com/225x100.png/ff4444/ffffff",
          "http://dummyimage.com/223x100.png/dddddd/000000",
          "http://dummyimage.com/120x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "ut volutpat",
        "price": 52.78,
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "gender": "M",
        "stock": 94,
        "sizes": [
          "S",
          "XS",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/160x100.png/cc0000/ffffff",
          "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/249x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "dis parturient montes",
        "price": 61.45,
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "gender": "M",
        "stock": 48,
        "sizes": [
          "M",
          "3XL",
          "S"
        ],
        "images": [
          "http://dummyimage.com/118x100.png/ff4444/ffffff",
          "http://dummyimage.com/185x100.png/cc0000/ffffff",
          "http://dummyimage.com/176x100.png/dddddd/000000"
        ]
      }, {
        "title": "sem mauris",
        "price": 31.54,
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "gender": "F",
        "stock": 84,
        "sizes": [
          "M",
          "M",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/169x100.png/ff4444/ffffff",
          "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/243x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "tellus nulla",
        "price": 44.16,
        "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "gender": "M",
        "stock": 13,
        "sizes": [
          "3XL",
          "2XL",
          "L"
        ],
        "images": [
          "http://dummyimage.com/123x100.png/ff4444/ffffff",
          "http://dummyimage.com/116x100.png/ff4444/ffffff",
          "http://dummyimage.com/121x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "mara 2",
        "price": 43.11,
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "gender": "M",
        "stock": 43,
        "sizes": [
          "L",
          "XL",
          "L"
        ],
        "images": [
          "http://dummyimage.com/160x100.png/dddddd/000000",
          "http://dummyimage.com/220x100.png/cc0000/ffffff",
          "http://dummyimage.com/209x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "sed justo",
        "price": 36.52,
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "gender": "F",
        "stock": 86,
        "sizes": [
          "3XL",
          "XS",
          "3XL"
        ],
        "images": [
          "http://dummyimage.com/137x100.png/cc0000/ffffff",
          "http://dummyimage.com/132x100.png/dddddd/000000",
          "http://dummyimage.com/210x100.png/dddddd/000000"
        ]
      }, {
        "title": "in faucibus",
        "price": 42.04,
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "gender": "F",
        "stock": 63,
        "sizes": [
          "3XL",
          "XL",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/192x100.png/ff4444/ffffff",
          "http://dummyimage.com/104x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "maecenas ut",
        "price": 34.6,
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "gender": "M",
        "stock": 82,
        "sizes": [
          "L",
          "L",
          "S"
        ],
        "images": [
          "http://dummyimage.com/125x100.png/ff4444/ffffff",
          "http://dummyimage.com/110x100.png/cc0000/ffffff",
          "http://dummyimage.com/169x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "nunc donec quis",
        "price": 29.72,
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "gender": "M",
        "stock": 99,
        "sizes": [
          "3XL",
          "S",
          "L"
        ],
        "images": [
          "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/161x100.png/dddddd/000000",
          "http://dummyimage.com/192x100.png/dddddd/000000"
        ]
      }, {
        "title": "metus",
        "price": 21.45,
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "gender": "F",
        "stock": 6,
        "sizes": [
          "2XL",
          "L",
          "2XL"
        ],
        "images": [
          "http://dummyimage.com/237x100.png/ff4444/ffffff",
          "http://dummyimage.com/115x100.png/cc0000/ffffff",
          "http://dummyimage.com/183x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "donec",
        "price": 19.87,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "gender": "M",
        "stock": 71,
        "sizes": [
          "L",
          "L",
          "S"
        ],
        "images": [
          "http://dummyimage.com/176x100.png/ff4444/ffffff",
          "http://dummyimage.com/163x100.png/dddddd/000000",
          "http://dummyimage.com/183x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "nulla pede ullamcorper",
        "price": 33.48,
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "gender": "F",
        "stock": 7,
        "sizes": [
          "3XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/159x100.png/ff4444/ffffff",
          "http://dummyimage.com/156x100.png/dddddd/000000",
          "http://dummyimage.com/155x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "id lobortis convallis",
        "price": 27.33,
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "gender": "F",
        "stock": 30,
        "sizes": [
          "S",
          "S",
          "3XL"
        ],
        "images": [
          "http://dummyimage.com/102x100.png/ff4444/ffffff",
          "http://dummyimage.com/212x100.png/dddddd/000000",
          "http://dummyimage.com/188x100.png/dddddd/000000"
        ]
      }, {
        "title": "ut",
        "price": 21.32,
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "gender": "M",
        "stock": 35,
        "sizes": [
          "2XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/143x100.png/cc0000/ffffff",
          "http://dummyimage.com/131x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "sapien",
        "price": 36.88,
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "gender": "M",
        "stock": 44,
        "sizes": [
          "3XL",
          "L",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/119x100.png/dddddd/000000",
          "http://dummyimage.com/147x100.png/cc0000/ffffff",
          "http://dummyimage.com/156x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "vel nisl duis",
        "price": 64.08,
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "gender": "F",
        "stock": 52,
        "sizes": [
          "XS",
          "3XL",
          "M"
        ],
        "images": [
          "http://dummyimage.com/218x100.png/cc0000/ffffff",
          "http://dummyimage.com/219x100.png/dddddd/000000",
          "http://dummyimage.com/109x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "porttitor lorem",
        "price": 38.67,
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "gender": "M",
        "stock": 29,
        "sizes": [
          "2XL",
          "M",
          "S"
        ],
        "images": [
          "http://dummyimage.com/247x100.png/cc0000/ffffff",
          "http://dummyimage.com/233x100.png/ff4444/ffffff",
          "http://dummyimage.com/214x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "suspendisse accumsan",
        "price": 56.36,
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
        "gender": "M",
        "stock": 84,
        "sizes": [
          "XL",
          "S",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/108x100.png/dddddd/000000"
        ]
      }, {
        "title": "orcis2",
        "price": 56.35,
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "gender": "F",
        "stock": 74,
        "sizes": [
          "2XL",
          "XL",
          "L"
        ],
        "images": [
          "http://dummyimage.com/168x100.png/cc0000/ffffff",
          "http://dummyimage.com/230x100.png/cc0000/ffffff",
          "http://dummyimage.com/118x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "in",
        "price": 44.29,
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "gender": "M",
        "stock": 97,
        "sizes": [
          "2XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/157x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "sollicitudin",
        "price": 33.53,
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "gender": "F",
        "stock": 68,
        "sizes": [
          "L",
          "2XL",
          "M"
        ],
        "images": [
          "http://dummyimage.com/137x100.png/ff4444/ffffff",
          "http://dummyimage.com/113x100.png/dddddd/000000",
          "http://dummyimage.com/115x100.png/dddddd/000000"
        ]
      }, {
        "title": "nulla ac",
        "price": 44.43,
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "gender": "M",
        "stock": 60,
        "sizes": [
          "M",
          "XS",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/210x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/218x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "orciso",
        "price": 33.27,
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "gender": "M",
        "stock": 19,
        "sizes": [
          "XL",
          "L",
          "M"
        ],
        "images": [
          "http://dummyimage.com/127x100.png/ff4444/ffffff",
          "http://dummyimage.com/245x100.png/dddddd/000000",
          "http://dummyimage.com/133x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "lorem quisque",
        "price": 23.94,
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "gender": "F",
        "stock": 93,
        "sizes": [
          "XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/248x100.png/dddddd/000000",
          "http://dummyimage.com/228x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "venenatis",
        "price": 11.57,
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "gender": "F",
        "stock": 63,
        "sizes": [
          "2XL",
          "M",
          "2XL"
        ],
        "images": [
          "http://dummyimage.com/141x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/118x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "suscipit ligula in",
        "price": 51.15,
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "gender": "M",
        "stock": 73,
        "sizes": [
          "XS",
          "L",
          "M"
        ],
        "images": [
          "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/216x100.png/dddddd/000000",
          "http://dummyimage.com/200x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "porttitor id consequat",
        "price": 62.02,
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "gender": "M",
        "stock": 90,
        "sizes": [
          "M",
          "L",
          "M"
        ],
        "images": [
          "http://dummyimage.com/178x100.png/ff4444/ffffff",
          "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/233x100.png/dddddd/000000"
        ]
      }, {
        "title": "suspendisse",
        "price": 12.93,
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "gender": "F",
        "stock": 64,
        "sizes": [
          "S",
          "M",
          "L"
        ],
        "images": [
          "http://dummyimage.com/140x100.png/cc0000/ffffff",
          "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/148x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "at nibh in",
        "price": 40.95,
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "gender": "F",
        "stock": 18,
        "sizes": [
          "XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/144x100.png/ff4444/ffffff",
          "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/208x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "elementum pellentesque",
        "price": 24.96,
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "gender": "F",
        "stock": 57,
        "sizes": [
          "L",
          "XS",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/211x100.png/dddddd/000000",
          "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/131x100.png/dddddd/000000"
        ]
      }, {
        "title": "in tempor",
        "price": 49.71,
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "gender": "F",
        "stock": 88,
        "sizes": [
          "M",
          "M",
          "L"
        ],
        "images": [
          "http://dummyimage.com/246x100.png/dddddd/000000",
          "http://dummyimage.com/179x100.png/dddddd/000000",
          "http://dummyimage.com/108x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "gravida sem praesent",
        "price": 21.98,
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "gender": "M",
        "stock": 19,
        "sizes": [
          "S",
          "2XL",
          "2XL"
        ],
        "images": [
          "http://dummyimage.com/112x100.png/cc0000/ffffff",
          "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/136x100.png/dddddd/000000"
        ]
      }, {
        "title": "nisi nam",
        "price": 18.04,
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "gender": "M",
        "stock": 70,
        "sizes": [
          "L",
          "XL",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/130x100.png/ff4444/ffffff",
          "http://dummyimage.com/188x100.png/dddddd/000000"
        ]
      }, {
        "title": "ut volutpat po",
        "price": 42.68,
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "gender": "F",
        "stock": 93,
        "sizes": [
          "3XL",
          "L",
          "M"
        ],
        "images": [
          "http://dummyimage.com/171x100.png/dddddd/000000",
          "http://dummyimage.com/228x100.png/cc0000/ffffff",
          "http://dummyimage.com/166x100.png/dddddd/000000"
        ]
      }, {
        "title": "nulla justo",
        "price": 25.53,
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "gender": "M",
        "stock": 74,
        "sizes": [
          "XS",
          "M",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/129x100.png/cc0000/ffffff",
          "http://dummyimage.com/245x100.png/dddddd/000000",
          "http://dummyimage.com/114x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "est lacinia",
        "price": 47.07,
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "gender": "M",
        "stock": 8,
        "sizes": [
          "2XL",
          "XS",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/145x100.png/cc0000/ffffff",
          "http://dummyimage.com/107x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "vulputate",
        "price": 22.41,
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "gender": "M",
        "stock": 19,
        "sizes": [
          "3XL",
          "L",
          "XL"
        ],
        "images": [
          "http://dummyimage.com/136x100.png/ff4444/ffffff",
          "http://dummyimage.com/176x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/199x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "amet",
        "price": 31.85,
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "gender": "F",
        "stock": 73,
        "sizes": [
          "3XL",
          "M",
          "L"
        ],
        "images": [
          "http://dummyimage.com/230x100.png/ff4444/ffffff",
          "http://dummyimage.com/231x100.png/ff4444/ffffff",
          "http://dummyimage.com/202x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "cursus urna ut",
        "price": 59.29,
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "gender": "M",
        "stock": 59,
        "sizes": [
          "3XL",
          "M",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/230x100.png/dddddd/000000",
          "http://dummyimage.com/236x100.png/cc0000/ffffff",
          "http://dummyimage.com/162x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "quis odio",
        "price": 28.5,
        "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "gender": "F",
        "stock": 11,
        "sizes": [
          "L",
          "L",
          "M"
        ],
        "images": [
          "http://dummyimage.com/126x100.png/ff4444/ffffff",
          "http://dummyimage.com/176x100.png/cc0000/ffffff",
          "http://dummyimage.com/191x100.png/ff4444/ffffff"
        ]
      }, {
        "title": "posuere",
        "price": 65.98,
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "gender": "F",
        "stock": 93,
        "sizes": [
          "L",
          "2XL",
          "M"
        ],
        "images": [
          "http://dummyimage.com/224x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/157x100.png/ff4444/ffffff",
          "http://dummyimage.com/176x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "morbi",
        "price": 69.01,
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "gender": "F",
        "stock": 3,
        "sizes": [
          "XL",
          "M",
          "2XL"
        ],
        "images": [
          "http://dummyimage.com/189x100.png/cc0000/ffffff",
          "http://dummyimage.com/209x100.png/dddddd/000000",
          "http://dummyimage.com/220x100.png/5fa2dd/ffffff"
        ]
      }, {
        "title": "tempus semper est",
        "price": 37.47,
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "gender": "M",
        "stock": 16,
        "sizes": [
          "XS",
          "M",
          "M"
        ],
        "images": [
          "http://dummyimage.com/144x100.png/cc0000/ffffff",
          "http://dummyimage.com/200x100.png/dddddd/000000",
          "http://dummyimage.com/202x100.png/dddddd/000000"
        ]
      }, {
        "title": "auctor gravida sem",
        "price": 32.47,
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "gender": "F",
        "stock": 49,
        "sizes": [
          "M",
          "3XL",
          "M"
        ],
        "images": [
          "http://dummyimage.com/122x100.png/dddddd/000000",
          "http://dummyimage.com/177x100.png/ff4444/ffffff",
          "http://dummyimage.com/147x100.png/dddddd/000000"
        ]
      }, {
        "title": "amet justo",
        "price": 43.42,
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "gender": "F",
        "stock": 99,
        "sizes": [
          "XL",
          "XS",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/198x100.png/cc0000/ffffff",
          "http://dummyimage.com/195x100.png/cc0000/ffffff",
          "http://dummyimage.com/133x100.png/dddddd/000000"
        ]
      }, {
        "title": "rutrum at",
        "price": 55.12,
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "gender": "F",
        "stock": 40,
        "sizes": [
          "2XL",
          "3XL",
          "L"
        ],
        "images": [
          "http://dummyimage.com/229x100.png/ff4444/ffffff",
          "http://dummyimage.com/204x100.png/cc0000/ffffff",
          "http://dummyimage.com/142x100.png/dddddd/000000"
        ]
      }, {
        "title": "justo",
        "price": 53.32,
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "gender": "F",
        "stock": 73,
        "sizes": [
          "XS",
          "XS",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/217x100.png/ff4444/ffffff",
          "http://dummyimage.com/115x100.png/dddddd/000000",
          "http://dummyimage.com/232x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "eu mi nulla",
        "price": 36.42,
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "gender": "M",
        "stock": 1,
        "sizes": [
          "3XL",
          "XL",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/146x100.png/cc0000/ffffff",
          "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
          "http://dummyimage.com/172x100.png/cc0000/ffffff"
        ]
      }, {
        "title": "non velit",
        "price": 64.59,
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "gender": "F",
        "stock": 52,
        "sizes": [
          "XL",
          "XL",
          "XS"
        ],
        "images": [
          "http://dummyimage.com/190x100.png/dddddd/000000",
          "http://dummyimage.com/183x100.png/dddddd/000000",
          "http://dummyimage.com/200x100.png/5fa2dd/ffffff"
        ]
      }
    ]
}