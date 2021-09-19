#read list using generator
def readLog(log):
    for msg in log:
        yield msg
#get the messag by type, INFO is the default value of msgType
def splitMessages(log,msgType='INFO'):
    #get generator of splited list by character \n
    msgs = readLog(log.split('\n')) 
    #iterate the resultat
    for msg in msgs:
        #split message by space
        splited = msg.split()
        if msgType in splited:
            #get the index of msgType
            msgTypeIndex = splited.index(msgType)
            #yield the message
            yield " ".join(splited[msgTypeIndex+1:])

