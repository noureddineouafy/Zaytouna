FROM quay.io/inrlwabot/inrl-bot-md:latest
RUN git clone https://github.com/inrlinrlfazfaz-inrl-faz-inrl-faz-3333/dree /root/inrl/
WORKDIR /root/inrl/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
