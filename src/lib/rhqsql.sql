-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 12:40:49
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rhqsql`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` float NOT NULL,
  `num` int(10) NOT NULL,
  `pic` varchar(200) NOT NULL,
  `details` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`, `type`) VALUES
(1, '索尼（SONY）DSC-RX100M6 黑卡数码相机 Vlog视频拍摄套装 1英寸大底（蔡司24-200mm镜头 4K视频 黑卡6）', 8199, 30, '03133aa073247b34.jpg;eb559ee3ebb0cc8c.jpg;1f55e5d696f4387a.jpg;5520279978d2396c.jpg', '品牌： 索尼（SONY）;商品名称：索尼（SONY）DSC-RX100M6黑卡 Vlog视频拍摄套装 1英寸大底（蔡司24-200mm镜头 4K视频 触摸对焦 黑卡6）;商品编号：100001749663;商品毛重：0.725kg;商品产地：中国大陆;特点：大底卡片，WIFI连接，美颜自拍像素：2001万以上传感器尺寸：1英寸颜色：黑色', '数码'),
(2, '索尼（SONY）ILCE-7K 全画幅微单数码相机 标准套装（约2430万有效像素 28-70mm镜头 1080P录像 a7K）', 6699, 25, '5bfd1bddNb9330fbf.jpg;rBEhWVKUETsIAAAAAAIDuAdNkm0AAF8VgH4gnIAAgPQ202.jpg;rBEhWFKUETwIAAAAAAFQktvMO7gAAF8VgJXiiUAAVCq130.jpg;rBEhWVKUET0IAAAAAADq_p3H70EAAF8VgJzImoAAOsW387.jpg', '品牌： 索尼（SONY）;商品名称：索尼α7K/ILCE-7K（28-70mm）;商品编号：1017250;商品毛重：1.42kg;商品产地：泰国;分类：入门级;用途：人物摄影，风光;摄影类型：单镜头套装;功能：WIFI连接像素：2001-4000万传感器尺寸：全画幅颜色：黑', '数码'),
(3, '索尼（SONY）KD-65X8566F 65英寸 大屏4K超高清 智能液晶平板电视 腾讯视频内容（黑色）', 7599, 30, '924c85726fbb436e.jpg;51cba415aaa1933b.jpg;50bc625f8b7693e2.jpg', '品牌： 索尼（SONY）;商品名称：索尼KD-65X8566F;商品编号：6384578;商品毛重：35.0kg;商品产地：中国大陆;观看距离：3m-3.5m（56-65英寸）;分辨率：4k超高清（3840×2160）;电视类型：大屏，4K超清;能效等级：2级;屏幕尺寸：65英寸;选购指数：10.0-8.0', '数码'),
(4, '索尼（SONY）FE 70-200mm F2.8 GM OSS 全画幅远摄变焦G大师镜头 E卡口（SEL70200GM）', 17299, 10, '5b078249N188e2a29.jpg;58f82010N4490d335.jpg;58f82016Ndafcc188.jpg', '品牌： 索尼（SONY）;商品名称：索尼SEL70200GM;商品编号：4908826;商品毛重：2.2kg;商品产地：泰国;卡口：索尼;卡口品种：微单;镜头用途：风景摄影;类型：远摄变焦画幅：全画幅', '数码'),
(5, '索尼（SONY）WH-1000XM2 Hi-Res无线蓝牙耳机 智能降噪耳机 头戴式 1000x二代 黑色', 1649, 150, '5b03c877N5c2ae15b.jpg;0b1778a718be940f.jpg;24a59e91b58ec10e.jpg;69a01e154d584777.jpg', '品牌： 索尼（SONY）;商品名称：索尼WH-1000XM2;商品编号：5658235;商品毛重：0.87kg;商品产地：马来西亚;耳机配件：线材;发声原理：动圈;热词：HiFi发烧;连接类型：无线;用途：潮流出街;适用音乐类型：流行、摇滚、电音;佩戴方式：头戴式', '数码'),
(6, '索尼（SONY）IER-Z1R Hi-Res高解析度入耳式立体声耳机 银色', 12999, 5, '0e8ffc6c5cc6b9ab.jpg;d2fcb5744a7b3eb7.jpg;ebb3e382ba26e46d.jpg', '品牌： 索尼（SONY）;商品名称：索尼IER-Z1R;商品编号：100004172244;商品毛重：1.18kg;商品产地：日本;耳机配件：线材;用途：HIFI;连接类型：有线;热词：HiFi发烧;适用音乐类型：古典/爵士/蓝调;佩戴方式：入耳式', '数码'),
(7, '索尼（SONY）Hi-Res高解析度无损音乐播放器16GB NW-ZX300A（黑色）', 2699, 200, '59b108b8Na660fd45.jpg;59b24a5cN76e3a401.jpg', '品牌： 索尼（SONY）;商品名称：索尼NW-ZX300A;商品编号：5451938;商品毛重：360.00g;商品产地：马来西亚;附加功能：支持蓝牙;音频播放格式：MP3，WMA，FLAC，AAC;容量：16G;屏幕尺寸：1.2英寸-3.5英寸;类别：HIFI播放器', '数码'),
(8, '三只松鼠每日坚果干果坚果礼盒大礼包孕妇零食小吃榛子巴旦木仁葡萄干核桃仁开心果混合果仁30袋装750g/盒', 138, 50000, '0a0ec4be7251df87.jpg;53a3f652d7377246.jpg;0eef81324318e6f5.jpg', '品牌： 三只松鼠（Three Squirrels）;商品名称：三只松鼠每日坚果750g;商品编号：100000499657;商品毛重：1.0kg;商品产地：江苏省南京市;国产/进口：国产;口味：混合味;特性：果仁;规格：501g-1kg', '食品'),
(9, '雀巢(Nestle) 脆脆鲨 休闲零食 威化饼干 巧克力口味640g（24*20g+赠8*20g）', 25.8, 14000, '5b7b9167N1a48e42d.jpg;5b7b9174Nd2c48a3f.jpg;5ce51739N4d14f180.jpg', '品牌： 雀巢（Nestle）;商品名称：雀巢巧克力;商品编号：508411;商品毛重：0.72kg;商品产地：天津;货号：12379596;是否含糖：含糖;口味：巧克力味;类别：威化饼干;包装：盒装;国产/进口：国产', '食品'),
(10, '港荣蒸蛋糕 饼干蛋糕 手撕面包口袋吐司 营养早餐食品 休闲零食小吃 奶香整箱900g', 39.9, 2500, 'e97073b9fee27e1d.jpg;5baf1886Ned91ddbc.jpg;0fc9ee771e72a589.jpg', '品牌： 港荣;商品名称：港荣蒸奶香蛋糕整箱1kg 蒸蛋糕 饼干蛋糕软面包零食品;商品编号：2540415;商品毛重：1.21kg;商品产地：中国广东揭阳;是否含糖：含糖;口味：原味;类别：其它;包装：整箱装;国产/进口：国产', '食品'),
(11, '洪湖渔家 麻辣小龙虾虾尾300g*2盒 海鲜虾球', 99, 15000, '5bea9180N34a4e808.jpg;5beaa1c0N7174995d.jpg;5beaa1c0Nd1ba955b.jpg', '品牌： 洪湖渔家;商品名称：【爆款秒杀领券第二份0元】洪湖渔家 麻辣小龙虾虾尾300g*2盒 海鲜虾球;商品编号：22750762170;店铺： 洪湖渔家旗舰店;商品毛重：0.72kg;保存状态：冷冻;重量：500g-999g;套餐分量：2人份;国产/进口：国产;;分类：小龙虾;包装：简装;烹饪建议：加热即食', '食品');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(16) NOT NULL,
  `user_password` varchar(16) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_phone` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_password`, `user_email`, `user_phone`) VALUES
(22, 'user05', 'asdasd', 'asd@hjg.1', '15319998888'),
(20, 'user02', '123456', 'asd@1.2', '15588887777'),
(23, 'user04', '456789', '456@123.1', '13355557777'),
(21, 'user03', 'fd4gv1', 'dasd@sdf.1', '13699566667'),
(19, 'user01', '123456', '123@12.1', '15555555555'),
(24, 'u123456', '123456789', '123@456.789', '16666666666'),
(26, 'u1234567', '456789123', '123@456.987', '13333333333'),
(27, 'u123456789', '654987', '123@789.456', '13666666666'),
(28, 'a123456789', '789456123', '', '15355555555'),
(29, 'qf1903', '123456', 'qf@qq.com', '18888888888');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
