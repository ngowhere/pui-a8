import os
import json
  
class artWork:
    def __init__(self, src, title = "Untitled"):
        self.title = formatTitle(title)
        self.src = src
        self.description = ""
        self.medium = ""

class digitalWork(artWork):
    def __init__(self, src):
        super().__init__(src)
        self.embed = ""

# Call Build callery on first load of website - that's it
# Store gallery in local files
def buildGallery(directory):
    traditional = []
    digital = []
    
    for filename in os.listdir(directory):
        f = os.path.join(directory, filename)
        # checking if it is a file
        
        if os.path.isfile(f):
            # print(f)
            traditional.append(artWork(f, filename))

    print(traditional)

    for x in traditional:
        jsonstr1 = json.dumps(x.__dict__)
        print(jsonstr1)
    # convert all items into json format
    traditional = [json.dumps(x.__dict__) for x in traditional]
    
    with open('json/trad_data.json', 'w') as outfile:
        for x in traditional:
            json.dump(traditional, outfile)


def formatTitle(name):
    # remove file name
    title = name.split('.')[0]
    # Remove #_Ngo_ 
    title = title.split('_')[-1]
    return title

buildGallery('imgs/trad')
