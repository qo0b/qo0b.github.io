This portfolio consists of data and data-adjacent analyses of the mobile game World Flipper. 

World Flipper is a **gacha game**: a live-service game in which progress is correlated to the number of and investment in units you own from an ever-increasing pool. Generally, units are obtained by chance from currency obtained through gameplay, though at far insufficient rates and quantities to obtain every unit on release. These units can then be used to build teams for World Flipper's pinball-inspired gameplay, involving its eponymous flippers. 

There are a few reasons I've chosen to orient this portfolio around World Flipper. World Flipper:
- has international servers. The Japanese server is 1.5 years ahead of the global server, which closely parallels the Japanese timeline. This provides a rare explicit check on the accuracy of prediction and forcasting analyses.
- has uncommonly complex team-building mechanics and interactions in conjunction with a large pool of viable units, which leads to significant variability in teams and hence interesting datasets to analyze.
- is fun, engaging, and has a history of collaborative, community-driven tools. I've developed multiple projects for the community, many of which I subsequently adapted for this portfolio. 

The projects in this portfolio are:
- a [team-building reference](tbguide.pdf) based directly from game code that was decompiled and partially deobfuscated by a community tool. Among other things, I reconstructed the game's damage formula and provided hitherto unknown information about game mechanics that I leveraged into guiding principles for team-building. Intended as a **writing sample for technical writing and for data interpretation aimed at a non-technical audience.**
- an [involved calculation](wfnew.html) of the cumulative distribution function of pulls required to obtain a certain selection of units over an annual schedule of rate-up banners. Intended as a **writing sample for technical writing and as a write-up aimed at a technical audience.**
- an [income forecast](wfincome.html) employing time series analysis (STL decomposition, ARIMA models) to predict future income on the global server, as a complement to the previous project. The results aren't particularly promising; we explore why not. Intended as an example of **data modeling, prediction, and exploration** via fundamental time series mdoels.
- a [basic visualization](unitdata.html) of unit and equipment data. Intended as an example of **front-end, interactive data visualization employing HTML, JS, and CSS.**
- an [exploratory analysis](ecrirescraper.html) of team-building principles based on a data set scraped from the EcrireBot website. The classic data analysis task; intended as an example of **data scraping, cleaning, exploration, and analysis** to uncover general underlying principles.

For more formal projects, please refer to the papers discussed in my resume.