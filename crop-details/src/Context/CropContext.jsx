import React from "react";
import { createContext } from "react";

export const CropContext = createContext();

export const ContextProvider = ({ children }) => {
  const cropData = [
    {
      Name: "Rice",
      Url: "https://wikifarmer.com/hi/%E0%A4%9A%E0%A4%BE%E0%A4%B5%E0%A4%B2-%E0%A4%95%E0%A5%80-%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%80-%E0%A4%B9/#:~:text=%E0%A4%A4%E0%A4%B0%E0%A4%BE%E0%A4%88%20%E0%A4%AF%E0%A4%BE%20%E0%A4%A7%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80,%E0%A4%94%E0%A4%B0%20%E0%A4%97%E0%A4%B9%E0%A4%B0%E0%A5%87%20%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80%20%E0%A4%95%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B5%E0%A4%B2%E0%A5%A4/",
      Soil: "Clay or clay loams",
      Season: "June-July",
      Image:
        "https://www.agrifarming.in/wp-content/uploads/2015/09/Rice-Cultivation-2.jpg",
      Avg: "2922.00 INR/Quintal",
      Youtube: "https://youtu.be/_sSl86SOfzo",
      Description:
        "चावल को अंग्रेजी में Rice कहते है। तमिल भाषा में चावल को अरिसी कहते है। उड़िया में चावल को चाऊल, तेलुगु में वडुलु, मराठी में तांदुल कहते है। चावल के पौधे की ऊंचाई बहुत कम होती है। इसे धान का पौधा भी कहते है। इस पौधे के बीज से ही प्रोसेस करके चावल निकाला जाता है। बीज का ऊपरी छिलका हटाकर इसे चमकाते है। चावल की तासीर ठंडी प्रकृति की होती है। चावल की खेती करने के लिए पानी की अत्यधिक आवश्यकता रहती है। करीब 1 किलो चावल की पैदावार के लिए 2 हजार लीटर पानी चाहिए। चावल की खेती ऐसी जगह पर की जाती है जो पानी से भरी हो। चावल का पौधा पानी में ही रोपा जाता है। ",
    },
    {
      Name: "Wheat",
      Url: "https://www.kisaanhelpline.com/crops/rabi/2_Wheat#:~:text=%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%80%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%88%20%E0%A4%AC%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%88%20%E0%A4%95%E0%A5%87%203,%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%AC%E0%A4%BE%E0%A4%A6%204%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%88%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82%E0%A5%A4",
      Soil: "Well-drained loam and clay loams",
      Season: "Autumn",
      Image:
        "https://www.farmingindia.in/wp-content/uploads/2019/05/wheat-cultivation-india.jpg",
      Avg: "2300.00 INR/Quintal",
      Youtube: "https://youtu.be/LAGZgg65Syk",
      Description:
        "गेहूँ मध्य पूर्व के लेवांत क्षेत्र से आई एक घास है, जिसकी खेती दुनिया भर में की जाती है। विश्व भर में, भोजन के लिए उगाई जाने वाली धान्य फसलों मे मक्का के बाद गेहूं दूसरी सबसे ज्यादा उगाई जाने वाले फसल है, गेहूँ की उपज लगातार बढ रही है। यह वृध्दि गेहूँ की उन्नत किस्मों तथा वैज्ञानिक विधियों से हो रही है। भारत गेहूं का दूसरा बड़ा उत्पादक देश है केरल, मणिपुर व नागालैंड राज्यों को छोड़ कर अन्य सभी राज्यों में इस की खेती की जाती है उत्तर प्रदेश, मध्य प्रदेश व पंजाब सर्वाधिक रकबे में गेहूं की पैदावार करने वाले राज्य हैं।यह प्रोटीन, विटामिन और कार्बोहाइड्रेटस का प्रमुख स्त्रोत है और संतुलित भोजन प्रदान करता है। रूस, अमरीका और चीन के बाद भारत दुनिया का चौथा सबसे बड़ा गेहूं का उत्पादक है। विश्व में पैदा होने वाली गेंहूं की पैदावार में भारत का योगदान 8.7 फीसदी है।",
    },
    {
      Name: "Tea",
      Url: "https://www.kisaanhelpline.com/crops/herbal/122-Tea#:~:text=%E0%A4%9A%E0%A4%BE%E0%A4%AF%20%E0%A4%95%E0%A5%80%20%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80%20%E0%A4%95%E0%A5%87%20%E0%A4%B2%E0%A4%BF%E0%A4%8F%20%E0%A4%97%E0%A4%B0%E0%A5%8D%E0%A4%AE%20%E0%A4%86%E0%A4%A6%E0%A5%8D%E0%A4%B0%20%E0%A4%9C%E0%A4%B2%E0%A4%B5%E0%A4%BE%E0%A4%AF%E0%A5%81%20%E0%A4%B8%E0%A4%AC%E0%A4%B8%E0%A5%87%20%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%AE,%E0%A4%87%E0%A4%B8%E0%A4%95%E0%A5%80%20%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%80%20%E0%A4%AA%E0%A5%88%E0%A4%A6%E0%A4%BE%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4&text=%E0%A4%9A%E0%A4%BE%E0%A4%AF%20%E0%A4%95%E0%A5%87%20%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%87%20%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%AA%E0%A4%BE%E0%A4%A6%E0%A4%A8%20%E0%A4%95%E0%A5%87,%E0%A4%AE%E0%A4%BF%E0%A4%9F%E0%A5%8D%E0%A4%9F%E0%A5%80%20%E0%A4%B8%E0%A4%AC%E0%A4%B8%E0%A5%87%20%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A5%80%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4",
      Soil: "deep and fertile well-drained laterite Soil",
      Season: "Spring",
      Image:
        "https://www.agrifarming.in/wp-content/uploads/2015/04/Tea-Garden..jpg",
      Avg: "1462.00 INR/Quintal",
      Youtube: "https://youtu.be/458clVDL7J4",
      Description:
        "भारत में चाय के सम्बन्ध में एक हैरान करने वाला तथ्य यह है कि दौ सो वर्ष पूर्व यहाँ कोई व्यक्ति चाय से परिचित नहीं था मगर एक योजना के तहत सड़कों पर चाय के ड्रम रखे गये आने जाने वाले लोगों को मुफ्त में चाय पिलाई गई और इसका नतीजा यह हुआ कि आज एक अरब भारतीयों के दिन की शुरुआत चाय की प्याली से ही होती हैं.चाय के आविष्कार और इसकी पत्तियों की पहचान से जुड़ी रोचक कहानी चीन के एक शासक शेन की हैं. कहते है कि वे हमेशा उबला हुआ पानी ही पीया करते थे. उनका निजी रसोइया ली उनके लिए पानी तैयार करता था. एक दिन अनायास ही जब वह पानी को उबाल रहा था तो पास ही उगी झाड़ी की कुछ पत्तियां उसमें आ गिरी, और उबलते जल में वे भी उबल गई और पानी का रंग बदल गया.",
    },
    {
      Name: "Sugarcane",
      Url: "https://www.theruralindia.in/2021/08/sugarcane-farming-in-hindi.html#:~:text=%E0%A4%AE%E0%A4%BF%E0%A4%B2%20%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4-,%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80%20%E0%A4%95%E0%A5%80%20%E0%A4%A4%E0%A5%88%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82,%E0%A4%95%E0%A5%8B%20%E0%A4%86%E0%A4%B5%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%95%20%E0%A4%AA%E0%A5%8B%E0%A4%B7%E0%A4%95%20%E0%A4%A4%E0%A4%A4%E0%A5%8D%E0%A4%B5%20%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%82%E0%A4%97%E0%A5%87%E0%A5%A4",
      Soil: "Loamy Soil",
      Season: "Autumn/Spring",
      Image: "https://wallpaperaccess.com/full/4273549.jpg",
      Avg: "282.125 INR/Quintal",
      Youtube: "https://youtu.be/ekytRPNKrgw",
      Description:
        "इतिहास में झांके तो गन्ने का सर्वप्रथम उत्पादन पपाया न्यू गिनी में हुआ था। भारत गन्ना उत्पादन में विश्व में दूसरे स्थान पर आता है। भारत में गन्ना कृषि के मुख्य राज्य उत्तर प्रदेश, महाराष्ट्र, कर्नाटक, तमिलनाडु है। वैसे तो पूरे भारत मे इसकी खेती होती है। इसकी फसल किसी भी मौसम में ली जा सकती है।गन्ने का पौधा आकार में लम्बा होता है। करीब 30 फ़ीट तक इसकी लम्बाई चली जाती है। इसके तने की मोटाई कम होती है। रस इसी तने से निकाला जाता है। तने के ऊपर छिलका होता है जिसके नीचे रेशेदार सफेद रंग की गुदा होती है। इसी गुदा में मीठा रस भरा होता है। गन्ना के पौधे की हरे रंग की पत्तियां भी होती है।",
    },
    {
      Name: "Cotton",
      Url: "https://www.kisaanhelpline.com/crops/kharif/7_Cotton#:~:text=%E0%A4%95%E0%A4%AA%E0%A4%BE%E0%A4%B8%20%E0%A4%95%E0%A5%80%20%E0%A4%AC%E0%A5%81%E0%A4%B5%E0%A4%BE%E0%A4%88%20%E0%A4%B8%E0%A5%87%20%E0%A4%AA%E0%A4%B9%E0%A4%B2%E0%A5%87,%E0%A4%AB%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%AB%E0%A5%8B%E0%A4%B0%E0%A4%B8%20%E0%A4%95%E0%A5%80%20%E0%A4%86%E0%A4%B5%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4",
      Soil: "Black Soil",
      Season: "March-June",
      Image:
        "https://www.just-style.com/wp-content/uploads/sites/27/2021/07/2017-03-07-17-04-cotton4_cropped_70-4.jpg",
      Avg: "8400 INR/Quintal",
      Youtube: "https://youtu.be/0mDByGrFHik",
      Description:
        "कपास एक नकदी फसल हैं। यह मालवेसी कुल का सदस्य है। संसार में इसकी 2 किस्म पाई जाती है। प्रथम को देशी कपास (गासिपियाम अर्बोरियाम)एवं (गा; हरबेरियम) के नाम से जाना तथा दूसरे को अमेरिकन कपास (गा, हिर्सूटम)एवम् (बरवेडेंस)के नाम से जाता है। इससे रुई तैयार की जाती हैं, जिसे सफेद सोना कहा जाता हैं| कपास के पौधे बहुवर्षीय, झड़ीनुमा वृक्ष जैसे होते है। जिनकी लंबाई 2-7 फीट होती है। पुष्प, सफेद अथवा हल्के पीले रंग के होते है। कपास के फल बाल्स (balls) कहलाते है, जो चिकने व हरे पीले रंग के होते हैं इनके ऊपर ब्रैक्टियोल्स कांटो जैसी रचना होती है। फल के अन्दर बीज व कपास होती है। कपास की फसल उत्पादन के लिये काली मिट्टी की आवश्यकता पड़ती है। भारत में सबसे ज्यादा कपास उत्पादन महाराष्ट्रमें होता है। कपास से निर्मित वस्त्र सूती वस्त्र कहलाते है। कपास मे मुख्य रूप से सेल्यूलोस होता है।",
    },
    {
      Name: "Oilseeds",
      Url: "https://www.abplive.com/agriculture/groundnut-mustard-sesame-and-flaxseed-farming-helps-to-get-double-profit-from-oil-seeds-oil-cake-2212662",
      Soil: "Clay loams, deep black Soil's and alluvial Soil's",
      Season: "March-April",
      Image:
        "https://blog.agribazaar.com/wp-content/uploads/2020/07/PO17Oilseeds.jpg",
      Avg: "590 INR/Quintal",
      Youtube: "https://youtu.be/-QRP_JuMoFw",
      Description:
        "वह फसलें, जिनका उपयोग तेल उत्पादन (Oil production) के लिए किया जाता है, उन्हें तिलहनी फसलें (oilseed crops) कहा जाता है। कुछ प्रमुख तिलहनी फसलें निम्नलिखित है  –सोयाबीन (Glycine Max), रेपसीड / कैनोला (Brassica napus), ताड़ (Alaise ginensis), सरसों (Synapis deer), सूरजमुखी (Helianthus annus), कपास (Gossypium hirsutum), अलसी (Linum utitissimatum), मूंगफली (Arachis hypogaea), कैमलिना (Camelina sativa), अरंडी (Ricinus communis), जत्रोफा (Jatropha curcas), जोजोबा (Simmondsia chinensis) आदि।भारत में लगभग 72% तिलहनी फसलें वर्षा पर आधारित रहती है, तिलहनी फसलों को खाद्यान्न वर्ग की फसलों के बाद देश में दूसरा स्थान है।अरंडी, रामतिल, कुसुम और अलसी के उत्पादन में भारत का विश्व में प्रथम स्थान रखता है।",
    },
    {
      Name: "Jute",
      Url: "https://hindi.krishijagran.com/farm-activities/jute-farming-method-of-advanced-jute-farming/",
      Soil: "Grey alluvial Soil",
      Season: "Rainy Season",
      Image:
        "https://minio.scielo.br/documentstore/1517-7076/HPgSbgr4WGcVtWXHsJbYcrC/20410effb3c51e518dbb0598d53e9ced9ad75453.jpg",
      Avg: "5326.00 INR/Quintal",
      Youtube: "https://youtu.be/Y4wzO75tMjM",
      Description:
        "जूट फाइबर एक प्रकार का प्लांट फाइबर है जो व्यापक रूप से मजबूत और मोटे धागों में काता जाने की क्षमता के लिए जाना जाता है। अलग-अलग जूट रेशों को प्रकृति में नरम, लंबा और चमकदार माना जाता है। माना जाता है कि जीनस कॉर्कोरस से संबंधित पौधे इस फाइबर के प्राथमिक उत्पादक हैं। यह ध्यान रखना महत्वपूर्ण है कि टाट के कपड़े, टाट के कपड़े या बर्लेप के कपड़े के उत्पादन में जिन रेशों का उपयोग किया जाता है, वे आमतौर पर जूट के रेशे होते हैं।",
    },
  ];
  const [searchedData, setSearchedData] = React.useState([]);
  React.useEffect(() => {
    console.log("s", searchedData);
  }, [searchedData]);
  return (
    <CropContext.Provider value={{ cropData, searchedData, setSearchedData }}>
      {children}
    </CropContext.Provider>
  );
};
