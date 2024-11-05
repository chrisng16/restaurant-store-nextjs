const data = [
    {
        "name": "Cơm Gà Xào Teriyaki Sauce",
        "desc": "Chicken teriyaki over rice.",
        "category": "Rice Plates",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "54"
    },
    {
        "name": "Phở Bò Viên",
        "desc": "Rice noodle soup with beef balls.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "10",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bún Thịt Nướng Chả Giò",
        "desc": "BBQ pork and egg roll with thin noodle.",
        "category": "Chef's Specials",
        "price": 1695,
        "isAvailable": true,
        "menuNum": "30"
    },
    {
        "name": "Hủ Tiếu Dai Thập Cẩm (Khô, Nước)",
        "desc": "Combination big clear noodle soup with shrimp, chicken, beef balls pork and squid.",
        "category": "Chef's Specials",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "25",
        "optionList": [
            {
                "name": "Style",
                "isOptional": false,
                "options": [
                    {
                        "name": "Dry",
                        "unitPrice": 0,
                        "optionID": "9"
                    },
                    {
                        "name": "Normal",
                        "unitPrice": 0,
                        "optionID": "10"
                    }
                ]
            }
        ]
    },
    {
        "name": "Gỏi Gà",
        "desc": "Vietnamese cabbage salad with chicken.",
        "category": "Party Trays",
        "price": 4500,
        "isAvailable": true,
        "menuNum": "12P"
    },
    {
        "name": "Sinh Tố Xoài Trân Châu",
        "desc": "Mango smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B19"
    },
    {
        "name": "Cơm Sườn Nướng Trứng Ốp La",
        "desc": "BBQ pork chop and fried egg with rice.",
        "category": "Rice Plates",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "51"
    },
    {
        "name": "Phở Áp Chảo Mềm (Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Chow fun with stir fried meat and vegetables (choice of beef, chicken or seafood).",
        "category": "Chow Fun and Chow Mein",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "39",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sinh Tố Café Trân Châu",
        "desc": "Coffee smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B26"
    },
    {
        "name": "Sương Sáo, Hột É",
        "desc": "Grass jelly, basil seeds with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C10"
    },
    {
        "name": "Phở Tái, Sách",
        "desc": "Rice noodle soup with rare beef and tripe.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "9",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bún Thang Thiên Long",
        "desc": "Thin noodle soup with chicken meat pork and eggs.",
        "category": "Chicken Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "19",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Thin Noodles",
                        "unitPrice": 0,
                        "optionID": "6"
                    },
                    {
                        "name": "Thick Noodles",
                        "unitPrice": 0,
                        "optionID": "5"
                    }
                ]
            }
        ]
    },
    {
        "name": "Mì Xào Chay",
        "desc": "Chow mein with stir fried vegetables.",
        "category": "Vegeterian Dishes",
        "price": 1600,
        "isAvailable": true,
        "menuNum": "58"
    },
    {
        "name": "Miến Gà Lòng",
        "desc": "Clear noodle soup with chicken meat and liver.",
        "category": "Chicken Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "21",
        "optionList": [
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Upgrade to All Dark Meat",
                        "unitPrice": 150,
                        "optionID": "14"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bò Kho (Cơm, Mì, Hoặc Hủ Tiếu)",
        "desc": "Beef stew with choice of rice, egg noodles, or noodles.",
        "category": "Chef's Specials",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "26",
        "optionList": [
            {
                "name": "Side Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Rice",
                        "unitPrice": 0,
                        "optionID": "20"
                    }
                ]
            }
        ]
    },
    {
        "name": "Chè Sương Sáo Hạt Lựu, Bánh Lọt",
        "desc": "Grass jelly, red tapioca panda jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C5"
    },
    {
        "name": "Phở Áp Chảo Chay Dòn",
        "desc": "Crispy chow fun with stir fried vegetables.",
        "category": "Vegeterian Dishes",
        "price": 1695,
        "isAvailable": true,
        "menuNum": "60"
    },
    {
        "name": "Bún Bò Huế",
        "desc": "Hue style thin noodle soup with beef and pork blood.",
        "category": "Chef's Specials",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "34",
        "optionList": [
            {
                "name": "Spice Level",
                "isOptional": false,
                "options": [
                    {
                        "name": "Extra Spicy",
                        "unitPrice": 0,
                        "optionID": "15"
                    },
                    {
                        "name": "Regular",
                        "unitPrice": 0,
                        "optionID": "16"
                    },
                    {
                        "name": "Mild",
                        "unitPrice": 0,
                        "optionID": "17"
                    },
                    {
                        "name": "No Spice",
                        "unitPrice": 0,
                        "optionID": "18"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Pork Blood",
                        "unitPrice": 300,
                        "optionID": "19"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cháo Bò",
        "desc": "Congee with beef.",
        "category": "Congees",
        "price": 1525,
        "isAvailable": true,
        "menuNum": "63"
    },
    {
        "name": "Cơm Gà Nướng",
        "desc": "BBQ chicken and fried egg with rice.",
        "category": "Rice Plates",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "46"
    },
    {
        "name": "Bơ Dằm, Sầu Riêng",
        "desc": "Mashed avocado durian.",
        "category": "Sweet Dessert",
        "price": 850,
        "isAvailable": true,
        "menuNum": "C12"
    },
    {
        "name": "Hủ Tiếu Xào Pad Thai",
        "desc": "Pad thai stir fried noodle with prawns, chicken, egg, ground peanut, tofu and bean sprout.",
        "category": "Chow Fun and Chow Mein",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "41"
    },
    {
        "name": "Bơ Dằm",
        "desc": "Mashed avocado, coffee jelly rainbow jelly.",
        "category": "Sweet Dessert",
        "price": 750,
        "isAvailable": true,
        "menuNum": "C11"
    },
    {
        "name": "Sườn Heo Miếng",
        "desc": "One Piece of Pork Chop",
        "category": "Extras",
        "price": 625,
        "isAvailable": true,
        "menuNum": "E4"
    },
    {
        "name": "Mì/Hủ Tiếu Hoành Thánh",
        "desc": "Shrimp Pork wonton noodle soup with rice or egg noodle.",
        "category": "Chicken Noodle Soups",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "18",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Dặc Biệt Xe Lửa (Tái, Nam, Gân, Sách)",
        "desc": "Large combo rice noodle soup with rare beef, flank tendon and tripe.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "1",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sinh Tố Bơ Trân Châu",
        "desc": "Avocado smoothie with pearls.",
        "category": "Smoothies",
        "price": 695,
        "isAvailable": true,
        "menuNum": "B18"
    },
    {
        "name": "Tray Thịt Nướng (4 lbs)",
        "desc": "Grilled Pork (4 lbs).",
        "category": "Party Trays",
        "price": 5900,
        "isAvailable": true,
        "menuNum": "9P"
    },
    {
        "name": "Mì Xào Dòn (Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Crispy chow mein with stir fried meat and vegetables (choice of beef, chicken or seafood).",
        "category": "Chow Fun and Chow Mein",
        "price": 1725,
        "isAvailable": true,
        "menuNum": "44",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Tray Gà Luộc (2 Con)",
        "desc": "Boiled hen (2).",
        "category": "Party Trays",
        "price": 5700,
        "isAvailable": true,
        "menuNum": "2P"
    },
    {
        "name": "Chè Đậu Đỏ, Sương Sáo, Bánh Lọt",
        "desc": "Red bean, grass jelly, pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C6"
    },
    {
        "name": "Sinh Tố Mít Trân Châu",
        "desc": "Jackfruit smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B21"
    },
    {
        "name": "Chả Giò (2 Rolls)",
        "desc": "Fried Vietnamese egg roll (2).",
        "category": "Appetizers",
        "price": 695,
        "isAvailable": true,
        "menuNum": "A2"
    },
    {
        "name": "Chè Đậu Đỏ, Bánh Lọt",
        "desc": "Red bean, pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C7"
    },
    {
        "name": "Mì Xào Mềm (Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Chow mein with stir fried meat and vegetables (choice of beef, chicken, or seafood).",
        "category": "Chow Fun and Chow Mein",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "43",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cơm Chiên Gà, Cá Mặn",
        "desc": "Chicken and salted fish fried rice.",
        "category": "Rice Plates",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "53"
    },
    {
        "name": "Chè Hạt Lựu, Đậu Xanh, Bánh Lọt",
        "desc": "Red tapioca, green bean pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C4"
    },
    {
        "name": "Cơm Xào Chay",
        "desc": "Stir fried vegetables over rice.",
        "category": "Vegeterian Dishes",
        "price": 1600,
        "isAvailable": true,
        "menuNum": "57"
    },
    {
        "name": "Gà Luộc Thiên Long (1/2 Con)",
        "desc": "Steam chicken (half).",
        "category": "Appetizers",
        "price": 1795,
        "isAvailable": true,
        "menuNum": "A4"
    },
    {
        "name": "Soda Xí Muội",
        "desc": "Salty plum.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B2"
    },
    {
        "name": "Cơm Sườn Bò Đại Hàn Trứng Ốp La",
        "desc": "BBQ beef rib and fried egg with rice.",
        "category": "Rice Plates",
        "price": 1750,
        "isAvailable": true,
        "menuNum": "52"
    },
    {
        "name": "Tray Cơm Chiên Gà, Cá Mặn",
        "desc": "Fried rice with chicken and salted fish.",
        "category": "Party Trays",
        "price": 4500,
        "isAvailable": true,
        "menuNum": "11P"
    },
    {
        "name": "Lẩu Thiên Long",
        "desc": "A Hot Pot with Seafood and Vegetables (choice of thin noodles, egg noodles, or rice).",
        "category": "Special Combos (For 2 Persons)",
        "price": 3495,
        "isAvailable": true,
        "menuNum": "38",
        "optionList": [
            {
                "name": "Side Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Rice",
                        "unitPrice": 0,
                        "optionID": "20"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cơm Chiên Dương Châu",
        "desc": "Combination fried rice with Chinese sausage and shrimp.",
        "category": "Party Trays",
        "price": 4500,
        "isAvailable": true,
        "menuNum": "5P"
    },
    {
        "name": "Bánh Xèo Thiên Long",
        "desc": "Vietnamese pancake with shrimp pork and bean sprouts.",
        "category": "Appetizers",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "A7"
    },
    {
        "name": "Nui Xào (Bò, Gà, Hoặc, Đồ Biển)",
        "desc": "Tomato pasta with stir fried (choice of beef, chicken or seafood).",
        "category": "Chow Fun and Chow Mein",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "42",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bún Chả Hà Nội",
        "desc": "BBQ pork and pork patties with thin noodle.",
        "category": "Chef's Specials",
        "price": 1695,
        "isAvailable": true,
        "menuNum": "31"
    },
    {
        "name": "Hủ Tiếu Thập Cẩm (Khô, Nước)",
        "desc": "Combination rice noodle soup with shrimp chicken, beef balls pork and squid.",
        "category": "Chef's Specials",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "24",
        "optionList": [
            {
                "name": "Style",
                "isOptional": false,
                "options": [
                    {
                        "name": "Dry",
                        "unitPrice": 0,
                        "optionID": "9"
                    },
                    {
                        "name": "Normal",
                        "unitPrice": 0,
                        "optionID": "10"
                    }
                ]
            },
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sinh Tố Khoai Môn Trân Châu",
        "desc": "Taro smoothie withpearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B23"
    },
    {
        "name": "Cơm Đỏ",
        "desc": "A bowl of red rice (Tomato rice)",
        "category": "Extras",
        "price": 350,
        "isAvailable": true,
        "menuNum": "E2"
    },
    {
        "name": "Hủ Tiếu Cá Gà",
        "desc": "Fresh Rice Noodle Soup with fish and chicken.",
        "category": "Chef's Specials",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "27",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Áp Chảo Bò Nước",
        "desc": "Rice noodle soup with stir fried beef and vegetables.",
        "category": "Beef Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "16",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Trà Thái Trân Châu",
        "desc": "Thai tea with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B25"
    },
    {
        "name": "Dừa Tươi",
        "desc": "Fresh coconut juice.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B13"
    },
    {
        "name": "Nui Xào (Chay, Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Tomato pasta (choice of vegetarian, beef, chicken, or seafood).",
        "category": "Party Trays",
        "price": 4400,
        "isAvailable": true,
        "menuNum": "7P",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Rau & Đậu Hũ",
        "desc": "Rice noodle soup with vegetables and tofu.",
        "category": "Chef's Specials",
        "price": 1625,
        "isAvailable": true,
        "menuNum": "23",
        "optionList": [
            {
                "name": "Broth Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Veggies Broth",
                        "unitPrice": 0,
                        "optionID": "21"
                    },
                    {
                        "name": "Chicken Broth",
                        "unitPrice": 0,
                        "optionID": "22"
                    }
                ]
            },
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Chín, Nạm, Vè",
        "desc": "Rice noodle soup with well-done brisket and hard flank.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "5",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Chè Đậu Xanh, Sương Sáo, Bánh Lọt",
        "desc": "Mung bean, grass jelly pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C8"
    },
    {
        "name": "Cơm Trắng",
        "desc": "A bowl of white rice",
        "category": "Extras",
        "price": 300,
        "isAvailable": true,
        "menuNum": "E1"
    },
    {
        "name": "Cơm Siu Siu",
        "desc": "A bowl of chicken-flavored rice",
        "category": "Extras",
        "price": 350,
        "isAvailable": true,
        "menuNum": "E3"
    },
    {
        "name": "Phở Áp Chảo Gà Nước",
        "desc": "Rice noodle soup with stir fried chicken and vegetables.",
        "category": "Beef Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "15",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bánh Bột Chiên Trứng",
        "desc": "Fried flour cake with egg.",
        "category": "Appetizers",
        "price": 1195,
        "isAvailable": true,
        "menuNum": "A3"
    },
    {
        "name": "Sinh Tố Sầu Riêng",
        "desc": "Durian smoothie with pearls.",
        "category": "Smoothies",
        "price": 695,
        "isAvailable": true,
        "menuNum": "B16"
    },
    {
        "name": "Gỏi Cuốn (2 Rolls)",
        "desc": "Fresh spring roll with grill pork and shrimp (2).",
        "category": "Appetizers",
        "price": 750,
        "isAvailable": true,
        "menuNum": "A1"
    },
    {
        "name": "Bò Xào Hành Hương Cuốn Bánh Tráng",
        "desc": "Stir-fried beef and onions served with thin noodles, vegetables, and rice paper.",
        "category": "Special Combos (For 2 Persons)",
        "price": 3495,
        "isAvailable": true,
        "menuNum": "36A"
    },
    {
        "name": "Bún Chả Cá Lã Vọng",
        "desc": "Grilled fish with thin noodle and vegetables.",
        "category": "Special Combos (For 2 Persons)",
        "price": 3495,
        "isAvailable": true,
        "menuNum": "36B",
        "optionList": [
            {
                "name": "Style",
                "isOptional": false,
                "options": [
                    {
                        "name": "Half fish & half beef",
                        "unitPrice": 0,
                        "optionID": "24"
                    },
                    {
                        "name": "Fish Only",
                        "unitPrice": 0,
                        "optionID": "25"
                    },
                    {
                        "name": "Half fish & half BBQ pork",
                        "unitPrice": 0,
                        "optionID": "26"
                    }
                ]
            },
            {
                "name": "Additional Sides",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rice Papers",
                        "unitPrice": 300,
                        "optionID": "27"
                    },
                    {
                        "name": "Add Noodles",
                        "unitPrice": 300,
                        "optionID": "28"
                    },
                    {
                        "name": "Add Veggies",
                        "unitPrice": 300,
                        "optionID": "29"
                    },
                    {
                        "name": "Add Veggies & Noodles",
                        "unitPrice": 500,
                        "optionID": "30"
                    }
                ]
            }
        ]
    },
    {
        "name": "Thịt Nướng (1 lb)",
        "desc": "BBQ Pork (1 lb)",
        "category": "Extras",
        "price": 2000,
        "isAvailable": true,
        "menuNum": "E6"
    },
    {
        "name": "Phở Tái, Nạm, Gầu, Gân",
        "desc": "Rice noodle soup with rare beef, flank ,plate, tendon.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "14",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cháo Gà",
        "desc": "Congee with chicken.",
        "category": "Congees",
        "price": 1525,
        "isAvailable": true,
        "menuNum": "62"
    },
    {
        "name": "Bún Riêu Ốc",
        "desc": "Thin noodle soup with ground crab and snail.",
        "category": "Chef's Specials",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "35",
        "optionList": [
            {
                "name": "Style",
                "isOptional": false,
                "options": [
                    {
                        "name": "No Snail",
                        "unitPrice": 0,
                        "optionID": "31"
                    },
                    {
                        "name": "With Snail",
                        "unitPrice": 0,
                        "optionID": "32"
                    }
                ]
            },
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Thin Noodles",
                        "unitPrice": 0,
                        "optionID": "6"
                    },
                    {
                        "name": "Thick Noodles",
                        "unitPrice": 0,
                        "optionID": "5"
                    }
                ]
            }
        ]
    },
    {
        "name": "Café Sữa Đá",
        "desc": "Ice French coffee with condensed milk.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B11"
    },
    {
        "name": "Rau bún cho Chả cá",
        "desc": "Veggie & Noodles for Grilled Fish",
        "category": "Extras",
        "price": 500,
        "isAvailable": true,
        "menuNum": "E7"
    },
    {
        "name": "Cháo Thập Cảm (Cá, Tôm & Mực)",
        "desc": "Combination congee (fish, shrimp and squid).",
        "category": "Congees",
        "price": 1525,
        "isAvailable": true,
        "menuNum": "64"
    },
    {
        "name": "Cơm Tôm Thịt Nướng Trứng Ốp La",
        "desc": "BBQ pork, shrimp and fried egg with rice.",
        "category": "Rice Plates",
        "price": 1725,
        "isAvailable": true,
        "menuNum": "48"
    },
    {
        "name": "Nui Xào Bò Lúc Lắc",
        "desc": "Tomato pasta with filet mignon shaking beef.",
        "category": "Chow Fun and Chow Mein",
        "price": 1795,
        "isAvailable": true,
        "menuNum": "45"
    },
    {
        "name": "Phở Áp Chảo Chay Mềm",
        "desc": "Chow fun with stir fried vegetables.",
        "category": "Vegeterian Dishes",
        "price": 1600,
        "isAvailable": true,
        "menuNum": "59"
    },
    {
        "name": "Chè House Special",
        "desc": "Young coconut, pandan jelly longan, bad seeds.",
        "category": "Sweet Dessert",
        "price": 750,
        "isAvailable": true,
        "menuNum": "C1"
    },
    {
        "name": "Bún Chả Cá Thịt Nướng",
        "desc": "Grilled fish & BBQ pork over thin noodles & veggies.",
        "category": "Chef's Specials",
        "price": 1795,
        "isAvailable": true,
        "menuNum": "32",
        "optionList": [
            {
                "name": "Style",
                "isOptional": false,
                "options": [
                    {
                        "name": "Fish Only",
                        "unitPrice": 0,
                        "optionID": "25"
                    },
                    {
                        "name": "Half fish & half BBQ pork",
                        "unitPrice": 0,
                        "optionID": "26"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Tái, Gân",
        "desc": "Rice noodle soup with rare beef and tendon.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "8",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Gà Dai",
        "desc": "Rice noodle soup with hen chicken .",
        "category": "Chicken Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "17",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Upgrade to All Dark Meat",
                        "unitPrice": 150,
                        "optionID": "14"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Hoành Thánh Chiên (10)",
        "desc": "Fried wonton (10).",
        "category": "Appetizers",
        "price": 1150,
        "isAvailable": true,
        "menuNum": "A6"
    },
    {
        "name": "Gỏi Đu Đủ Khô Bò",
        "desc": "Vietnamese papaya salar with beef jerky.",
        "category": "Appetizers",
        "price": 1150,
        "isAvailable": true,
        "menuNum": "A5"
    },
    {
        "name": "Phở Chín, Nạm, Gân",
        "desc": "Rice noodle soup with well-done brisket, flank and tendon.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "4",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sườn Bò Miếng",
        "desc": "One piece of BBQ beef rib",
        "category": "Extras",
        "price": 695,
        "isAvailable": true,
        "menuNum": "E5"
    },
    {
        "name": "Bún Bò Xào",
        "desc": "Stir fried beef and peanuts over thin noodle.",
        "category": "Chef's Specials",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "29"
    },
    {
        "name": "Tàu Hũ Ki",
        "desc": "Fried shrimp cake",
        "category": "Extras",
        "price": 595,
        "isAvailable": true,
        "menuNum": "E8"
    },
    {
        "name": "Hũ Soup 16oz",
        "desc": "16oz cup of broth",
        "category": "Extras",
        "price": 395,
        "isAvailable": true,
        "menuNum": "E9",
        "optionList": [
            {
                "name": "Broth Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Beef Broth",
                        "unitPrice": 0,
                        "optionID": "23"
                    },
                    {
                        "name": "Chicken Broth",
                        "unitPrice": 0,
                        "optionID": "22"
                    }
                ]
            }
        ]
    },
    {
        "name": "Hũ Soup 32oz",
        "desc": "32oz cup of broth",
        "category": "Extras",
        "price": 750,
        "isAvailable": true,
        "menuNum": "E10",
        "optionList": [
            {
                "name": "Broth Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Beef Broth",
                        "unitPrice": 0,
                        "optionID": "23"
                    },
                    {
                        "name": "Chicken Broth",
                        "unitPrice": 0,
                        "optionID": "22"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cơm Tấm Đặc Biệt",
        "desc": "Pork chop shredded park, fried shrimp cake and steamed egg with broken rice.",
        "category": "Rice Plates",
        "price": 1795,
        "isAvailable": true,
        "menuNum": "56"
    },
    {
        "name": "Sinh Tố Mãng Cầu Trân Châu",
        "desc": "Sour sop smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B20"
    },
    {
        "name": "Cháo Cá",
        "desc": "Congee with filet fish.",
        "category": "Congees",
        "price": 1525,
        "isAvailable": true,
        "menuNum": "61"
    },
    {
        "name": "Nước Uống Chai",
        "desc": "Bottle of water.",
        "category": "Beverages",
        "price": 195,
        "isAvailable": true,
        "menuNum": "B9"
    },
    {
        "name": "Sinh Tố Dâu Trân Châu",
        "desc": "Strawberry smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B17"
    },
    {
        "name": "Pepsi, Coke, 7 Up",
        "desc": "Soft Drinks",
        "category": "Beverages",
        "price": 195,
        "isAvailable": true,
        "menuNum": "B8"
    },
    {
        "name": "Tray Chả Cá",
        "desc": "Grilled fish with dill and onions.",
        "category": "Party Trays",
        "price": 5700,
        "isAvailable": true,
        "menuNum": "8P",
        "optionList": [
            {
                "name": "Additional Sides",
                "isOptional": true,
                "options": [
                    {
                        "name": "Veggies & Noodles (Tray)",
                        "unitPrice": 1500,
                        "optionID": "33"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sinh Tố Dưa Xanh Trân Châu",
        "desc": "Honeydew smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B22"
    },
    {
        "name": "Phở Đồ Biển Chua Cay (Tôm, Cá, Mực)",
        "desc": "Spicy and sour seafood noodle soup.",
        "category": "Chef's Specials",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "22",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sữa Đậu Nành",
        "desc": "Soy bean milk.",
        "category": "Beverages",
        "price": 350,
        "isAvailable": true,
        "menuNum": "B7"
    },
    {
        "name": "Bún Tôm Thịt Nướng",
        "desc": "BBQ pork and shrimp over thin noodle.",
        "category": "Chef's Specials",
        "price": 1695,
        "isAvailable": true,
        "menuNum": "28"
    },
    {
        "name": "Phở Không Thịt",
        "desc": "Rice noodle soup (no meat).",
        "category": "Beef Noodle Soups",
        "price": 1095,
        "isAvailable": true,
        "menuNum": "13",
        "optionList": [
            {
                "name": "Broth Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Beef Broth",
                        "unitPrice": 0,
                        "optionID": "23"
                    },
                    {
                        "name": "Chicken Broth",
                        "unitPrice": 0,
                        "optionID": "22"
                    }
                ]
            },
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Áp Chảo Dòn (Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Crispy chow fun with stir fried meat and vegetables (choice of beef, chicken, or seafood.",
        "category": "Chow Fun and Chow Mein",
        "price": 1725,
        "isAvailable": true,
        "menuNum": "40",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Tái Bằm Béo",
        "desc": "Rice noodle soup with ground rare beef.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "7",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cơm Bò Lúc Lắc",
        "desc": "Vietnamese shaking beef with red or white rice.",
        "category": "Rice Plates",
        "price": 1795,
        "isAvailable": true,
        "menuNum": "47",
        "optionList": [
            {
                "name": "Rice Options",
                "isOptional": false,
                "options": [
                    {
                        "name": "Red Rice",
                        "unitPrice": 0,
                        "optionID": "34"
                    },
                    {
                        "name": "White Rice",
                        "unitPrice": 0,
                        "optionID": "35"
                    },
                    {
                        "name": "No Rice",
                        "unitPrice": 0,
                        "optionID": "36"
                    }
                ]
            }
        ]
    },
    {
        "name": "Sinh Tố Dừa Trân Châu",
        "desc": "Coconut smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B24"
    },
    {
        "name": "Sinh Tố Đậu Đỏ Trân Châu",
        "desc": "Bean smoothie with pearls.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B15"
    },
    {
        "name": "Phở Vè Dòn",
        "desc": "Rice noodle soup with hard flank.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "11",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Gỏi Gà",
        "desc": "Vietnamese chicken and cabbage salad.",
        "category": "Appetizers",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "A8"
    },
    {
        "name": "Mì Xào Mềm (Chay, Bò, Gà, Hoặc Đồ Biển)",
        "desc": "Chow mein (choice of vegetarian, beef, chicken, or seafood).",
        "category": "Party Trays",
        "price": 4500,
        "isAvailable": true,
        "menuNum": "6P",
        "optionList": [
            {
                "name": "Protein Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Chicken",
                        "unitPrice": 0,
                        "optionID": "11"
                    },
                    {
                        "name": "Beef",
                        "unitPrice": 0,
                        "optionID": "12"
                    },
                    {
                        "name": "Seafood",
                        "unitPrice": 0,
                        "optionID": "13"
                    }
                ]
            }
        ]
    },
    {
        "name": "Cơm Gà Siu Siu",
        "desc": "Boiled chicken over rice.",
        "category": "Rice Plates",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "50"
    },
    {
        "name": "Phở Tái",
        "desc": "Rice noodle soup with rare beef.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "6",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Phở Chín, Nam, Gầu, Gân",
        "desc": "Rice noodle soup with well-done brisket flank plate and tendon.",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "3",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Tray Rau Bún cho Chả Cá ",
        "desc": "Veggie & Noodles for Grilled Fish",
        "category": "Party Trays",
        "price": 1500,
        "isAvailable": true,
        "menuNum": "13P"
    },
    {
        "name": "Mì Gà Lòng",
        "desc": "Egg noodle soup with chicken meat and liver.",
        "category": "Chicken Noodle Soups",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "20",
        "optionList": [
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Upgrade to All Dark Meat",
                        "unitPrice": 150,
                        "optionID": "14"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Soda Chanh",
        "desc": "Soda lemonade.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B1"
    },
    {
        "name": "Sinh Tố Đậu Xanh",
        "desc": "Mung bean blended with ice and coconut milk.",
        "category": "Smoothies",
        "price": 650,
        "isAvailable": true,
        "menuNum": "B27"
    },
    {
        "name": "Café Đen Đá",
        "desc": "Ice French coffee.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B12"
    },
    {
        "name": "Chè 3 Màu",
        "desc": "Red beans, green beans pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C3"
    },
    {
        "name": "Cơm Bò Xào Bông Cải",
        "desc": "Beef and broccoli over rice.",
        "category": "Rice Plates",
        "price": 1675,
        "isAvailable": true,
        "menuNum": "49"
    },
    {
        "name": "Trà Thái",
        "desc": "Thai tea.",
        "category": "Beverages",
        "price": 595,
        "isAvailable": true,
        "menuNum": "B10"
    },
    {
        "name": "Cơm Chiên Dương Châu",
        "desc": "Combination fried rice with Chinese sausage and shrimp.",
        "category": "Rice Plates",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "55"
    },
    {
        "name": "Phở Tái, Vè Dòn",
        "desc": "Rice noodle soup with rare beef and hard flank",
        "category": "Beef Noodle Soups",
        "price": 1650,
        "isAvailable": true,
        "menuNum": "12",
        "optionList": [
            {
                "name": "Noodle Choice",
                "isOptional": false,
                "options": [
                    {
                        "name": "Egg Noodles",
                        "unitPrice": 0,
                        "optionID": "1"
                    },
                    {
                        "name": "Rice Noodles",
                        "unitPrice": 0,
                        "optionID": "2"
                    },
                    {
                        "name": "Uncooked Noodles",
                        "unitPrice": 0,
                        "optionID": "3"
                    },
                    {
                        "name": "Fresh Noodles",
                        "unitPrice": 0,
                        "optionID": "4"
                    }
                ]
            },
            {
                "name": "Protein Add On",
                "isOptional": true,
                "options": [
                    {
                        "name": "Add Rare Beef",
                        "unitPrice": 300,
                        "optionID": "7"
                    },
                    {
                        "name": "Add Beef Balls",
                        "unitPrice": 300,
                        "optionID": "8"
                    }
                ]
            }
        ]
    },
    {
        "name": "Chè Thập Cẩm",
        "desc": "Combination beans pandan jelly with coconut milk.",
        "category": "Sweet Dessert",
        "price": 650,
        "isAvailable": true,
        "menuNum": "C2"
    }
]
export default data