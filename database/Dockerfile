FROM liquibase/liquibase

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /liquibase/wait
USER root


RUN : \
    && /bin/echo -e "/liquibase/wait;liquibase --classpath=/liquibase --url=jdbc:mysql://prisma-mysql:3306/prismaissue --logLevel=info --changeLogFile=changelog/master.xml --username=prismauser --password=prismapass update" > ./exe \
    && chmod +x ./exe \
    && chmod +x ./wait \
    && pwd 

CMD ["./exe"]


