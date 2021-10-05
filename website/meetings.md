# How to add meetings 
In this guide we'd go in detail about to how add meetings help by moja global on the community website, so as to give the audience access to the records such as meeting notes, recording, etc.

The following steps are needed to be followed to make the process uniform for everyone:-
1. Create an issue on the moh global community website repository about adding that specific meeting to the community page. Make sure to give it the `meeting` tag and ask for it to be assigned to you.
2.  Setup the project locally. If you're not familiar with how to do that, you can find detailed steps for that here. Once you've done that make sure to checkout the `feature/addMeeting` branch.
3. Once you have to project setup locally open the `website` directory inside which you'll find a `communityData` directory which again has a file called `meetings.js` inside it. Navigate to that.
4. Once you've opened that file, you'll see two arrays of meetings, `upcomingMeetings` and `pastMeetings`. Depending on wheter your meeting has been held or not, you'll have to add the data at the first position of one of those arrays.
5. You can create a new meeting by writing something like `new MeetingConstructor(...)` and passing in the required arguments as strings. 
6. Depending on which array you added your meeting in. You can see the corresponding changes on the community page.

#How to Submit Changes
1. To submit your changes, you'll need to push your changes to Github and create a pull request.
    1. To do so, first stage your changes by writing `git add mettings.js` on your terminal.
    2. Then commit your changes by writing `git commit -m '<meeting details here>'`.
    3. And finally push your changes by writing `git push -u feature/addMeeting main`.
2. Once you've pushed your changes you'd be able to see an option to `Open pull request` on the repository. Click on that.
3. You'll see a description box wherein you can write the details of the meeting you just added.
4. Once done, you can create the pull request and one of the maintainers will cross-check the changes and if everything is found correct will approve and merge the pull request.
5. Upon merging you'd be able to see your changes on the live website.