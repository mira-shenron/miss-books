'use strict';

export const searchService = {
    getResultsBySearchStr,
}

function getResultsBySearchStr(searchStr) {
    var searchResPromise = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchStr}`);
    return searchResPromise;
    // return Promise.resolve(result.items);
}


const result = {
    "kind": "books#volumes",
    "totalItems": 462,
    "items": [
        {
            "kind": "books#volume",
            "id": "nBuA0hmspdMC",
            "etag": "OZG86jBBoxY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
                "authors": [],
                "publisher": "Addison-Wesley",
                "publishedDate": "2012-11-26",
                "description": "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
                "industryIdentifiers": [],
                "readingModes": {},
                "pageCount": 240,
                "printType": "BOOK",
                "categories": [],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.7.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
            },
            "saleInfo": {},
            "accessInfo": {},
            "searchInfo": {}
        },
        {
            "kind": "books#volume",
            "id": "wVDCjwEACAAJ",
            "etag": "fJeo67nKFEI",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/wVDCjwEACAAJ",
            "volumeInfo": {
                "title": "Effective Javascript",
                "subtitle": "68 Specific Ways to Harness the Power of Javascript",
                "authors": [
                    "David Herman"
                ],
                "publishedDate": "2016-03-08",
                "description": "\"It's uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You'll find when you finish the book that you've gained a strong and comprehensive sense of mastery.\"-Paul Irish, developer advocate, Google Chrome \"This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It's one of the few books on JS that I'll recommend without hesitation.\"-Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language's flexible, expressive features and how to avoid its pitfalls. No matter how long you've been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma's JavaScript standardization committee, illuminates the language's inner workings as never before-helping you take full advantage of JavaScript's expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you'll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You'll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript's functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript's unique \"run-to-completion\" approach to concurrency",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1530427223"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781530427222"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 228,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_Javascript.html?hl=&id=wVDCjwEACAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=wVDCjwEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&quot;-Paul Irish, developer advocate, Google Chrome &quot;This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It&#39;s one of the few books on JS that I&#39;ll recommend without hesitation."
            }
        },
        {
            "kind": "books#volume",
            "id": "lT2g_y4VYx0C",
            "etag": "VamW5HmwS9w",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/lT2g_y4VYx0C",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "authors": [
                    "Devid Herman"
                ],
                "publisher": "翔泳社",
                "publishedDate": "2013-04-13",
                "description": "JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場!微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど!」は、伊達じゃない。 ※本電子書籍は同名出版物を底本とし作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9784798131528"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "4798131520"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 202,
                "printType": "BOOK",
                "categories": [
                    "Technology & Engineering"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "4.1329.533.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ja",
                "previewLink": "http://books.google.com/books?id=lT2g_y4VYx0C&pg=PT7&dq=effective+javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=lT2g_y4VYx0C&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=lT2g_y4VYx0C"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-epub.acsm?id=lT2g_y4VYx0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-pdf.acsm?id=lT2g_y4VYx0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=lT2g_y4VYx0C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "後者は、<b>JavaScript</b>のように柔軟で表現力の高い言語では、とくに洞察力が求め<br>\nられる課題であろう。これは<b>JavaScript</b>の実践に関する本だ。入門書ではない。<br>\n読者には、プログラミング一般、とくに<b>JavaScript</b>について、ある程度は馴染み<br>\nの&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "gg20DgAAQBAJ",
            "etag": "kepEeudbS58",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/gg20DgAAQBAJ",
            "volumeInfo": {
                "title": "Effective JavaScript 中文版(電子書)",
                "subtitle": "",
                "authors": [
                    "David Herman"
                ],
                "publisher": "碁峰資訊股份有限公司",
                "publishedDate": "2013-07-29",
                "description": "駕馭 JavaScript 的 68 個具體作法 JavaScript 發明人 Brendan Eich 專文推薦 「少有程式語言達人能夠像 David 這樣寫出流暢通順且措辭淺白的文字，透過其深邃的洞察力，他以引人入勝的方式帶我們逐一探索 JavaScript 的語法和語意，一路提醒我們要特別注意的事項，並以實際的使用案例來補充說明，步調和緩而舒適。讀完此書後，你會對 JavaScript 有更穩健且透徹的理解。」 —Paul Irish，Google Chrome 的開發人員大使 「這本書並不適合那些尋找捷徑的人，這是刻苦獲得的經驗所提煉出來的精華。它是少數我會毫不猶豫推薦的 JavaScript 書籍。」 —Alex Russell，TC39 成員、Google 軟體工程師 為了真正精通 JavaScript，你必須知道如何有效運用這個語言富有彈性又具表達能力的特色，以及知道如何避免其中常見的陷阱。不管你已經撰寫了多久的 JavaScript 程式碼，Effective JavaScript 都能增進你對這個強大語言的理解，讓你能夠建置更容易預測、更可靠且更容易維護的程式。 作者 David Herman 具有 Ecma 的 JavaScript 標準化委員會數年的工作經驗，他以前所未見的深度闡明這個語言的內部運作原理，幫助你完全掌握 JavaScript 強大的表達能力。立基於 JavaScript 最新的幾個版本，本書提供經過充分驗證的技巧以及最佳實務做法，協助你為未來的開發工作做好準備。 Effective JavaScript 是由 68 個經過驗證、能夠幫助你寫出更好的 JavaScript 程式碼的具體作法所構成，並輔以實例來闡述說明。你會學到如何為每個專案挑選適當的程式寫作風格、管理無法預料的問題，並以更良好的方式來處理 JavaScript 程式設計的各個面向，諸如資料結構或共時性（concurrency）。關鍵的特色包括： ■ 以更好的方式來使用基於原型（prototype）的物件導向程式設計 ■ 使用陣列與字典（dictionary）物件時可能遭遇到的細微問題以及它們的解法 ■ 對 JavaScript 函式與變數範疇（variable scoping）語意的精確且務實的解說 ■ 實用的 JavaScript 程式設計模式與慣用語法，例如選項物件（options objects）及方法鏈串（method chaining） ■ 深入介紹 JavaScript 獨特的「run-to-completion」共時模型 David Herman，Mozilla Research 的資深研究員。他是 Ecma TC39 的成員，這個委員會負責 JavaScript 的標準化工作。他擁有 Grinnell College 的電腦科學學士學位，以及 Northeastern University 的電腦科學碩士與博士學位。 #碁峰資訊 GOTOP Information Inc.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9789862768921"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "9862768924"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 244,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "zh-CN",
                "previewLink": "http://books.google.com/books?id=gg20DgAAQBAJ&pg=PR3&dq=effective+javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=gg20DgAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8.html?hl=&id=gg20DgAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8-sample-pdf.acsm?id=gg20DgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=gg20DgAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "<b>Effective JavaScript</b> 的各界好評「完全符合 <b>Effective</b> Software Development 系列<br>\n程式設計書籍的高標準,對從事專業 <b>JavaScript</b> 程式設計工作的任何人來說,Dave <br>\nHerman 的 <b>Effective JavaScript</b> 都是必備的讀物。此書對於 <b>JavaScript</b> 內部運作<br>\n原理&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "yg0fBAAAQBAJ",
            "etag": "ZiNU147rE+4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/yg0fBAAAQBAJ",
            "volumeInfo": {
                "title": "Effective JavaScript　JavaScriptを使うときに知っておきたい68の冴えたやり方",
                "authors": [
                    "Devid Herman"
                ],
                "publisher": "翔泳社",
                "publishedDate": "2013-02-18",
                "description": "JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場！微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど！」は、伊達じゃない。",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9784798131115"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "4798131113"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 202,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "4.487.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ja",
                "previewLink": "http://books.google.com/books?id=yg0fBAAAQBAJ&pg=PA91&dq=effective+javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=yg0fBAAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript_JavaScript%E3%82%92%E4%BD%BF%E3%81%86.html?hl=&id=yg0fBAAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=yg0fBAAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "項目34 メソッドをプロトタイプに格納しよう <b>JavaScript</b>でも、プロトタイプなし<br>\nでプログラミングすることは完全に可能である。項目30 のUserクラスは、その<br>\nプロトタイプで何も特別な定義をしなくても、次のように実装できそうだ。"
            }
        },
    ]
}

