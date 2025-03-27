UPDATE product
SET image = (
    CASE 
        WHEN price % 15 = 0 THEN '/mock/calamari.jpeg'
        WHEN price % 15 = 1 THEN '/mock/gyoza.jpeg'
        WHEN price % 15 = 2 THEN '/mock/hoso-avocado.jpeg'
        WHEN price % 15 = 3 THEN '/mock/involtino-primavera.jpeg'
        WHEN price % 15 = 4 THEN '/mock/manzo-con-funghi-e-bunbu.jpeg'
        WHEN price % 15 = 5 THEN '/mock/pollo-al-curry-con-patate.jpeg'
        WHEN price % 15 = 6 THEN '/mock/pollo-al-gongbao.jpeg'
        WHEN price % 15 = 7 THEN '/mock/pollo-con-mandorle.jpeg'
        WHEN price % 15 = 8 THEN '/mock/pollo-in-agrodolce.jpeg'
        WHEN price % 15 = 9 THEN '/mock/ramen.jpeg'
        WHEN price % 15 = 10 THEN '/mock/spaghetti.jpeg'
        WHEN price % 15 = 11 THEN '/mock/tacos.jpeg'
        WHEN price % 15 = 12 THEN '/mock/ura-philadelphia.jpeg'
        WHEN price % 15 = 13 THEN '/mock/ura-spyce-maguro.jpeg'
        ELSE '/mock/uramaki-california.jpeg'
    END
);
