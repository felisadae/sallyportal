<?php
	$page_title = "Facebook Page Feed";
	date_default_timezone_set("US/Central");
?>

<?php
	echo "<div class='col-lg-12'>";
	echo "<h1 class='page-header'>{$page_title}</h1>";
	 
	$fb_page_id = "TheRiceThresher";
	$profile_photo_src = "https://graph.facebook.com/{$fb_page_id}/picture?type=square";
	$access_token = "784673474978555|yA9BXg2xD_g5J44A3Prp15Nvebs";
	$fields = "id,message,picture,link,name,description,type,icon,created_time,from,object_id,likes,comments";
	$limit = 5;

	$json_link = "https://graph.facebook.com/{$fb_page_id}/feed?access_token={$access_token}&fields={$fields}&limit={$limit}";
	$json = file_get_contents($json_link); 
	
	$obj = json_decode($json, true);
	$feed_item_count = count($obj['data']);
	for($x=0; $x<$feed_item_count; $x++){
 		

 	//To debug the JSON 
 //    echo "----------------------------\n";
 //    $read_JSON = $obj['data'][$x]; 
	// var_dump($read_JSON);
 //    echo "----------------------------\n";
 	

	    // to get the post id
	    $id = $obj['data'][$x]['id'];
	    $post_id_arr = explode('_', $id); 
	    $post_id = $post_id_arr[1];
	 
	    // user's custom message
	    $message = $obj['data'][$x]['message'];
	    $message_arr = explode('http://www.ricethresher.org', $message);
	    $message_normal = $message_arr[0];
	    $message_url = $message_arr[1];
	 
	    // picture from the link
	    $picture = $obj['data'][$x]['picture'];
	    // $picture_url_arr = explode('&url=', $picture);
	    $picture_url = urldecode($picture);
	 
	    // link posted
	    $link = $obj['data'][$x]['link'];
	 
	    // name or title of the link posted
	    $name = $obj['data'][$x]['name'];
	 
	    $description = $obj['data'][$x]['description'];
	    $type = $obj['data'][$x]['type'];
	 
	    // when it was posted
	    $created_time = $obj['data'][$x]['created_time'];
	    $converted_date_time = date( 'Y-m-d H:i:s', strtotime($created_time));
	    $ago_value = time_elapsed_string($converted_date_time);
	 
	    // from
	    $page_name = $obj['data'][$x]['from']['name'];
	 
	    // useful for photo
	    $object_id = $obj['data'][$x]['object_id'];

	    $likes = count($obj['data'][$x]['likes']['data']);

	    $comments =  count($obj['data'][$x]['comments']['data']);

	    echo "<div class='row'>"; 
	        echo "<div class='col-md-5'>";
	 
	        echo "<div class='profile-info'>";
	            echo "<div class='profile-photo'>";
	                echo "<img src='{$profile_photo_src}' />";
	            echo "</div>";
	 
	            echo "<div class='profile-name'>";
	                echo "<div>";
	                    echo "<a href='https://fb.com/{$fb_page_id}' target='_blank'>{$page_name}</a> ";
	                    echo "shared a ";
	                    if($type=="status"){
	                        $link="https://www.facebook.com/{$fb_page_id}/posts/{$post_id}";
	                    }
	                    echo "<a href='{$link}' target='_blank'>{$type}</a>";
	                echo "</div>";
	                echo "<div class='time-ago'>{$ago_value}</div>";
	            echo "</div>";
	        echo "</div>"; 
	        echo "<div class='profile-message'>{$message_normal}<a href = 'http://www.ricethresher.org{$message_url}'>Check out the article.</a></div>";  
	    echo "</div>";

	    echo "<div class='col-md-7'>";
		    echo "<a href='{$link}' target='_blank' class='post-link'>";
		 
		        echo "<div class='post-content'>";
		 
		            if($type=="status"){
		                echo "<div class='post-status'>";
		                    echo "View on Facebook";
		                echo "</div>";
		            }
		 
		            else if($type=="photo"){
		                echo "<img src='https://graph.facebook.com/{$object_id}/picture' />"; 
		            }
		 
		            else{
		                if($picture_url){
		                    echo "<div class='post-picture'>";
		                        echo "<img src='{$picture_url}' />";
		                    echo "</div>";
		                }
		 
		                echo "<div class='post-info'>";
		                    echo "<div class='post-info-name'>{$name}</div>";
		                    echo "<div class='post-info-description'>{$description}</div>";
		                echo "</div>";
		            }
		        echo "</div>";
		    echo "</a>";

    	echo "<div class='like-count-sum post-content' id = '{$id}' style='padding:.3em; margin:1em 0; cursor:pointer;'>";
            echo "<div style='float:left; margin:0 .6em 0 0;'>";
				echo "<span class='like-icon'></span>";
				echo "{$likes}";
			echo "</div>";
			echo "<div style='float:left;'>";
				echo "<span class='comment-icon'></span>";
				echo "{$comments}";
			echo "</div>";
		echo "</div>";

		echo "<div class='like-count-data' style='display: none;'>";
		echo "</div>";
	
	echo "</div>";
echo "</div>";
		echo "</div>";
	echo "</div>";
	echo "<hr />";

	} 
echo "</div>";
?> 
 
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]--> 
	  
<!-- END: TABS -->

<?php
        // to get 'time ago' text
	function time_elapsed_string($datetime, $full = false) {
	 
	    $now = new DateTime;
	    $ago = new DateTime($datetime);
	    $diff = $now->diff($ago);
	 
	    $diff->w = floor($diff->d / 7);
	    $diff->d -= $diff->w * 7;
	 
	    $string = array(
	        'y' => 'year',
	        'm' => 'month',
	        'w' => 'week',
	        'd' => 'day',
	        'h' => 'hour',
	        'i' => 'minute',
	        's' => 'second',
	    );
	    foreach ($string as $k => &$v) {
	        if ($diff->$k) {
	            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
	        } else {
	            unset($string[$k]);
	        }
	    }
	 
	    if (!$full) $string = array_slice($string, 0, 1);
	    return $string ? implode(', ', $string) . ' ago' : 'just now';
	}
?>

