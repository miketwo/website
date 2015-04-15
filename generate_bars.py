#!/usr/bin/env python
'''
Generates bars.css and replaces text in index.html to generate the skill bar
section of the resume.
'''
import os
import re
import random

# ToDo - use this data structure instead of a dictionary
class Skill(object):
    def __init__(self, skill_name, confidence):
        self.skill_name = skill_name
        self.conf = confidence

    def __str__(self):
        safename = skill_name.replace('+','plus').lower()
        return safename



# KV pairs of skill and percent confidence (out of 100)
bars = {
    "python": 98,
    "django": 87,
    "ansible": 90,
    "jenkins": 93,
    "unittest": 95,
    "git": 94,
}


def main():
    text = ""
    invocation = ""
    for key, value in bars.iteritems():
        seconds = random.uniform(1, 5)
        text += '''
        .{key} {{
            width: {value}%;
            -moz-animation: {key} {seconds}s ease;
            -webkit-animation: {key} {seconds}s ease;
        }}
        @-moz-keyframes {key} {{
          0%   {{ width: 0px;  }}
          {value}% {{ width: {value}%;  }}
        }}
        @-webkit-keyframes {key} {{
          0%   {{ width: 0px;  }}
          {value}% {{ width: {value}%;  }}
        }}
        '''.format(key=key, value=value, seconds=seconds)

        invocation += '''<li><span class="bar-expand {key}"></span><em>{tkey}</em></li>
        '''.format(key=key, tkey=key.title())

    curdir = os.path.dirname(os.path.realpath(__file__))
    filename = "{}/static_website/css/bars.css".format(curdir)
    with open(filename, 'w') as f:
        f.write(text)

    update_html(invocation)

def update_html(new_doc_info):
    '''
    Replace skill section in index.html
    '''
    curdir = os.path.dirname(os.path.realpath(__file__))
    filename = "{}/static_website/index.html".format(curdir)
    START_MARKER = "<!-- AUTOMATICALLY GENERATED START -->"
    END_MARKER = "<!-- AUTOMATICALLY GENERATED END -->"
    with open(filename, 'r+') as f:
        full_text = f.read()

        # Replace the area between marker tags with docstring text
        pattern = ('(?<={})(\r?\n)'
                   '(.*?)'
                   '(?=\r?\n{})'.format(re.escape(START_MARKER),
                                        re.escape(END_MARKER)))
        reg = re.compile(pattern,
                         re.DOTALL)

        if not reg.search(full_text):
            raise Exception("Couldn't find pattern to replace.")

        new_text = reg.sub('\n'+new_doc_info, full_text)
        f.seek(0)
        f.write(new_text)
        f.truncate()
    print ("{} was updated with new skills. You may want to split the "
           "skills into two columns manually now.".format(filename))


if __name__ == '__main__':
    main()
